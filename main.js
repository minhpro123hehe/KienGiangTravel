const links = document.querySelectorAll(".menu a");
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const title = document.getElementById("place-title");
const desc = document.getElementById("place-desc");

let showingBg1 = true;

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const img = link.dataset.bg;
    const newTitle = link.dataset.title;
    const newDesc = link.dataset.desc;

    const activeBg = showingBg1 ? bg1 : bg2;
    const nextBg = showingBg1 ? bg2 : bg1;

    nextBg.style.backgroundImage = `url('${img}')`;
    nextBg.classList.add("active");
    activeBg.classList.remove("active");

    title.style.opacity = 0;
    desc.style.opacity = 0;

    setTimeout(() => {
      title.textContent = newTitle;
      desc.textContent = newDesc;
      title.style.opacity = 1;
      desc.style.opacity = 1;
    }, 300);

    showingBg1 = !showingBg1;
  });
});