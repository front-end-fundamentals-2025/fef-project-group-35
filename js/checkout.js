document.addEventListener('DOMContentLoaded', function() {
    // Function to render cart items in the checkout page
    function renderCheckoutCartItems() {
        const cartItemsContainer = document.getElementById('checkout-cart-items');
        const cartTotalElement = document.getElementById('checkout-total');

        // Assuming cart data is stored in local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Clear existing items
        cartItemsContainer.innerHTML = '';

        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.name}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price}</p>
            `;
            cartItemsContainer.appendChild(itemElement);

            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Call the function to render cart items on page load
    renderCheckoutCartItems();
});