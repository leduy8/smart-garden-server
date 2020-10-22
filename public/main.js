const socket = io();

//* FOR TESTING GET SENSOR DATA *//
const sensorButton = document
  .getElementById("sensorButton")
  .addEventListener("click", (e) => {
    e.preventDefault();
    socket.on("returnSensorsData", (response) => {
      outputSensorsData(response.data);
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

//* FOR TESTING PUMPING WATER *//
const pumpButton = document
  .getElementById("pumpButton")
  .addEventListener("click", (e) => {
    e.preventDefault();
    socket.emit("pumpWaterRequest");
    socket.once("pumpWaterResponse", (response) => {
      outputPumpData(response.data);
    });
  });

const outputPumpData = (data) => {
  const div = document.createElement("div");
  div.classList.add("pump");
  div.innerHTML = `
  <p>${data.message}</p>
  `;
  console.log(div);
  document.querySelector("#container").appendChild(div);
};
