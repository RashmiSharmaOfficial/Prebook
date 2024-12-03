import React, { useState } from "react";
import { registerRestaurant } from "../services/restaurants";
import { Trash2, SquareDot, Square } from "lucide-react";

const RegisterRestaurant = () => {
  const [step, setStep] = useState(1);
  const [restaurantData, setRestaurantData] = useState({
    owner: "",
    name: "",
    city: "",
    area: "",
    cuisine: "",
    rating: 5,
    cost_for_two: 0,
    is_veg: false,
    working_days: [],
    time_slots: [],
    amSelected: true,
    pmSelected: false,
  });

  const [tables, setTables] = useState([{ capacity: "", quantity: "" }]);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlotsAM = Array.from({ length: 12 }, (_, i) => `${i + 1}:00 AM`);
  const timeSlotsPM = Array.from({ length: 12 }, (_, i) => `${i + 1}:00 PM`);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRestaurantData({
      ...restaurantData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleVegNonVegSelection = (selection) => {
    setRestaurantData({
      ...restaurantData,
      is_veg: selection === "veg",
    });
  };

  const handleDaySelection = (day) => {
    setRestaurantData((prevState) => ({
      ...prevState,
      working_days: prevState.working_days.includes(day)
        ? prevState.working_days.filter((d) => d !== day)
        : [...prevState.working_days, day],
    }));
  };

  const handleTimeSlotSelection = (time) => {
    setRestaurantData((prevState) => ({
      ...prevState,
      time_slots: prevState.time_slots.includes(time)
        ? prevState.time_slots.filter((t) => t !== time)
        : [...prevState.time_slots, time],
    }));
  };

  const handleAMPMToggle = (period) => {
    if (period === "AM") {
      setRestaurantData({
        ...restaurantData,
        amSelected: !restaurantData.amSelected,
        pmSelected: false,
      });
    } else if (period === "PM") {
      setRestaurantData({
        ...restaurantData,
        pmSelected: !restaurantData.pmSelected,
        amSelected: false,
      });
    }
  };

  const handleTableChange = (index, e) => {
    const { name, value } = e.target;
    const newTables = [...tables];
    newTables[index][name] = value;
    setTables(newTables);
  };

  const handleAddTable = () => {
    setTables([...tables, { capacity: "", quantity: "" }]);
  };

  const handleRemoveTable = (index) => {
    const newTables = tables.filter((_, i) => i !== index);
    setTables(newTables);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerRestaurant({
        ...restaurantData,
        tables,
      });
      alert(response.message);
    } catch (error) {
      alert(error.message || "Error registering restaurant");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full flex flex-col lg:flex-row">
        {/* <div className="flex-1 flex flex-col justify-center items-center mb-6 lg:mb-0 lg:pr-6">
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
        </div> */}
        
        <div className="flex-1 z-[10]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Restaurant Details */}
            {step === 1 && (
              <div>
                <div className="mb-4 ">
                  <label
                    htmlFor="owner"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Owner Email
                  </label>
                  <input
                    id="owner"
                    name="owner"
                    type="email"
                    placeholder="Enter owner's email"
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4 ">
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

                <div className="mb-4 ">
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

                <div className="mb-4 ">
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

                <div className="mb-4 ">
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
                <div className="mb-4 ">
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

                {/* Veg/Non-Veg Selection */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button
                    type="button"
                    onClick={() => handleVegNonVegSelection("veg")}
                    className={`py-2 px-4 border rounded-lg ${restaurantData.is_veg
                        ? "bg-green-500 text-white"
                        : "bg-green-200 text-green-800"
                      } focus:outline-none hover:bg-green-400`}
                  >
                    {/* <CheckSquare className="inline mr-2" /> */}
                    <SquareDot strokeWidth={3} className="inline mr-2" />
                    Veg
                  </button>
                  <button
                    type="button"
                    onClick={() => handleVegNonVegSelection("non-veg")}
                    className={`py-2 px-4 border rounded-lg ${!restaurantData.is_veg
                        ? "bg-red-500 text-white"
                        : "bg-red-200 text-red-800"
                      } focus:outline-none hover:bg-red-400`}
                  >
                    <SquareDot strokeWidth={3} className="inline mr-2" />
                    Non-Veg
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Working Days and Time Slots */}
            {step === 2 && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Working Days
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {daysOfWeek.map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleDaySelection(day)}
                        className={`px-4 py-2 border rounded-lg ${restaurantData.working_days.includes(day)
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                          } focus:outline-none hover:bg-blue-400`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Slots
                  </label>
                  <div className="flex space-x-4 mb-2">
                    <button
                      type="button"
                      onClick={() => handleAMPMToggle("AM")}
                      className={`px-4 py-2 border rounded-lg mb-2 ${restaurantData.amSelected
                          ? "bg-yellow-500 text-white"
                          : "bg-yellow-200 text-yellow-800"
                        } focus:outline-none hover:bg-yellow-400`}
                    >
                      AM
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAMPMToggle("PM")}
                      className={`px-4 py-2 border rounded-lg mb-2 ${restaurantData.pmSelected
                          ? "bg-yellow-500 text-white"
                          : "bg-yellow-200 text-yellow-800"
                        } focus:outline-none hover:bg-yellow-400`}
                    >
                      PM
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {restaurantData.amSelected &&
                      timeSlotsAM.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSlotSelection(time)}
                          className={`px-3 py-1 border rounded-lg ${restaurantData.time_slots.includes(time)
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-700"
                            } focus:outline-none hover:bg-green-400`}
                        >
                          {time}
                        </button>
                      ))}
                    {restaurantData.pmSelected &&
                      timeSlotsPM.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSlotSelection(time)}
                          className={`px-3 py-1 border rounded-lg ${restaurantData.time_slots.includes(time)
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-700"
                            } focus:outline-none hover:bg-green-400`}
                        >
                          {time}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Table Capacity and Quantity */}
            {step === 3 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Table Details</h3>
                {tables.map((table, index) => (
                  <div key={index} className="flex space-x-4 mb-4">
                    <div className="flex-1">
                      <label
                        htmlFor={`capacity-${index}`}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Table Capacity
                      </label>
                      <input
                        id={`capacity-${index}`}
                        name="capacity"
                        type="number"
                        value={table.capacity}
                        placeholder="4 seats"
                        onChange={(e) => handleTableChange(index, e)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor={`quantity-${index}`}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Quantity
                      </label>
                      <input
                        id={`quantity-${index}`}
                        name="quantity"
                        type="number"
                        value={table.quantity}
                        placeholder="10 tables"
                        onChange={(e) => handleTableChange(index, e)}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveTable(index)}
                      className="mt-4 text-red-600"
                    >
                      <Trash2 />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddTable}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                >
                  Add Another Table
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400"
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
