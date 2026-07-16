import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { startCreatingEvent } = useCalendarStore();
  const handleClick = () => {
    console.log("FAB clicked");
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
