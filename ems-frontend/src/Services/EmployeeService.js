import axios from "axios";

//Base url of our spring boot project
const REST_API_BASE_URL = "http://localhost:8080/employee";

//Get all the employees mapping
export const listEmployees = () => {
  //Format for gettign data from database to react json object using axios
  //axios.get(rest_api_url)
  return axios.get(REST_API_BASE_URL + "/getAllEmployee");
};

//Add new employee
export const createEmployee = (employee) => {
  //Format for sending json to java spring:
  //axios.post(rest_api_url, json_object);
  return axios.post(REST_API_BASE_URL + "/addEmployee", employee);
};

//Get employee by id
export const getEmployee = (id) => {
  //Format for get request by id
  //axios.get(url+ '/' + id)
  return axios.get(REST_API_BASE_URL + "/" + id);
};

//Update employee
export const updateEmployee = (id, employee) => {
  //Format for put request
  //axios.put(url_with_id, newEmplpyee object reference
  return axios.put(REST_API_BASE_URL + "/" + id, employee);
};

//Delete employee
export const deleteEmployee = (id) => {
  //Format for delete request
  return axios.delete(REST_API_BASE_URL + "/" + id);
};
