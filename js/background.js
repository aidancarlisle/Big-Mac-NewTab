function playSound() {
	var audio = new Audio('bigmac.mp3');
	audio.play();
}

chrome.browserAction.onClicked.addListener(playSound);