import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("reads booking data from localStorage on load", () => {
  const mockData = [
    { date: "2026-05-13", time: "17:00", guests: 2, occasion: "Birthday" }
  ];

  localStorage.setItem("bookings", JSON.stringify(mockData));

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
      bookingData={mockData}
      setBookingData={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getByText("2026-05-13")).toBeInTheDocument();
});