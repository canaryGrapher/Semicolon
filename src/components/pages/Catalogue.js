import { augmentedData as augmented } from '../../data/augmented_games.js';
import { physicalData as physical } from '../../data/physical_games.js';
import { virtualData as virtual } from '../../data/virtual_games.js';

const Catalogue = () => {
  let physicalCard = '';
  const physicalCardVar = physical.map((item) => {
    physicalCard += `<div class="game-card">
      <div class="game-name-bar hyperreality-card">
        <h2 class="text-center">${item.name}</h2>
      </div>
      <img class="game-card-img" src="${item.image}" />
      <div class="game-card-body">
        <p>
          ${item.about}
        </p>
      </div>
      <div class="game-card-footer d-flex flex-row hyperreality-card">
        <div class="add-to-cart" id="${
          item.name.split(' ')[0]
        }" onClick="addtocart(this.id)">
          <h3 class="cart-image">Add to Cart</h3>
        </div>
        <div class="item-cost">
          <h3 class="cost">&#x20BF;${item.cost}</h3>
        </div>
      </div>
    </div>`;
  });
  let augmentedCard = '';
  const augmentedCardVar = augmented.map((item) => {
    augmentedCard += `<div class="game-card">
      <div class="game-name-bar augmented-card">
        <h2 class="text-center">${item.name}</h2>
      </div>
      <img class="game-card-img" src="${item.image}" />
      <div class="game-card-body">
        <p>
          ${item.about}
        </p>
      </div>
      <div class="game-card-footer d-flex flex-row augmented-card">
        <div class="add-to-cart" id="${
          item.name.split(' ')[0]
        }" onClick="addtocart(this.id)">
          <h3 class="cart-image">Add to Cart</h3>
        </div>
        <div class="item-cost">
          <h3 class="cost">&#x20BF;${item.cost}</h3>
        </div>
      </div>
    </div>`;
  });

  let virtualCard = '';
  const virtualDataVar = virtual.map((item) => {
    virtualCard += `<div class="game-card">
      <div class="game-name-bar virtual-card">
        <h2 class="text-center">${item.name}</h2>
      </div>
      <img class="game-card-img" src="${item.image}" />
      <div class="game-card-body">
        <p>
          ${item.about}
        </p>
      </div>
      <div class="game-card-footer d-flex flex-row virtual-card">
        <div class="add-to-cart" id="${
          item.name.split(' ')[0]
        }" onClick="addtocart(this.id)">
          <h3 class="cart-image">Add to Cart</h3>
        </div>
        <div class="item-cost">
          <h3 class="cost">&#x20BF;${item.cost}</h3>
        </div>
      </div>
    </div>`;
  });
  const catalogueTemplate = `<div id="section-catalogue-landing">
            <div class="text-over d-flex flex-column justify-content-center">
              <h1 class="heading-root">
                YEAR-LONG <br />PASS AT<span class="text-color-root">
                  &#x20BF;15</span
                >
              </h1>
              <p class="subtext-root">
                With free VIP suite game room, and no wait time, and <br />
                health and agility boosts.
                <a class="linkURL" href="#">Know more</a> about free pass.
              </p>
              <button class="btn">Apply Now</button>
            </div>
          </div>
          <section id="cards-section" id="all cards">
            <div class="virtual-reality">
              <h1 class="game-heading">VIRTUAL REALITY GAMES</h1>
              <p class="game-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <div class="d-grid grid-item-3 card-holder-game">
                ${virtualCard}
              </div>
            </div>

            <div class="augmented-reality">
              <h1 class="game-heading">AUGMENTED REALITY GAMES</h1>
              <p class="game-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <div class="d-grid grid-item-3 card-holder-game">
              ${augmentedCard}
              </div>
            </div>
            <div class="physical-reality">
              <h1 class="game-heading">HYPER-REALITY GAMES</h1>
              <p class="game-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <div class="d-grid grid-item-3 card-holder-game">
              ${physicalCard}
              </div>
            </div>
          </section>`;
  return catalogueTemplate;
};

export { Catalogue };
