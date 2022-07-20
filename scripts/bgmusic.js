const button = document.querySelector("#musicbutton");
const icon = document.querySelector("#musicbutton > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 1.0;
        audio.play();
        icon.classList.remove('fa-solid fa-music');
        icon.classList.add('fa-circle-stop');

    } else {
        audio.pause();
        icon.classList.remove('fa-circle-stop');
        icon.classList.add('fa-solid fa-music');
    }
    button.classList.add("fade");
});
