window.onload = () => {
    animateFerris();
};

const animateFerris = () => {
    const ferrisPopupText = document.getElementById("ferris-popup-text");
    const ferrisImage = document.getElementById("ferris-image");

    const ferrisPopinAnimation = [
        { transform: "translateX(-100%)", opacity: 0.25 },
        { transform: "translateY(-27px) translateX(-42px) rotate(30deg)", opacity: 1 },
    ];
    const ferrisPopoutAnimation = [
        { transform: "translateY(-27px) translateX(-42px) rotate(30deg)", opacity: 1 },
        { transform: "translateX(-100%)", opacity: 0.25 },
    ];

    ferrisPopupText.addEventListener("pointerenter", () => {
        ferrisImage.style.display = "block";
        ferrisImage.animate(ferrisPopinAnimation, { duration: 1000 });
    });
    ferrisPopupText.addEventListener("pointerleave", () => {
        ferrisImage
            .animate(ferrisPopoutAnimation, { duration: 1000 })
            .addEventListener("finish", () => {
                ferrisImage.style.display = "none";
            });
    });
};
