// Function to add item to cart
function addToCart(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const button = event.target;
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');

    // Create a product object
    const product = {
        name: productName,
        price: productPrice
    };
    // Get existing cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the new product to the cart
    cart.push(product);
    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
   
    alert(`${productName} has been added to your cart!`);
}
// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});

 // Redirect to cart page when cart icon is clicked
document.getElementById('cart-icon').addEventListener('click', function(event) {
    window.location.href = 'cart.html';
});
