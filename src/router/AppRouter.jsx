import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { getEnvVariables } from "../helpers";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
  console.log(getEnvVariables());

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h1>cargando...</h1>;
  }
  console.log(status);

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
