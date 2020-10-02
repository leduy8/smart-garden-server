const socket = io();

const sensorButton = document
  .getElementById("sensorButton")
  .addEventListener("click", (e) => {
    e.preventDefault();
    socket.emit("getSensorsData");
    socket.once("returnSensorsData", (response) => {
      outputSensorsData(response.data);
    });
  });

const pumpButton = document
  .getElementById("pumpButton")
  .addEventListener("click", (e) => {
    e.preventDefault();
    socket.emit("pumpWaterRequest");
    socket.once("pumpWaterResponse", (data) => {
      outputPumpData(data);
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

const outputPumpData = (data) => {
  const div = document.createElement("div");
  div.classList.add("pump");
  div.innerHTML = `
  <p>${data.message}</p>
  `;
  console.log(div);
  document.querySelector("#container").appendChild(div);
};
