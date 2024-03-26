// manage api requests here
// api.js

import axios from "axios";

const baseURL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

// api.js

// Function to fetch books data from API
export const fetchBooks = () => {
  return axios
    .get(`${baseURL}/books`)
    .then((response) => {
      // Return the data from the response
      return response.data;
    })
    .catch((error) => {
      // Handle error or return it for handling elsewhere
      throw error;
    });
};
