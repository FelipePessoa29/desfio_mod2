document.addEventListener("DOMContentLoaded", function () {
    const headerLinks = document.querySelectorAll("header ul li");

    window.addEventListener("scroll", function () {
        let currentSectionId = "";

        headerLinks.forEach(function (link) {
            const section = document.querySelector("#" + link.getAttribute("id"));

            if (section.offsetTop <= window.scrollY + link.offsetHeight) {
                currentSectionId = link.getAttribute("id");
            }
        });

        headerLinks.forEach(function (link) {
            link.classList.remove("active");
        });

        const currentLink = document.querySelector("#" + currentSectionId);
        if (currentLink) {
            currentLink.classList.add("active");
        }
    });
});
