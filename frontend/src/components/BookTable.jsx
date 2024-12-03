import React, { useState } from "react";
import { bookTable } from "../services/bookings";

const BookTable = () => {
  const [formData, setFormData] = useState({
    restaurant_name: "",
    slot_time: "",
    people: 1,
    customer_name: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookTable(formData);
      alert(response.message);
    } catch (error) {
      alert(error.message || "Error booking table");
    }
  };

  return (
    <div className="relative bg-gray-100 min-h-screen flex items-center justify-center py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg')`,
          filter: "blur(10px)",
        }}
      ></div>
      
      {/* Form Container */}
      <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-lg w-full z-10 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Book a Table
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Restaurant Name */}
          <div>
            <label
              htmlFor="restaurant_name"
              className="block text-sm font-medium text-gray-700"
            >
              Restaurant Name
            </label>
            <input
              id="restaurant_name"
              name="restaurant_name"
              type="text"
              placeholder="Enter restaurant name"
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Slot Time */}
          <div>
            <label
              htmlFor="slot_time"
              className="block text-sm font-medium text-gray-700"
            >
              Slot Time
            </label>
            <input
              id="slot_time"
              name="slot_time"
              type="time"
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Number of People */}
          <div>
            <label
              htmlFor="people"
              className="block text-sm font-medium text-gray-700"
            >
              Number of People
            </label>
            <input
              id="people"
              name="people"
              type="number"
              min="1"
              max="20"
              placeholder="Enter number of people"
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Customer Name */}
          <div>
            <label
              htmlFor="customer_name"
              className="block text-sm font-medium text-gray-700"
            >
              Customer Name
            </label>
            <input
              id="customer_name"
              name="customer_name"
              type="text"
              placeholder="Enter your name"
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Booking Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Booking Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Book Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
