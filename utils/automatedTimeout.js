let autoDelayTime = 0;

function setAutomatedTimeout(callback) {
  setTimeout(callback, autoDelayTime);
  autoDelayTime += 4000;
}

module.exports.setAutomatedTimeout = setAutomatedTimeout;
