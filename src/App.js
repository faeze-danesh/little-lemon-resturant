import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import BookingPage from "./components/BookingPage";
import './App.css'; // مطمئن شو این خط هست

// مقدار اولیه زمان‌ها
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Reducer برای زمان‌ها
function timesReducer(state, action) {
  switch(action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Specials />
            </>
          } />
          <Route path="/booking" element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;