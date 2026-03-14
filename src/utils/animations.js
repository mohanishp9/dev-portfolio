export function initAnimations() {

    const cursor = document.querySelector(".cursor");
    const cursorRing = document.querySelector(".cursor-ring");

    if (cursor && cursorRing) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            setTimeout(() => {
                cursorRing.style.left = e.clientX + "px";
                cursorRing.style.top = e.clientY + "px";
            }, 80);
        });

        document
            .querySelectorAll(
                "a, button, .project-card, .skill-category, .stat-box"
            )
            .forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    cursor.classList.add("hovering");
                    cursorRing.classList.add("hovering");
                });

                el.addEventListener("mouseleave", () => {
                    cursor.classList.remove("hovering");
                    cursorRing.classList.remove("hovering");
                });
            });
    }

    // Scroll Reveal
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, 100);

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -60px 0px",
        }
    );

    reveals.forEach((el) => observer.observe(el));

    // Stagger children
    document.querySelectorAll(".skills-grid, .about-stats").forEach((grid) => {
        const children = grid.querySelectorAll(".reveal");

        children.forEach((child, i) => {
            child.style.transitionDelay = i * 0.1 + "s";
        });
    });
}