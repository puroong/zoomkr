# ZOOMKR

Zoom Library for Nodejs

Alternative for zoomus

[![npm version](https://img.shields.io/npm/v/zoomkr.svg?style=flat-square)](https://www.npmjs.org/package/zoomkr)

## Table of Contents

* Features
* Installing
* Example
* Instance methods

## Features

[Zoom API Reference](https://marketplace.zoom.us/docs/api-reference/zoom-api)

* Meeting
    * [create](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate)
    * [list](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetings)
    * [get](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meeting)
    * [delete](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingdelete)


## Installing

You can install this package with `npm`

`npm install zoomkr`

## Example

```javascript
async test() {
    const Zoom = require('zoomkr');
    const accessToken = 'your access token'
    const meeting = await Zoom.meeting.get({ param: { meetingId: 789789 }, query: {}, acccessToken });

    console.log(meeting);
}
```

## Instance methods

All methods should be given only one argument with type of ApiPayload.

ApiPayload has param, query, body and acceessToken.

```
function method(payload: ApiPayload) {
    ....
}

export interface ApiPayload<P, Q, B> {
    param: P;

    query: Q;

    body: B;

    accessToken: string;
}
```