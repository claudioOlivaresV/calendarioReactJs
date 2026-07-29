import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";
import calendarApi from "../api/calendarApi";
import { convertData } from "../helpers/convertData";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavignEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      const { data } = await calendarApi.post("/events", calendarEvent);
      console.log(data);

      dispatch(onAddNewEvent({ ...calendarEvent, _id: data.msg.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };
  const deleteEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const starLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = convertData(data.eventos);
      console.log(events);
      dispatch(onLoadEvent(events));
    } catch (error) {
      console.log("error cargando eventos", error);
    }
  };

  return {
    events,
    activeEvent,
    hasEventSelectd: !!activeEvent,

    setActiveEvent,
    startSavignEvent,
    deleteEvent,
    starLoadingEvents,
  };
};
