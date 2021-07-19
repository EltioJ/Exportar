import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var [nombre, setNome] = useState("");
  var [fecha, setData] = useState("");
  var [edad, setEdad] = useState("");
  var [sexo, setSexo] = useState("");

  function enviar(evt) {
    console.log("Nombre:", nombre);
    console.log("Fecha:", fecha);
    console.log("Edad:", edad);
    console.log("Sexo:", sexo);
  }

  return (
    <div>
      <h1>FORMULARIO</h1>
      <p>
        Nombre:
        <input
          placeholder="Nombre"
          onChange={(evt) => setNome(evt.target.value)}
        />
      </p>
      <p>
        Fecha:
        <input
          placeholder="Fecha"
          onChange={(evt) => setData(evt.target.value)}
        />
      </p>
      <p>
        Edad:
        <input
          placeholder="Edad"
          onChange={(evt) => setEdad(evt.target.value)}
        />
      </p>
      <p>
        Sexo:
        <input
          placeholder="Masculino/Femenino"
          onChange={(evt) => setSexo(evt.target.value)}
        />
      </p>

      <button onClick={enviar}>Registrate</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
