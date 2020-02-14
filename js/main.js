(() => {
	// make a reference to all of the buttns
	const playButtons = document.querySelectorAll('.playButton'),
		  pauseButtons = document.querySelectorAll('.pauseButton'),
		  rwButtons = document.querySelectorAll('.rwButton'),
		  audioElement = document.querySelector('audio');

	let globalPaused = false;

	// play thr song associated with the buttom (its data-trackref attribude)
	function playTrack() {
		//debugger;
		if (globalPaused) {console.log('paused'); 
		playTrack();
		return; }


		let audioSource = this.dataset.trackref;

		//set the audio source
		audioElement.src = `audio/${audioSource}.mp3`;
		//load and play audio
		audioElement.load();
		audioElement.play();
		//playTrack();
		
	}

	function playTrack() {
		globalPaused = false;
		audioElement.play();
	}
	function pauseTrack() {
		audioElement.pause();
		globalPaused = true;
	}

	function rwTrack() {
		audioElement.currentTime = 0;
	}


	// process the playbuttons and add some event handling
	playButtons.forEach(button => button.addEventListener("click", playTrack));
	pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
	rwButtons.forEach(button => button.addEventListener("click", rwTrack));

	})();