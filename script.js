const productList = document.getElementById("product-list");
const searchInput = document.getElementById("Search-input");
const searchBtn = document.getElementById("Search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

function filterProduct() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
    const activeCategoryBtn = document.querySelector(".category-btn.active");
    const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : "all";

    productItems.forEach(item => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;

        if ((title.includes(searchValue) || searchValue === "") &&
            (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e) {
    categoryBtns.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    filterProduct();
}

searchBtn.addEventListener("click", filterProduct);
searchInput.addEventListener("keyup", filterProduct);
categoryBtns.forEach(btn => {
    btn.addEventListener("click", setCategory);
});

filterProduct();
