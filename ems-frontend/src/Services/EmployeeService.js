import axios from "axios";

// ✅ Use environment variable (set in Vercel and .env.local)
const API_BASE_URL = import.meta.env.VITE_API_URL;

// 🔎 Debug print (only for checking, can remove later)
console.log("✅ API Base URL being used:", API_BASE_URL);

// ✅ Always include '/employee' prefix
const EMPLOYEE_BASE_URL = `${API_BASE_URL}/employee`;

// Get all employees
export const listEmployees = () => {
  return axios.get(`${EMPLOYEE_BASE_URL}/getAllEmployee`);
};

// Add new employee
export const createEmployee = (employee) => {
  return axios.post(`${EMPLOYEE_BASE_URL}/addEmployee`, employee);
};

// Get employee by id
export const getEmployee = (id) => {
  return axios.get(`${EMPLOYEE_BASE_URL}/${id}`);
};

// Update employee
export const updateEmployee = (id, employee) => {
  return axios.put(`${EMPLOYEE_BASE_URL}/${id}`, employee);
};

// Delete employee
export const deleteEmployee = (id) => {
  return axios.delete(`${EMPLOYEE_BASE_URL}/${id}`);
};
