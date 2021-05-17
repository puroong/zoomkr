import axios from 'axios';
import { ZOOM_API_HOST } from './constants/core.constant';

export default axios.create({
  baseURL: ZOOM_API_HOST,
});
