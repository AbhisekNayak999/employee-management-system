import axios from "axios";

// ✅ Use environment variable so it works in both local and deployed environments
const API_BASE_URL = import.meta.env.VITE_API_URL;

// 🔎 Debug print (you can remove later)
console.log("✅ Profile API Base URL:", API_BASE_URL);

// ✅ Prefix for profiles endpoint
const BASE_URL_OF_PROFILE = `${API_BASE_URL}/profiles`;

// Create profile
export const createProfile = (id, profile) => {
  return axios.post(`${BASE_URL_OF_PROFILE}/${id}`, profile);
};

// Get profile information
export const listEmployeeProfile = (id) => {
  return axios.get(`${BASE_URL_OF_PROFILE}/employee/${id}`);
};

// Update profile
export const updateEmployeeProfile = (id, profile) => {
  return axios.put(`${BASE_URL_OF_PROFILE}/employee/${id}`, profile);
};

// Delete profile
export const deleteEmployeeProfile = (id) => {
  return axios.delete(`${BASE_URL_OF_PROFILE}/${id}`);
};
