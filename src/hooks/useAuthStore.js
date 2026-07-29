import { useDispatch, useSelector } from "react-redux";
import calendarApi from "../api/calendarApi";
import { checking, onLogin, onLogout } from "../store/auht/authSlice";
import Swal from "sweetalert2";
import { onLogoutCalendar } from "../store/calendar/calendarSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(checking());
    console.log(email, password);
    try {
      const { data } = await calendarApi.post("/auth/login", {
        email,
        password,
      });
      console.log({ data });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-data", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("credenciales incorrectas"));
      console.log({ error });
      Swal.fire("Error auth", "error", "error");
    }
  };
  const startRegister = async ({ email, name, password }) => {
    dispatch(checking());
    console.log(email, password);
    try {
      const { data } = await calendarApi.post("/auth/new", {
        email,
        password,
        name,
      });
      console.log({ data });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-data", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("credenciales incorrectas"));
      console.log({ error });
      Swal.fire("Error auth", error.response.data?.msg || "error", "error");
    }
  };
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout("sin token"));
    try {
      const { data } = await calendarApi.get("auth/renew");
      console.log(data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-data", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout("sin token"));
    }
  };
  const starLogout = () => {
    localStorage.clear();
    dispatch(onLogoutCalendar());
    dispatch(onLogout());
  };
  return {
    status,
    user,
    errorMessage,
    startLogin,
    startRegister,
    checkAuthToken,
    starLogout,
  };
};
