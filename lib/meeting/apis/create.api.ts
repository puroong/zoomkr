import axios from '../../core/axios';
import { CreateMeetingParameter, CreateMeetingPayload } from '../types';

function createMeetingPath(payload: CreateMeetingParameter) {
    return `/users/${payload.userId}/meetings`;
}

export async function createMeeting(payload: CreateMeetingPayload) {
    const { parameter, body, accessToken } = payload;
    const path = createMeetingPath(parameter);
    
    try {
        const { data } = await axios.post(path, body, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return data;
    } catch(err) {
        throw err;
    }
}