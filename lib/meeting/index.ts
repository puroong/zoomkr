import { createMeeting } from './apis/create';
import { deleteMeeting } from './apis/delete';
import { listMeeting } from './apis/list';

export const meeting = {
  create: createMeeting,
  list: listMeeting,
  delete: deleteMeeting,
};
