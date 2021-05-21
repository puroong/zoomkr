import { auth } from './auth';
import { meeting } from './meeting';

export type Zoomkr = typeof Zoom;

export const Zoom = {
  auth,
  meeting,
};
