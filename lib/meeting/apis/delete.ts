import axios from '../../common/axios';
import { stringify } from '../../common/helpers/querstring.helper';

function deleteMeetingPath(payload: DeleteMeetingParam) {
  return `/meetings/${payload.meetingId}`;
}

export async function deleteMeeting(payload: DeleteMeetingPayload) {
  const { param, query, accessToken } = payload;
  const path = `${deleteMeetingPath(param)}?${stringify(query)}`;
  try {
    const { data } = await axios.delete(path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (err) {
    throw err;
  }
}

interface DeleteMeetingParam {
  meetingId: number;
}

interface DeleteMeetingPayload {
  param: DeleteMeetingParam;

  query: DeleteMeetingQuery;

  accessToken: string;
}

interface DeleteMeetingQuery {
  occurrence_id?: string;

  schedule_for_reminder?: boolean;

  cancel_meeting_reminder?: boolean;
}
