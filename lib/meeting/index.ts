import { createMeeting } from './apis/create';
import { deleteMeeting } from './apis/delete';
import { getMeeting } from './apis/get-one';
import { listMeeting } from './apis/list';

export const meeting = {
  create: createMeeting,
  list: listMeeting,
  delete: deleteMeeting,
  get: getMeeting,
};
