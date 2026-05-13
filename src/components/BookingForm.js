import React, { useState } from "react";

export default function BookingForm({
  availableTimes,
  dispatch,
  bookingData,
  setBookingData,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!date) {
      newErrors.date = "Please choose a date";
    }

    if (!time) {
      newErrors.time = "Please choose a time";
    }

    if (!guests || guests < 1) {
      newErrors.guests = "Minimum 1 guest required";
    } else if (guests > 10) {
      newErrors.guests = "Maximum 10 guests allowed";
    }

    if (!occasion) {
      newErrors.occasion = "Please select an occasion";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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

    setDate("");
    setTime("17:00");
    setGuests(1);
    setOccasion("Birthday");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "10px" }}
    >
      {/* DATE */}
      <label htmlFor="date">Choose date</label>
      <input
        id="date"
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
      {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

      {/* TIME */}
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

      {/* GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      {errors.guests && (
        <span style={{ color: "red" }}>{errors.guests}</span>
      )}

      {/* OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && (
        <span style={{ color: "red" }}>{errors.occasion}</span>
      )}

      {/* BUTTON (ARIA ADDED) */}
      <button type="submit" aria-label="On Click">
        Make Your Reservation
      </button>

      {/* TABLE */}
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