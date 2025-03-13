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

  const checkoutBtn = document.querySelector('.proceed-checkout-btn');
  const paymentModal = document.getElementById('payment-modal');
  const closePaymentModal = document.querySelector('.close-payment-modal');
  const paymentSuccessModal = document.getElementById('payment-success-modal');
  const closeSuccessModal = document.querySelector('.close-success-modal');

  checkoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      paymentModal.style.display = 'block';
  });

  closePaymentModal.addEventListener('click', () => {
      paymentModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target === paymentModal) {
          paymentModal.style.display = 'none';
      }
  });

  const paymentForm = document.getElementById('payment-form');
  paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
      if (selectedPaymentMethod) {
          paymentModal.style.display = 'none';
          paymentSuccessModal.style.display = 'block';
          setTimeout(() => {
              paymentSuccessModal.style.display = 'none';
          }, 3000);
      } else {
          alert('Please select a payment method.');
      }
  });

  closeSuccessModal.addEventListener('click', () => {
      paymentSuccessModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target === paymentSuccessModal) {
          paymentSuccessModal.style.display = 'none';
      }
  });
});