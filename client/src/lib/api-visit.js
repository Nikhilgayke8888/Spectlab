import axios from 'axios';
import { VISIT_BASE_PATH } from './api-base-paths';

export const getAllVisits = (controller) => {
    try {
      return axios.get(`${VISIT_BASE_PATH}/getVisit`, {
        signal: controller?.signal,
      });
    } catch (error) {
      
      console.error('Error fetching users:', error);
      throw error;
    }
  };