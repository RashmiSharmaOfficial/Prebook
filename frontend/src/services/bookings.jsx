import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Book a table
export const bookTable = async (bookingData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/bookings/book`, bookingData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
