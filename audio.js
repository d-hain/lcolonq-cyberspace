/**
 * @param {string} text ID of the Text element
 * @param {string} audio ID of the Audio element
 */
function playAudio(text, audio) {
    const textElement = document.getElementById(text);
    const audioElement = document.getElementById(audio);

    textElement.addEventListener("mouseover", () => {
        audioElement.play();
    });

    textElement.addEventListener("mouseleave", () => {
        audioElement.pause();
        audioElement.currentTime = 0;
    });
}

// Play audio when hovering over `javascript`
playAudio("javascript-text", "javascript-audio");

// Play audio when hovering over `css`
playAudio("css-text", "css-audio");
