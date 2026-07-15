import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { NavBar } from "../components/NavBar";
import { addHours } from "date-fns";
import { localizer, getMessages } from "../../helpers";
import { CalendarEvent } from "../components/CalendarEvent";
import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";

const events = [
  {
    title: "Board meeting",
    start: new Date(),
    end: addHours(new Date(), 2),
  },
];

export const CalendarPage = () => {
  const [view, setView] = useState(
    localStorage.getItem("calendar-view") || Views.WEEK,
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected });

    const backgroundColor = "#6f53ee";
    return {
      style: { backgroundColor, borderRadius: "5px", opacity: 0.8 },
    };
  };
  const onDoubleClickEvent = (event) => {
    console.log("Evento doble clic:", event);
  };

  const onSelectEvent = (event) => {
    console.log("Evento seleccionado:", event);
  };

  const onViewChanged = (newView) => {
    console.log("Nueva vista:", newView);
    setView(newView);
  };

  return (
    <>
      <NavBar />
      <div>
        <Calendar
          culture="es"
          localizer={localizer}
          events={events}
          defaultView={view}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 80px)" }}
          messages={getMessages()}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent,
          }}
          view={view}
          onView={onViewChanged}
          onDoubleClickEvent={onDoubleClickEvent}
          onSelectEvent={onSelectEvent}
          onViewChanged={onViewChanged}
        />
        <CalendarModal />
      </div>
    </>
  );
};
