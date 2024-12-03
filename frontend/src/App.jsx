import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import Components
import RegisterRestaurant from "./components/RegisterRestaurant";
import BookTable from "./components/BookTable";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Enhanced Navigation Bar */}
        <Navbar/>

        {/* Routes */}
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterRestaurant />} />
            <Route path="/book" element={<BookTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
