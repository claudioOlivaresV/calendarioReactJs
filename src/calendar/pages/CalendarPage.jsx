import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { NavBar } from "../components/NavBar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import { addHours } from "date-fns";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Board meeting",
    start: new Date(),
    end: addHours(new Date(), 2),
  },
];

export const CalendarPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 80px)" }}
        />
      </div>
    </>
  );
};
