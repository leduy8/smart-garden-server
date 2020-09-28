const socket = io();

const button = document
  .getElementById("button")
  .addEventListener("click", (e) => {
    e.preventDefault();
    socket.emit("getSensorsData");
    socket.once("returnSensorsData", (data) => {
      outputSensorsData(data);
    });
  });

const outputSensorsData = (data) => {
  const div = document.createElement("div");
  div.classList.add("sensor");
  div.innerHTML = `
  <p>Temperature: ${data.temperature}</p>
  <p>Humidity: ${data.humidity}</p>
  <p>Soil Moisture: ${data.soilMoisture}</p>
  `;
  console.log(div);
  document.querySelector("#container").appendChild(div);
};
