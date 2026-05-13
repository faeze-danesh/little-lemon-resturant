import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, timesReducer } from "../App";

// mock props
const mockTimes = ["17:00", "18:00", "19:00"];
const mockDispatch = jest.fn();

test("Renders BookingForm label", () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes returns correct times", () => {
  const result = initializeTimes();
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

test("timesReducer returns same state", () => {
  const state = ["17:00", "18:00"];
  const result = timesReducer(state, { type: "UPDATE_TIMES" });

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});