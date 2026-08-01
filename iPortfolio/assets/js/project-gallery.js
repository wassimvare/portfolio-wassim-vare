(() => {
  "use strict";
  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const main = gallery.querySelector(".gallery-main");
    const open = gallery.querySelector(".gallery-open");
    const caption = gallery.querySelector(".gallery-caption");
    const count = gallery.querySelector(".gallery-count");
    const thumbs = [...gallery.querySelectorAll(".gallery-thumb")];
    const prev = gallery.querySelector(".gallery-prev");
    const next = gallery.querySelector(".gallery-next");
    let current = 0;

    const show = (index) => {
      current = (index + thumbs.length) % thumbs.length;
      const thumb = thumbs[current];
      const src = thumb.dataset.src;
      const alt = thumb.dataset.alt || "Capture du projet";
      const text = thumb.dataset.caption || "";
      main.classList.add("changing");
      window.setTimeout(() => {
        main.src = src;
        main.alt = alt;
        open.href = src;
        caption.textContent = text;
        count.textContent = `${current + 1} / ${thumbs.length}`;
        thumbs.forEach((item, i) => {
          item.classList.toggle("active", i === current);
          item.setAttribute("aria-current", i === current ? "true" : "false");
        });
        main.classList.remove("changing");
      }, 120);
    };

    thumbs.forEach((thumb, index) => thumb.addEventListener("click", () => show(index)));
    prev?.addEventListener("click", () => show(current - 1));
    next?.addEventListener("click", () => show(current + 1));
    gallery.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") show(current - 1);
      if (event.key === "ArrowRight") show(current + 1);
    });
  });
})();
