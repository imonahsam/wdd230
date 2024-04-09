document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");

    let today = new Date();
    let day = today.getDay();

    if (day >= 1 && day <= 3) {
        const prompt = document.querySelector('.prompt');
        prompt.style.position = "fixed";
        prompt.style.padding = "10px";

        banner.style.display = "flex";

        const deleteButton = document.querySelector('.delete');
        deleteButton.addEventListener('click', function () {
            banner.style.display = "none";
        });
    } else {
        banner.style.display = "none";
    }
});
