import React, { useState } from "react";

export default function BookingForm({
  availableTimes,
  dispatch,
  bookingData,
  setBookingData,
  submitForm
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!date) {
      newErrors.date = "Date is required";
    }

    if (guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = {
    date,
    time,
    guests,
    occasion,
  };

  const updatedBookings = [...bookingData, formData];

  setBookingData(updatedBookings);

  localStorage.setItem("bookings", JSON.stringify(updatedBookings));

  submitForm(formData);
};

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      <label>Choose date</label>

      <input
        type="date"
        value={date}
        onChange={(e) => {
          const selectedDate = e.target.value;

          setDate(selectedDate);

          dispatch({
            type: "update",
            date: new Date(selectedDate),
          });
        }}
      />

      {errors.date && (
        <p style={{ color: "red" }}>{errors.date}</p>
      )}

      <label>Choose time</label>

      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label>Number of guests</label>

      <input
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      {errors.guests && (
        <p style={{ color: "red" }}>{errors.guests}</p>
      )}

      <label>Occasion</label>

      <select
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">
        Make Your Reservation
      </button>

      <table
        border="1"
        style={{ marginTop: "20px", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>

        <tbody>
          {bookingData?.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.guests}</td>
              <td>{item.occasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}