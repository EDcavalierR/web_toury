import React, { useState } from "react";
import "./style.css";
import { Button } from "@mui/material";

export const Login = () => {
  const [register, setRegister] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [documento, setDocumento] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {register ? (
        <div className="login register">
          <div className="login__container">
            <div className="login__logo">Logo toury</div>

            <div className="login__form register">
              <h2 className="login__sesion__register">Registrate</h2>
              <p> La mejor herramienta para tus viajes</p>
              <form onSubmit={handleRegister}>
                <div className="div__Input">
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre de cuenta"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="div__Input">
                  <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="div__Input">
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="div__Input">
                  <input
                    type="number"
                    placeholder="Ingresa un numero de celular"
                    value={documento}
                    onChange={(e) => setDocumento(e.target.value)}
                  />
                </div>
                <br></br>
                <div className="division">
                  <p className="linea"></p>
                  <p>Ingresar con </p>
                </div>
                <div className="bton_redes">
                  <div>
                    <img src="https://cutt.ly/BJVFGFV" alt="facebook" />
                  </div>
                  <div>
                    <p>Continuar con Facebook</p>
                  </div>
                </div>
                <div className="bton_redes">
                  <div>
                    <img src="https://cutt.ly/6JVHQFC" alt="google" />
                  </div>
                  <div>
                    <p>Continuar con Google</p>
                  </div>
                </div>
              
                <div className="politicas">
                  <label>
                    <input type="checkbox" />
                    Al hacer clic en registrar aceptas las
                    <span> politicas y condiciones de uso</span> de Toury.
                  </label>
                </div>

                <br />
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  type="submit"
                  font-weight="bold"
                >
                  Registrar
                </Button>
              </form>
            </div>
            <p className="login__footer">
              ¿Ya tienes cuenta?{" "}
              <span OnClick={() => setRegister(false)}>Inicia sesion</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="login">
          <div className="login__container">
            <div className="login__logo">Logo toury</div>
            <div className="login__form">
              <h2 className="login__sesion">Inicia sesion</h2>
              <p> La mejor herramienta para tus viajes</p>
              <form onSubmit={handleSubmit}>
                <div className="div__Input">
                  <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="div__Input">
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <p> ¿Has olvidado tu contraseña?</p> */}
                <br />
                <div className="division">
                  <p className="linea"></p>
                  <p>Ingresar con </p>
                </div>
                <div className="bton_redes">
                  <div>
                    <img src="https://cutt.ly/BJVFGFV" alt="facebook" />
                  </div>
                  <div>
                    <p>Continuar con Facebook</p>
                  </div>
                </div>
                <div className="bton_redes">
                  <div>
                    <img src="https://cutt.ly/6JVHQFC" alt="google" />
                  </div>
                  <div>
                    <p>Continuar con Google</p>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  type="submit"
                  font-weight="bold"
                >
                  Iniciar sesion
                </Button>
              </form>
            </div>
            <p className="login__footer">
              ¿Eres nuevo en Toury?{" "}
              <span OnClick={() => setRegister(true)}>Únete ahora</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
