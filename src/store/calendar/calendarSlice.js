import { createSlice } from "@reduxjs/toolkit";
// const tempEvent = {
//   _id: new Date().getTime(),
//   title: "Board meeting",
//   notes: "Discuss project updates",
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: "#6f53ee",
//   user: {
//     _id: "123",
//     name: "John Doe",
//   },
// };

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        console.log("Activo", state.activeEvent.id);
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id,
        );
        state.activeEvent = null;
      }
    },
    onLoadEvent: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      // state.event = payload;
      payload.forEach((event) => {
        const existe = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!existe) {
          state.events.push(event);
        }
      });
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvent,
  onLogoutCalendar,
} = calendarSlice.actions;

export default calendarSlice.reducer;
