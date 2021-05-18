import { createMeeting } from './apis/create.api';
import { deleteMeeting } from './apis/delete';
import { listMeeting } from './apis/list.api';

export const meeting = {
  create: createMeeting,
  list: listMeeting,
  delete: deleteMeeting,
};
