import axios from "axios";

//Base URL of profile functions
const BASE_URL_OF_PROFILE = "http://localhost:8080/profiles";

//Create profile
export const createProfile = (id, profile) => {
  return axios.post(BASE_URL_OF_PROFILE + "/" + id, profile);
};

//Get profile information
export const listEmployeeProfile = (id) => {
  return axios.get(BASE_URL_OF_PROFILE + "/employee/" + id);
};

//Update profile
export const updateEmployeeProfile = (id, profile) => {
  return axios.put(BASE_URL_OF_PROFILE + "/employee/" + id, profile);
};

//Delete Profile
export const deleteEmployeeProfile = (id) => {
  return axios.delete(BASE_URL_OF_PROFILE + "/" + id);
};
