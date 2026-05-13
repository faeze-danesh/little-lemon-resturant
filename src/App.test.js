import { initializeTimes, timesReducer } from "./App";

test("initializeTimes returns available times", () => {
  const result = initializeTimes();
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns new times based on date", () => {
  const state = ["17:00", "18:00"];

  const action = {
    type: "update",
    date: new Date("2025-01-01"),
  };

  const result = timesReducer(state, action);

  expect(result.length).toBeGreaterThan(0);
});