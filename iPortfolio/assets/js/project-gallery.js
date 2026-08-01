(() => {
  "use strict";
  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const main = gallery.querySelector(".gallery-main");
    const open = gallery.querySelector(".gallery-open");
    const caption = gallery.querySelector(".gallery-caption");
    const count = gallery.querySelector(".gallery-count");
    const allThumbs = [...gallery.querySelectorAll(".gallery-thumb")];
    const prev = gallery.querySelector(".gallery-prev");
    const next = gallery.querySelector(".gallery-next");
    const filters = [...gallery.querySelectorAll(".gallery-filter")];
    let visibleThumbs = [...allThumbs];
    let current = 0;

    const show = (index) => {
      if (!visibleThumbs.length) return;
      current = (index + visibleThumbs.length) % visibleThumbs.length;
      const thumb = visibleThumbs[current];
      const src = thumb.dataset.src;
      const alt = thumb.dataset.alt || "Photo de l’expérience";
      const text = thumb.dataset.caption || "";
      main.classList.add("changing");
      window.setTimeout(() => {
        main.src = src;
        main.alt = alt;
        open.href = src;
        caption.textContent = text;
        count.textContent = `${current + 1} / ${visibleThumbs.length}`;
        allThumbs.forEach((item) => {
          const active = item === thumb;
          item.classList.toggle("active", active);
          item.setAttribute("aria-current", active ? "true" : "false");
        });
        main.classList.remove("changing");
      }, 100);
    };

    allThumbs.forEach((thumb) => thumb.addEventListener("click", () => {
      const index = visibleThumbs.indexOf(thumb);
      if (index >= 0) show(index);
    }));
    prev?.addEventListener("click", () => show(current - 1));
    next?.addEventListener("click", () => show(current + 1));
    gallery.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") show(current - 1);
      if (event.key === "ArrowRight") show(current + 1);
    });

    filters.forEach((button) => button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      filters.forEach((item) => item.classList.toggle("active", item === button));
      visibleThumbs = allThumbs.filter((thumb) => filter === "all" || thumb.dataset.category === filter);
      allThumbs.forEach((thumb) => { thumb.hidden = !visibleThumbs.includes(thumb); });
      current = 0;
      show(0);
    }));
  });
})();
