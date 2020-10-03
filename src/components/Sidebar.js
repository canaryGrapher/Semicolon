const Sidebar = () => {
  const sidebarTemplate = `<img src="./Resources/Images/logo.png" class="logo" alt="logo" />
                              <i id="home" class="fas fa-home" onClick='Router(this.id)'></i>
                              <i id="catalogue" class="fas fa-gamepad" onClick='Router(this.id)'></i>
                              <i id="announcements" class="fas fa-bell" onClick='Router(this.id)'></i>
                              <i id="checkout" class="fas fa-shopping-cart" onClick='Router(this.id)'></i>`;
  return sidebarTemplate;
};

export { Sidebar };
