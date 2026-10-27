(function () {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!finePointer || reduceMotion) return;

    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;

            card.style.setProperty("--rx", `${((0.5 - py) * 6).toFixed(2)}deg`);
            card.style.setProperty("--ry", `${((px - 0.5) * 5).toFixed(2)}deg`);
        });

        card.addEventListener("pointerleave", () => {
            card.style.setProperty("--rx", "0deg");
            card.style.setProperty("--ry", "0deg");
        });
    });
})();
