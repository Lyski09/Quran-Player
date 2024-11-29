document.addEventListener("DOMContentLoaded", () => {
    let progress = document.getElementById("progress");
    let song = document.getElementById("song");
    let ctrlicon = document.getElementById("ctrlicon");

    if (!song || !progress || !ctrlicon) {
        console.error("Required elements are missing from the DOM.");
        return;
    }

    // Update the progress bar when the audio metadata is loaded
    song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
    };

    // Update the progress bar as the audio plays
    song.addEventListener("timeupdate", () => {
        progress.value = song.currentTime;
    });
    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
    }

    // Play/pause toggle function
    function playPause() {
        if (song.paused) {
            song.play(); // Play the audio
            ctrlicon.src = "pause.png"; // Switch to pause icon
        } else {
            song.pause(); // Pause the audio
            ctrlicon.src = "play.png"; // Switch to play icon
        }
    }

    // Attach the playPause function to the click event on the ctrlicon
    ctrlicon.addEventListener("click", playPause);
    
});


