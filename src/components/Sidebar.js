const Sidebar = () => {
  const sidebarTemplate = `<img src="./Resources/Images/logo.png" class="logo" alt="logo" />
                              <i id="home" class="fas fa-home" onClick='Router(this.id)'></i>
                              <i id="catalogue" class="fas fa-gamepad" onClick='Router(this.id)'></i>
                              <i id="search" class="fas fa-search" onClick='Router(this.id)'></i>
                              <i id="cart" class="fas fa-shopping-cart" onClick='Router(this.id)'></i>`;
  return sidebarTemplate;
};

export { Sidebar };
