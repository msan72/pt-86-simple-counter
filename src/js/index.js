function SecondsCounter(props) {
  // Convertimos el número de segundos a 6 dígitos, con ceros a la izquierda
  const secondsString = props.seconds.toString().padStart(6, "0");

  return React.createElement(
    "div",
    { className: "counter-container" },
    // Ícono del reloj primero
    React.createElement(
      "div",
      { className: "icon" },
      React.createElement("i", { className: "fa-regular fa-clock" })
    ),
    // Creamos un div por cada dígito
    ...secondsString.split("").map((digit, index) =>
      React.createElement("div", { className: "digit", key: index }, digit)
    )
  );
}

// Crear raíz React
const root = ReactDOM.createRoot(document.getElementById("root"));
let seconds = 0;

// Actualizar cada segundo
setInterval(() => {
  root.render(React.createElement(SecondsCounter, { seconds }));
  seconds++;
}, 1000);
