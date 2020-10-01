const { Builder, By } = require("selenium-webdriver");

module.exports = function () {
  async function example() {
    const destinationURL = "http://192.168.2.107:3000";

    let driver = new Builder().forBrowser("chrome").build();
    await driver.get(destinationURL);
    await (await driver.findElement(By.id("sensorButton"))).click();
    await driver.sleep(20000);
    await (await driver.findElement(By.id("pumpButton"))).click();
    await driver.sleep(2000);
    await (await driver.findElement(By.id("sensorButton"))).click();
  }

  example();
};
