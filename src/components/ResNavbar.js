const ResNavbar = () => {
  const resTemplate = `<nav
          class="navbar position-fixed d-flex flex-row justify-content-around">
          <h1 class="logo-text">Semicolon</h1>
          <div class="ham-menu-container">
            <div class="ham-menu">
              <div class="layer"></div>
              <div class="layer"></div>
              <div class="layer"></div>
            </div>
          </div>
        </nav>`;

  return resTemplate;
};

export { ResNavbar };
