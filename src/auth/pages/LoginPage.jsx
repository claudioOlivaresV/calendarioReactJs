import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-3"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #fcfcff 40%, #f5f3ff 100%)",
      }}
    >
      <div className="container" style={{ maxWidth: "960px" }}>
        <div className="card border-0 shadow-lg overflow-hidden">
          <div className="row g-0">
            {/* Login */}
            <div className="col-md-6 p-4 p-md-5 bg-white">
              <div className="mb-4">
                <h2 className="fw-bold mb-2" style={{ color: "#4a5568" }}>
                  Iniciar sesión
                </h2>
                <p className="text-muted mb-0">Bienvenido de vuelta</p>
              </div>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="loginEmail"
                    className="form-label fw-semibold"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="loginEmail"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="loginPassword"
                    className="form-label fw-semibold"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="loginPassword"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Recordarme
                    </label>
                  </div>
                  <a href="#" className="text-decoration-none small">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 btn-lg"
                  style={{ backgroundColor: "#667eea", borderColor: "#667eea" }}
                >
                  Entrar
                </button>
              </form>
            </div>

            {/* Register */}
            <div
              className="col-md-6 p-4 p-md-5 text-white"
              style={{
                background: "#667eea",
              }}
            >
              <div className="mb-4">
                <h2 className="fw-bold mb-2">Crear cuenta</h2>
                <p className="mb-0" style={{ opacity: 0.9 }}>
                  Únete hoy, es gratis
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="registerName"
                    className="form-label fw-semibold"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="registerName"
                    placeholder="Juan Pérez"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="registerEmail"
                    className="form-label fw-semibold"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="registerEmail"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="registerPassword"
                    className="form-label fw-semibold"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="registerPassword"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registerConfirm"
                    className="form-label fw-semibold"
                  >
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="registerConfirm"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-light w-100 btn-lg fw-semibold"
                  style={{ color: "#764ba2" }}
                >
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="text-white text-decoration-none opacity-75">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};
