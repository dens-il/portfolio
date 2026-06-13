const modal = document.querySelector(".video-modal");
const shell = document.querySelector(".video-shell");
const title = document.querySelector(".modal-title");
const playButtons = document.querySelectorAll("[data-video]");
const closeButtons = document.querySelectorAll("[data-close]");

function openVideo(button) {
  const videoId = button.dataset.video;
  const videoTitle = button.dataset.title || "Відео";

  title.textContent = videoTitle;
  shell.innerHTML = `
    <iframe
      src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0"
      title="${videoTitle}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeVideo() {
  modal.hidden = true;
  shell.innerHTML = "";
  document.body.classList.remove("modal-open");
}

playButtons.forEach((button) => {
  button.addEventListener("click", () => openVideo(button));
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeVideo);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeVideo();
  }
});
