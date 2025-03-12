// Function to display cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear previous items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        cartTotalElement.textContent = '$0.00';
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <input type="number" class="quantity-input" data-index="${index}" value="${item.quantity}" min="1">
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;

    // Attach event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Attach delete event listeners
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteItem);
    });

    // Attach quantity change event listeners
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });
}

// Function to delete an item from the cart
function deleteItem(event) {
    const index = event.target.getAttribute('data-index');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item from the cart
    cart.splice(index, 1);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}

// Function to update item quantity in the cart
function updateQuantity(event) {
    const index = event.target.getAttribute('data-index');
    const newQuantity = parseInt(event.target.value);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update the quantity of the item
    cart[index].quantity = newQuantity;

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}

// Function to add item to cart
function addToCart(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const button = event.target;
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Create a product object
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Get existing cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
        // If the product exists, increase its quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If the product does not exist, add it to the cart
        cart.push(product);
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);

    // Refresh the cart display
    displayCart();
}

// Ensure the cart window can be toggled
document.addEventListener('DOMContentLoaded', function() {
    const cartWindow = document.querySelector('.cart-window');
    const cartBtn = document.querySelector('#cart-btn');
    const closeCartBtn = document.querySelector('.close-cart-btn');
    const checkoutBtn = document.querySelector('#checkout-btn');

    function toggleCartWindow() {
        cartWindow.classList.toggle('open');
    }

    cartBtn.addEventListener('click', toggleCartWindow);
    closeCartBtn.addEventListener('click', toggleCartWindow);

    // Redirect to checkout page when checkout button is clicked
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }

    displayCart();

    // Attach event listeners to product links for loader
    document.querySelectorAll('.products-card a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('loader').style.display = 'block';
            const href = this.getAttribute('href');
            setTimeout(() => {
                window.location.href = href;
            }, 2000); 
        });
    });
});

