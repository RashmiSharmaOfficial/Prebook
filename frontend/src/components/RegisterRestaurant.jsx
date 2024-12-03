import React, { useState } from "react";
import { registerRestaurant } from "../services/restaurants";

const RegisterRestaurant = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    area: "",
    cuisine: "",
    rating: 0,
    cost_for_two: 0,
    veg: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerRestaurant(formData);
      alert(response.message);
    } catch (error) {
      alert(error.message || "Error registering restaurant");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex-1 flex flex-col justify-center items-center mb-6 lg:mb-0 lg:pr-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Register Your Restaurant
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Fill out the form to continue with restaurant registration and share
            your culinary experience with the world!
          </p>
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
            alt="Restaurant"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Restaurant Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter restaurant name"
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Enter city"
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Area */}
            <div>
              <label
                htmlFor="area"
                className="block text-sm font-medium text-gray-700"
              >
                Area
              </label>
              <input
                id="area"
                name="area"
                type="text"
                placeholder="Enter area"
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Cuisine */}
            <div>
              <label
                htmlFor="cuisine"
                className="block text-sm font-medium text-gray-700"
              >
                Cuisine
              </label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Enter cuisine"
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating (0-5)
              </label>
              <input
                id="rating"
                name="rating"
                type="number"
                placeholder="Enter rating (0-5)"
                min="0"
                max="5"
                step="0.1"
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Cost for Two */}
            <div>
              <label
                htmlFor="cost_for_two"
                className="block text-sm font-medium text-gray-700"
              >
                Cost for Two
              </label>
              <input
                id="cost_for_two"
                name="cost_for_two"
                type="number"
                placeholder="Enter cost for two"
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Veg Option */}
            <div className="flex items-center">
              <input
                id="veg"
                name="veg"
                type="checkbox"
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="veg"
                className="ml-2 block text-sm text-gray-700"
              >
                Veg
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Register Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
