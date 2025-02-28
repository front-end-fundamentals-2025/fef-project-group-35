const cartWindow = document.getElementById("cart-window");
const cartButton = document.getElementById("cart-btn");

cartButton.addEventListener("click", openPopup);

function openPopup() {
    if (cartWindow.style.visibility === "hidden") {
        cartWindow.style.visibility = "visible";
    } else {
    cartWindow.style.visibility = "hidden";
    }
}