export function initReveal() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal");

    if (reduceMotion) {
        elements.forEach((element) => element.classList.add("visible"));
        return () => {};
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const delay = entry.target.dataset.revealDelay;
                if (delay) {
                    entry.target.style.transitionDelay = `${Number(delay)}ms`;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -10% 0px",
        }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
}
