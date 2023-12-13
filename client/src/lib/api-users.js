import axios from 'axios';
import { USER_BASE_PATH } from './api-base-paths';


export const getAllUsers = (controller) => {
  try {
    return axios.get(`${USER_BASE_PATH}/getUser`, {
      signal: controller?.signal,
    });
  } catch (error) {
    
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const addUser = (data, controller) => {
  return axios.post(`${USER_BASE_PATH}/adduser`, data, {
    signal: controller?.signal,
  });
};

export const updateUser = (data,id, controller) => {
  return axios.put(`${USER_BASE_PATH}/updateUser/${id}`, data, {
    signal: controller?.signal,
  });
};

export const deleteUser = (id, controller) => {
  return axios.delete(`${USER_BASE_PATH}/deleteUser/${id}`,  {
    signal: controller?.signal,
  });
};

