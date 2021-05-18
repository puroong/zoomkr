import axios from '../../core/axios';
import { stringify } from '../../core/helpers/querstring.helper';
import { ListMeetingParam, ListMeetingPayload } from '../types';

function listMeetingPath(payload: ListMeetingParam) {
  return `/users/${payload.userId}/meetings`;
}

export async function listMeeting(payload: ListMeetingPayload) {
  const { param, query, accessToken } = payload;
  const path = `${listMeetingPath(param)}?${stringify(query)}`;

  try {
    const { data } = await axios.get(path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (err) {
    throw err;
  }
}
