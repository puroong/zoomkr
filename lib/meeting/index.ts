import { createMeeting } from './apis/create.api';
import { listMeeting } from './apis/list.api';

export const meeting = {
  create: createMeeting,
  list: listMeeting,
};