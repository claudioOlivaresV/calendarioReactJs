import { useCalendarStore } from "../../hooks/useCalendarStore";

export const FabDelete = () => {
  const { deleteEvent, hasEventSelectd } = useCalendarStore();
  const handleClick = () => {
    deleteEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      style={{ display: hasEventSelectd ? "" : "none" }}
      onClick={handleClick}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
