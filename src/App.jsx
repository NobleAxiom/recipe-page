import "./App.css";
import omeletteImg from "./assets/image-omelette.jpeg";

function App() {
  return (
    <>
      <a
        href="https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm"
        target="_blank"
      >
        <img
          src={omeletteImg}
          className="banner"
          id="fullWidth"
          alt="Omelette Image"
        ></img>
      </a>
      <div class="container">
        <a
          href="https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm"
          target="_blank"
        >
          <img
            src={omeletteImg}
            className="banner"
            id="containedWidth"
            alt="Omelette Image"
          ></img>
        </a>

        <div class="section" id="discription">
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div class="card" id="preperation">
          <h3>Preperation Time</h3>
          <ul>
            <li>
              <p>
                <b>Total:</b> Approximately 10 minutes
              </p>
            </li>
            <li>
              <p>
                <b>Preparation:</b> 5 minutes
              </p>
            </li>
            <li>
              <p>
                <b>Cooking:</b> 5 minutes
              </p>
            </li>
          </ul>
        </div>

        <div class="section" id="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>
              <p>2-3 large eggs</p>
            </li>
            <li>
              <p>Salt, to taste</p>
            </li>
            <li>
              <p>Pepper, to taste</p>
            </li>
            <li>
              <p>1 tablespoon of butter or oil</p>
            </li>
            <li>
              <p>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>
        </div>

        <hr></hr>

        <div class="section" id="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>
              <p>
                <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </p>
            </li>
            <li>
              <p>
                <b>Heat the pan:</b> Place a non-stick frying pan over medium
                heat and add butter or oil.
              </p>
            </li>
            <li>
              <p>
                <b>Cook the omelette:</b> Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>
            <li>
              <p>
                <b>Add fillings (optional):</b> When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </p>
            </li>
            <li>
              <p>
                <b>Fold and serve:</b> As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </p>
            </li>
            <li>
              <p>
                <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                needed.
              </p>
            </li>
          </ol>
        </div>

        <hr></hr>

        <div class="section" id="nutrition">
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div class="row">
            <span class="column" id="value">
              Calories
            </span>
            <span class="column" id="per-serving">
              277kcal
            </span>
          </div>
          <hr></hr>
          <div class="row">
            <span class="column" id="value">
              Carbs
            </span>
            <span class="column" id="per-serving">
              0g
            </span>
          </div>{" "}
          <hr></hr>
          <div class="row">
            <span class="column" id="value">
              Protein
            </span>
            <span class="column" id="per-serving">
              20g
            </span>
          </div>{" "}
          <hr></hr>
          <div class="row">
            <span class="column" id="value">
              Fat
            </span>
            <span class="column" id="per-serving">
              22g
            </span>
          </div>{" "}
          <br></br>
        </div>
      </div>
    </>
  );
}

export default App;
