import { render, screen, within } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders booking data in table", () => {
  const mockData = [
    {
      date: "2026-05-13",
      time: "17:00",
      guests: 2,
      occasion: "Birthday",
    },
  ];

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
      bookingData={mockData}
      setBookingData={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const table = screen.getByRole("table");

  expect(within(table).getByText("2026-05-13")).toBeInTheDocument();
  expect(within(table).getByText("17:00")).toBeInTheDocument();
  expect(within(table).getByText("2")).toBeInTheDocument();
  expect(within(table).getByText("Birthday")).toBeInTheDocument();
});