import axios from '../../core/axios';
import { CreateMeetingParam, CreateMeetingPayload } from '../types';

function createMeetingPath(payload: CreateMeetingParam) {
  return `/users/${payload.userId}/meetings`;
}

export async function createMeeting(payload: CreateMeetingPayload) {
  const { param, body, accessToken } = payload;
  const path = createMeetingPath(param);

  try {
    const { data } = await axios.post(path, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (err) {
    throw err;
  }
}
