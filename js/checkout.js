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

  const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');
  const completePurchaseModal = document.getElementById('complete-purchase-modal');
  const closeModalBtn = document.querySelector('.close-btn');
  const closeModalBtnFooter = document.querySelector('.close-modal-btn');

  proceedCheckoutBtn.addEventListener('click', function() {
      completePurchaseModal.style.display = 'block';
      setTimeout(function() {
          completePurchaseModal.style.display = 'none';
      }, 3000); 
  });

  closeModalBtn.addEventListener('click', function() {
      completePurchaseModal.style.display = 'none';
  });

  closeModalBtnFooter.addEventListener('click', function() {
      completePurchaseModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == completePurchaseModal) {
          completePurchaseModal.style.display = 'none';
      }
  });
});