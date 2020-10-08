const { Builder, By } = require("selenium-webdriver");

module.exports = function () {
  async function example() {
    const destinationURL = "http://localhost:3000";

    let driver = new Builder().forBrowser("chrome").build();
    await driver.get(destinationURL);
    await (await driver.findElement(By.id("sensorButton"))).click();
    await driver.sleep(2000);
    await (await driver.findElement(By.id("pumpButton"))).click();
    await driver.sleep(7000);
    await (await driver.findElement(By.id("sensorButton"))).click();
  }

  example();
};
