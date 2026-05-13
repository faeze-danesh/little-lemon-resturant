import { submitAPI } from "../api.js";
import React from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

export default function BookingPage({
  availableTimes,
  dispatch,
  bookingData,
  setBookingData
}) {

  const navigate = useNavigate();

  const submitForm = (formData) => {
  const response = submitAPI(formData);

  if (response) {
    navigate("/confirmed");
  }
};

  return (
    <div>
      <h2>Reserve a Table</h2>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        bookingData={bookingData}
        setBookingData={setBookingData}
        submitForm={submitForm}
      />
    </div>
  );
}