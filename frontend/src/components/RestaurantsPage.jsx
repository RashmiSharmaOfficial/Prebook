import React, { useState } from "react";
import { Search } from "lucide-react";


// Rename the RestaurantCard component properly
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      {/* Details */}
      <div className="p-4">
        {/* Name and Cuisine */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{restaurant.name}</h3>
            {/* Rating as Stars */}
            <div className="flex items-center space-x-2 text-yellow-500">
              {/* Stars */}
              <span>
                {"★".repeat(Math.round(restaurant.rating)) +
                  "☆".repeat(5 - Math.round(restaurant.rating))}
              </span>
              {/* Numeric Rating */}
              <span className="text-gray-700 text-sm font-medium">
                {restaurant.rating.toFixed(1)}
              </span>
            </div>

          </div>
          <div>
            <p className="text-sm text-gray-600">{restaurant.cuisine.join(", ")}</p>
            <p
              className={`mt-1 text-xs font-medium text-right ${restaurant.isVeg ? "text-green-500" : "text-red-500"
                }`}
            >
              {restaurant.isVeg ? "Veg" : "Non-Veg"}
            </p>

          </div>
        </div>
        {/* Book Button */}
        <button
          onClick={() => alert(`Booking ${restaurant.name}`)}
          className="block w-full bg-blue-600 text-white py-2 text-center rounded-lg font-semibold hover:bg-blue-700"
        >
          Book
        </button>
      </div>
    </div>
  );
};

// Correctly name the main component
const RestaurantsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurantData] = useState([
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Gourmet Bliss",
      rating: 4.5,
      cuisine: ["Italian", "French"],
      isVeg: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Cafe Latte",
      rating: 4.2,
      cuisine: ["Continental"],
      isVeg: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "BBQ Haven",
      rating: 4.7,
      cuisine: ["American", "Grill"],
      isVeg: false,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Spice Symphony",
      rating: 4.3,
      cuisine: ["Indian"],
      isVeg: false,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Sweet Cravings",
      rating: 4.8,
      cuisine: ["Desserts"],
      isVeg: true,
    },
    {
      id: 6,
      image: "https://plus.unsplash.com/premium_photo-1671403964040-3fa56d33f44b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Sushi Central",
      rating: 4.6,
      cuisine: ["Japanese"],
      isVeg: false,
    },
    {
      id: 7,
      image: "https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Taco Fiesta",
      rating: 4.1,
      cuisine: ["Mexican"],
      isVeg: true,
    },
    {
      id: 8,
      image: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Pizza Paradise",
      rating: 4.4,
      cuisine: ["Italian"],
      isVeg: true,
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Burger Barn",
      rating: 4.2,
      cuisine: ["American", "Fast Food"],
      isVeg: false,
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Asian Delight",
      rating: 4.5,
      cuisine: ["Chinese", "Thai"],
      isVeg: false,
    },
    {
      id: 11,
      image: "https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Steak House",
      rating: 4.7,
      cuisine: ["Grill"],
      isVeg: false,
    },
    {
      id: 12,
      image: "https://plus.unsplash.com/premium_photo-1695132236644-1cc276ec81f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      name: "Vegan Vibes",
      rating: 4.6,
      cuisine: ["Vegan", "Organic"],
      isVeg: true,
    },
  ]);

  const filteredRestaurants = restaurantData.filter((restaurant) =>
    `${restaurant.name} ${restaurant.cuisine.join(", ")} ${restaurant.isVeg ? "Veg" : "Non-Veg"
      }`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-70px)] px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Restaurants</h1>
        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, cuisine, veg/non-veg..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 text-gray-500 w-5 h-5" />

        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
        {filteredRestaurants.length === 0 && (
          <p className="text-gray-600 col-span-full text-center">
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantsPage;
