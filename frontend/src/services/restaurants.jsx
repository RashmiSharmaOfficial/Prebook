import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Register a new restaurant
export const registerRestaurant = async (restaurantData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/restaurants/register`, restaurantData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Add slots to a restaurant
export const addSlots = async (restaurantName, slots) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/restaurants/${restaurantName}/slots`, slots);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
