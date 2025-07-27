
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


// Product filtering logic
const checkboxes = document.querySelectorAll('input[type="checkbox"][name="tags"]');
const searchInput = document.querySelector('.navbar-search input');
const products = document.querySelectorAll('.products .image');

function filterProducts() {
    const activeTags = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value.toLowerCase());

    const searchQuery = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector("p").textContent.toLowerCase();
        const matchesSearch = name.includes(searchQuery);

        // Combine search and checkbox filtering
        const matchesFilter = activeTags.length === 0 || activeTags.some(tag => name.includes(tag));

        if (matchesSearch && matchesFilter) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Event listeners
checkboxes.forEach(checkbox => checkbox.addEventListener('change', filterProducts));
searchInput.addEventListener('input', filterProducts);

// Heart icon toggle to red on click
document.querySelectorAll(".fa-heart").forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
        icon.style.color = icon.classList.contains("fa-solid") ? "red" : "#e44907";
    });
});
