import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm border-bottom px-4 py-3">
      <div className="container-fluid">
        <a
          href="#"
          className="navbar-brand d-flex align-items-center fw-semibold text-dark mb-0"
        >
          <div className="logo-icon me-3">
            <i className="fas fa-calendar-alt"></i>
          </div>

          <div>
            <div className="fs-5">Mi Sistema</div>
            <small className="text-muted fw-normal">
              Gestión de calendario
            </small>
          </div>
        </a>

        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            <div className="user-avatar">
              <i className="fas fa-user"></i>
            </div>

            <div className="ms-3">
              <small className="text-muted d-block">Bienvenido</small>

              <span className="fw-semibold">Claudio Olivares</span>
            </div>
          </div>

          <button className="btn btn-light border rounded-pill px-4">
            <i className="fas fa-right-from-bracket me-2 text-danger"></i>
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};
