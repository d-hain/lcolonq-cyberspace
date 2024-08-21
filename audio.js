// Play audio when hovering over `javascript`

const jsText = document.getElementById("javascript-text");
const jsAudio = document.getElementById("javascript-audio");

jsText.addEventListener("mouseover", () => {
    jsAudio.play();
});

jsText.addEventListener("mouseleave", () => {
    jsAudio.pause();
    jsAudio.currentTime = 0;
});
