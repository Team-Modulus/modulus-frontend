// api.js

// Base URLs for different environments
const BASE_URLS = {
  development: "http://localhost:5000/api",
  production: "https://modulus-api.vercel.app/api",
};

// Automatically pick environment
const BASE_URL = BASE_URLS[process.env.NODE_ENV] || BASE_URLS.development;

// API endpoints
const API = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    register: `${BASE_URL}/auth/register`,
    logout: `${BASE_URL}/auth/logout`,
  },
  user: {
    getAll: `${BASE_URL}/users`,
    getById: (id) => `${BASE_URL}/users/${id}`, 
    update: (id) => `${BASE_URL}/users/${id}`,
    delete: (id) => `${BASE_URL}/users/${id}`,
  },
  courses: {
    getAll: `${BASE_URL}/courses`,
    getById: (id) => `${BASE_URL}/courses/${id}`,
    enroll: `${BASE_URL}/courses/enroll`,
  },
};

export default API;
