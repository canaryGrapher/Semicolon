const CartManager = (props) => {
  for (let i = 0; i < this.state.length; i++) {
    console.log(i);
    let cartColumn = `<div class="cart-content d-flex flex-column">
                <h1 class="cart-heading">Quake</h1>
                <div class="w-30">
                  <img src="./Resources/Images/quake-game.png" />
                </div>
                <div class="w-40 d-flex flex-column justify-content-center">
                  <table>
                    <tr>
                      <td class="text-bold">Quantity:</td>
                      <td class="text-left">2</td>
                    </tr>
                    <tr>
                      <td class="text-bold">Cost:</td>
                      <td class="text-left">&#x20BF;2</td>
                    </tr>
                  </table>
                  <p class="text-center">Change Quantity</p>
                  <div class="quantity">
                    <div
                      class="value-button"
                      id="decrease"
                      onclick="decreaseValue()"
                      value="Decrease Value"
                    >
                      -
                    </div>
                    <input type="number" id="number" value="0" />
                    <div
                      class="value-button"
                      id="increase"
                      onclick="increaseValue()"
                      value="Increase Value"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div
                  class="w-30 d-flex flex-column justify-content-center text-center total"
                >
                  <h2>Total:<span class="cost"> &#x20BF;20</span></h2>
                </div>
              </div>`;
  }
};

export { CartManager };
