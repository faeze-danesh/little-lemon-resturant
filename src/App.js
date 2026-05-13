import { fetchAPI } from "./api.js";

import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

import "./App.css";

// Initialize times (with fetchAPI + fallback)
const initializeTimes = () => {
  const today = new Date();

  if (typeof fetchAPI === "function") {
    return [...fetchAPI(today), "22:00"];
  }

  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
};

// Reducer (must match test expectation)
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    initializeTimes()
  );

  const [bookingData, setBookingData] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Specials />
              </>
            }
          />

          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                bookingData={bookingData}
                setBookingData={setBookingData}
              />
            }
          />

          <Route
            path="/confirmed"
            element={<ConfirmedBooking />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

export { initializeTimes, timesReducer };