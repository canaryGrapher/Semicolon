const Home = () => {
  const homeTemplate = `
        <div id="homepage">
          <div id="section-home-landing">
            <div class="text-over d-flex flex-column justify-content-center">
              <h2 class="text-root">5D IMMERSIVE GAMING</h2>
              <h1 class="heading-root">
                DON'T PLAY THE GAME, <br />BE THE GAME
              </h1>
              <p class="subtext-root">
                Fight with the resistance on Earth, with the<br />
                amazing Framework Simulation
              </p>
              <button class="btn" onClick="Router('catalogue')">Explore</button>
            </div>
          </div>
          <section>
            <!-- for spaceracer -->
            <div class="img-row">
              <div class="row-img-holder">
                <img
                  src="./Resources/Images/spacerace.jpg"
                  alt="space race"
                  class="row-img ml-auto"
                />
              </div>
              <div
                class="row-text-holder d-flex flex-column justify-content-center ml-2 mr-5"
              >
                <h2 class="text-root">NEW REAL-TIME MISSIONS</h2>
                <h1 class="heading-root-row">EXPLORE NEW GALAXIES</h1>
                <p class="subtext-root">
                  There are still millions on planets humans can survive on. Fly
                  the spaceships virtually and find them.
                </p>
              </div>
            </div>
            <!-- for kree fighter -->
            <div class="img-row">
              <div
                class="row-text-holder d-flex flex-column justify-content-center ml-5 mr-2 text-right"
              >
                <h2 class="text-root">PROTECT EARTH FROM KREE</h2>
                <h1 class="heading-root-row">DEFEAT THE KREE</h1>
                <p class="subtext-root">
                  The Kree destroyed our planet. But in this alternate timeline,
                  you can still defeat them in this augmented reality action
                  adventure.
                </p>
              </div>
              <div class="row-img-holder">
                <img
                  src="./Resources/Images/kreefight.jpg"
                  alt="space race"
                  class="row-img mr-auto"
                />
              </div>
            </div>
            <!-- for space duel -->
            <div class="img-row">
              <div class="row-img-holder">
                <img
                  src="./Resources/Images/spaceduel.jpg"
                  alt="space race"
                  class="row-img ml-auto"
                />
              </div>
              <div
                class="row-text-holder d-flex flex-column justify-content-center ml-2 mr-5"
              >
                <h2 class="text-root">5D ACTION PLAY</h2>
                <h1 class="heading-root-row">BE THE SPACE DUEL CHAMP</h1>
                <p class="subtext-root">
                  Fight your opponent in a one-on-one duel and prove that you
                  are the champion. The pain is real, the strength is real, but
                  not permanent.
                </p>
              </div>
            </div>

            <div class="row">
              <h2 class="text-root">
                CLASSICS FROM THE EARLY 21<sup>st</sup> CENTURY
              </h2>
              <h1 class="heading-root-row">THE RETRO GAMING</h1>
              <div class="card-slider d-flex flex-row">
                <!-- for grand theft auto -->
                <div class="card">
                  <img
                    src="./Resources/Images/classics/gta.jpg"
                    alt="Grand Theft Auto"
                    class="card-img"
                  />

                  <div class="card-body">
                    <h3 class="card-title">GRAND THEFT AUTO V</h3>
                    <p class="card-text">
                      Released in 2013, this game was a very popular game among
                      the teens as well as adults of the time. A RPG game is a
                      complete action package.
                    </p>
                  </div>
                </div>
                <!-- for call of duty -->
                <div class="card">
                  <img
                    src="./Resources/Images/classics/cod.jpg"
                    alt="Call of Duty"
                    class="card-img"
                  />

                  <div class="card-body">
                    <h3 class="card-title">CALL OF DUTY: BLACK OPS 4</h3>
                    <p class="card-text">
                      Released in 2018, this was a very popular first person
                      shooting game with a lot of action and based on the story.
                    </p>
                  </div>
                </div>
                <!-- for forza motorsports -->
                <div class="card">
                  <img
                    src="./Resources/Images/classics/forza.jpg"
                    alt="Call of Duty"
                    class="card-img"
                  />

                  <div class="card-body">
                    <h3 class="card-title">FORZA HORIZON 2</h3>
                    <p class="card-text">
                      Released in 2018, this was a very popular first person
                      shooting game with a lot of action and based on the story.
                    </p>
                  </div>
                </div>
                <!-- for fortnite -->
                <div class="card">
                  <img
                    src="./Resources/Images/classics/fortnite.png"
                    alt="Call of Duty"
                    class="card-img"
                  />

                  <div class="card-body">
                    <h3 class="card-title">FORTNITE</h3>
                    <p class="card-text">
                      Released in 2018, this was a very popular first person
                      shooting game with a lot of action and based on the story.
                    </p>
                  </div>
                </div>
                <!-- for pubg -->
                <div class="card">
                  <img
                    src="./Resources/Images/classics/pubg.jpg"
                    alt="Call of Duty"
                    class="card-img"
                  />

                  <div class="card-body">
                    <h3 class="card-title">PLAYERUNKNOWN'S BATTLEGROUNDS</h3>
                    <p class="card-text">
                      Released in 2018, this was a very popular first person
                      shooting game with a lot of action and based on the story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <h2 class="text-root">
                NEW RELEASE. PLAY BEFORE THE MARTIANS DO.
              </h2>
              <h1 class="heading-root-row">LATEST ON THE PLANET</h1>
            </div>
            <div class="img-row-end d-flex flex-row flex-md-column">
              <div class="row-img-holder">
                <img
                  src="./Resources/Images/quake.png"
                  alt="Photo to quake"
                  class="row-img ml-auto"
                />
              </div>
              <div
                class="row-text-holder d-flex flex-column justify-content-center ml-2 mr-5"
              >
                <h1 class="heading-root-row">BE THE LEGEND</h1>
                <h2 class="text-root">WIN TO MEET QUAKE IN REAL LIFE</h2>
                <p class="subtext-root">
                  Quake saved the people by taking down the entire Kree fleet with her powers. Do you have what it takes? Play as Quake and erase the Kree attacking fleet from existence.
                </p>
              </div>
            </div>
          </section>
        </div>`;
  return homeTemplate;
};

export { Home };
