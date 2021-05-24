require('dotenv/config')

const express = require('express')
const { Zoom: zoom } = require('zoomkr');
const app = express()

if(!process.env.clientID) throw new Error('process.env.clientID not set');
if(!process.env.clientSecret) throw new Error('process.env.clientSecret not set');
if(!process.env.redirectURL) throw new Error('process.env.redirectURL not set');

app.get('/', async (req, res) => {
    if(req.query.code) {
        const credential = {
            clientId: process.env.clientID,
            clientSecret: process.env.clientSecret,
        }

        const param = {
            grantType: 'authorization_code',
            code: req.query.code,
            redirectUri: process.env.redirectURL
        }

        const accessToken = await zoom.auth.getAccessToken(credential, param);
        const newMeeting = await zoom.meeting.create({ param: { userId: 'me' }, body: {}, accessToken });
        const meetings = await zoom.meeting.list({ param: { userId: 'me' }, query: {}, accessToken });
        
        res.status(200).json(meetings);
    }
})

app.listen(4000, () => console.log(`Zoom Hello World app listening at PORT: 4000`))
