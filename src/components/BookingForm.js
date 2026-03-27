import React, { useState } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${guests} guests on ${date} at ${time} (${occasion})`);
  };

  const handleDateChange = (e) => {
  const selectedDate = e.target.value;
  setDate(selectedDate);

  // اینجا action به reducer می‌فرستیم
  dispatch({ type: "UPDATE_TIMES", date: selectedDate });
};

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}