import { ApiPayload } from '../../common/api-payload.interface';
import axios from '../../common/axios';
import { stringify } from '../../common/helpers/querstring.helper';

function getMeetingPath(payload: GetMeetingParam) {
  return `/meetings/${payload.meetingId}`;
}

export async function getMeeting(payload: GetMeetingPayload) {
  const { param, query, accessToken } = payload;
  const path = `${getMeetingPath(param)}?${stringify(query)}`;

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

export interface GetMeetingParam {
  meetingId: number;
}

export interface GetMeetingQuery {
  occurrence_id: string;

  show_previous_occurences: boolean;
}

export interface GetMeetingPayload
  extends ApiPayload<GetMeetingParam, GetMeetingQuery, undefined> {}
