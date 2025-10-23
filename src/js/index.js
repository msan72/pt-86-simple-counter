function SecondsCounter(props) {
  // Convert the number of seconds to 6 digits, with leading zeros
  const secondsString = props.seconds.toString().padStart(6, "0");

  return React.createElement("div", { className: "counter-container" },
    // Clock icon first
    React.createElement("div", { className: "icon" },
      React.createElement("i", { className: "fa-regular fa-clock" })
    ),
    // Create a div for each digit
    ...secondsString.split("").map((digit, index) =>
      React.createElement("div", { className: "digit", key: index }, digit)
    )
  );
}

// Create react root
const root = ReactDOM.createRoot(document.getElementById("root"));
let seconds = 0;

// Update every second
setInterval(() => {
  root.render(React.createElement(SecondsCounter, { seconds }));
  seconds++;
}, 1000);
