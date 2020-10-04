import { gameCatalogue } from '../../data/game_catalogue.js';

const SearchQuery = (props) => {
  if (!props) {
    console.log('empty');
    document.getElementById('result').innerHTML =
      '<p></p><p class="no-result">Nothing to show here</p><p></p>';
  } else {
    let resultsFound = '';

    for (let i = 0; i < gameCatalogue.length; i++) {
      let objectSelector = gameCatalogue[i].name.toLowerCase();
      if (objectSelector.includes(props.toLowerCase())) {
        console.log(objectSelector);
        document.getElementById('result').innerHTML = props;
        resultsFound += `<div class="game-search-card">
                          <div class="game-name-bar hyperreality-card">
                            <h2 class="text-center">${gameCatalogue[i].name}</h2>
                          </div>
                          <img class="game-card-img" src="${gameCatalogue[i].image}" />
                          <div class="game-card-body">
                            <p>
                              ${gameCatalogue[i].about}
                            </p>
                          </div>
                          <div class="game-card-footer d-flex flex-row hyperreality-card">
                            <div class="add-to-cart" id="${gameCatalogue[i].name}" onClick="addtocart(this.id)">
                              <h3 class="cart-image">Add to Cart</h3>
                            </div>
                            <div class="item-cost">
                              <h3 class="cost">&#x20BF;${gameCatalogue[i].cost}</h3>
                            </div>
                          </div>
                        </div>`;
        document.getElementById('result').innerHTML = resultsFound;
      }
      if (resultsFound.length == 0) {
        document.getElementById('result').innerHTML =
          '<p></p><p class="no-result">No results found</p><p></p>';
      }
    }
  }
};

const Search = () => {
  const searchTemplate = `<div class="field">
            <h1 class="search-heading">Search collection</h1>
            <input type="search" class="searchbar" placeholder="Search your game" onKeyUp="SearchQuery(this.value)" />
            <div class="search-result">
            <div class="d-grid grid-item-3 card-holder-game" id="result">
            <p></p>
            <p class="no-result">Start typing to search...</p>
            <p></p>
            </div>
            </div>
          </div>`;
  return searchTemplate;
};

export { Search, SearchQuery };
