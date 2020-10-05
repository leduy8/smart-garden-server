let autoDelayTime = 0;
let startTime = Date.now();

function setAutomatedTimeout(callback) {
	let endTime = Date.now();

	if (endTime - startTime - autoDelayTime > 7000) {
		autoDelayTime = 0;
		startTime = Date.now();
	}

	setTimeout(callback, autoDelayTime);
	autoDelayTime += 7000;
}

module.exports.setAutomatedTimeout = setAutomatedTimeout;
