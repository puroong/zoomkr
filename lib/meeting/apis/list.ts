import { ApiPayload } from '../../common/api-payload.interface';
import axios from '../../common/axios';
import { stringify } from '../../common/helpers/querstring.helper';

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

export interface ListMeetingParam {
  userId: string;
}

enum MeetingType {
  SCHEDULED = 'scheduled',
  LIVE = 'live',
  UPCOMING = 'upcoming',
}

export interface ListMeetingQuery {
  type?: MeetingType;

  page_size?: number;

  next_page_token?: string;

  page_number?: string;
}

export interface ListMeetingPayload
  extends ApiPayload<ListMeetingParam, ListMeetingQuery, undefined> {}
