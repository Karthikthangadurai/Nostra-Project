
let offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

//Selecting side Navebar,Menuicon

let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click", function()
{
    sidenav.style.right="-50%"
})

// Image Slider Logic
const sliderImages = document.querySelectorAll(".slider-image");
let currentImage = 0;

function showSlide(index) {
    sliderImages.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

// Initialize first image
showSlide(currentImage);

document.getElementById("slider-left-activate").addEventListener("click", () => {
    currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentImage);
});

document.getElementById("slider-right-activate").addEventListener("click", () => {
    currentImage = (currentImage + 1) % sliderImages.length;
    showSlide(currentImage);
});

// Scroll to New Arrival and Most Wanted
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const text = this.textContent.trim().toLowerCase();
        if (text === "new arrival") {
            e.preventDefault();
            document.querySelector("section.m-2 h2:contains('New Arrival')")?.scrollIntoView({ behavior: "smooth" });
        } else if (text === "most wanted") {
            e.preventDefault();
            document.querySelector("section.m-2 h2:contains('Most Wanted')")?.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Fix scrollIntoView if 'contains' doesn't work
function scrollToSectionByTitle(titleText) {
    const headings = document.querySelectorAll("section h2");
    headings.forEach(h2 => {
        if (h2.textContent.trim().toLowerCase() === titleText.toLowerCase()) {
            h2.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Attach fixed scroll logic
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const text = this.textContent.trim().toLowerCase();
        if (text === "new arrival" || text === "most wanted") {
            e.preventDefault();
            scrollToSectionByTitle(text);
        }
    });
});

// Heart icon toggle to red on click
document.querySelectorAll(".fa-heart").forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
        icon.style.color = icon.classList.contains("fa-solid") ? "red" : "#e44907";
    });
});
