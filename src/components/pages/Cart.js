const Cart = () => {
  const checkoutTemplate = `<div class="content-cart">
            <h1 class="heading-root cart-heading-super">Cart</h1>
            <div id="container-cart" class="d-grid">

              <!-- card starts here -->


              <!-- card ends here -->
              
            </div>
          </div>
          <div class="w-full print-button-holder">
            <button class="btn print-button">Pay Now</button>
          </div>`;
  return checkoutTemplate;
};

export { Cart };
