import React from "react";
import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <div>
      <h2>Reserve a Table</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}