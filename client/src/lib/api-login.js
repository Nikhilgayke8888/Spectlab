import axios from "axios";
import { LOGIN_BASE_PATH } from "./api-base-paths";


export const loginEmployee = (data,controller) => {
  try {
    return axios.post(`${LOGIN_BASE_PATH}/loginemployee`,data, {
      signal: controller?.signal,
    });
  } catch (error) {
    
    console.error('Error fetching :', error);
    throw error;
  }
};