// function filterSelection(category) {
//     let buttons = document.querySelectorAll(".button-group button");
//     buttons.forEach(button => button.classList.remove("active"));
//     event.target.classList.add("active");
// }


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".skill-div");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Remove active class from previous button safely
            const activeButton = document.querySelector(".filter-btn.active");
            if (activeButton) {
                activeButton.classList.remove("active");
            }
            this.classList.add("active");

            // Filter items
            items.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "flex";  // ✅ Fix: Keep the flex display
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const buttons1 = document.querySelectorAll(".filter-bt");
    const items1 = document.querySelectorAll(".work-div");

    buttons1.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter-work");

            // Remove active class from previous button safely
            const activeButton = document.querySelector(".filter-bt.active");
            if (activeButton) {
                activeButton.classList.remove("active");
            }
            this.classList.add("active");

            // Filter items
            items1.forEach(item1 => {
                if (filter === "all" || item1.classList.contains(filter)) {
                    item1.style.display = "flex";  // ✅ Fix: Keep the flex display
                    
                } else {
                    item1.style.display = "none";
                }
            });
        });
    });
});



// ----------------------------------------------------------------------responsive--------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});