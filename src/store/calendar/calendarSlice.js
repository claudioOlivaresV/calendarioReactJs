import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
  title: "Board meeting",
  notes: "Discuss project updates",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#6f53ee",
  user: {
    _id: "123",
    name: "John Doe",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;

export default calendarSlice.reducer;
