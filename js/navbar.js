document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarCollapse"); //cross icon
    const otherContent = document.getElementById("otherContent");   //hamburger icon

    navbarCollapse.addEventListener("show.bs.collapse", function () {
        otherContent.style.display = "none"; // Hide other content
        navbarCollapse.style.display = "block";
    });

    navbarCollapse.addEventListener("hide.bs.collapse", function () {
        otherContent.style.display = "block"; // Show other content
        navbarCollapse.style.display = "none";
    });
});