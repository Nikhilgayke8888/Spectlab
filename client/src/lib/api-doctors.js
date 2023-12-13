import axios from "axios";
import { DOCTORS_BASE_PATH } from "./api-base-paths";


export const getAllDoctors = (controller) => {
  try {
    return axios.get(`${DOCTORS_BASE_PATH}/getAllDoctors`, {
      signal: controller?.signal,
    });
  } catch (error) {
    
    console.error('Error fetching users:', error);
    throw error;
  }
};