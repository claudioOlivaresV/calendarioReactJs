import React from "react";
import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";

export default function CalendarApp() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
