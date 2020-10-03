const Footer = () => {
  const footerTemplate = `<div class="footer d-flex flex-row">
            <div class="col text-center d-flex flex-column justify-content-center">
              <h1 class="heading-root-row">
                Sem<span class="text-color-root">i</span>colon
              </h1>
              <h2 class="subtext-root">Intergalactic Industries</h2>
            </div>
            <div class="col d-flex flex-column justify-content-center">
              <div class="links d-flex flex-row">
                <div class="col footer-links">
                  <h2>Information</h2>
                  <h3>Team</h3>
                  <h3>About</h3>
                </div>
                <div class="col footer-links">
                  <h2>Legal</h2>
                  <h3>Terms of use</h3>
                  <h3>Privacy Policy</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="contribution text-center">
            <p>Copyright © 2020 Semicolon. All rights reserved.</p>
          </div>`;
  return footerTemplate;
};

export { Footer };
