function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);

document.addEventListener("DOMContentLoaded", function () {
    let headerImg = document.getElementById("header_img")
    var orderButton = document.getElementById("order_btn");
    var homeLink = document.querySelector(".nav-link");
    var menuLink = document.querySelectorAll(".nav-link")[1];
    var aboutUsLink = document.querySelectorAll(".nav-link")[2];


    orderButton.addEventListener("click", function () {
        orderButton.style.backgroundColor = "green";
    });

    let originalSrc =  headerImg.src;

    headerImg.addEventListener("mouseover", function () {
        headerImg.src = "images/coffeeMousover.png";
    });
    headerImg.addEventListener("mouseout", function () {
        headerImg.src = originalSrc;
    });
    
    homeLink.addEventListener("mouseover", function () {
        homeLink.style.color = "blue";
    });


    menuLink.addEventListener("mouseover", function () {
        menuLink.style.color = "red";
    });


    aboutUsLink.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            aboutUsLink.style.fontWeight = "bold";
        }
    });
});