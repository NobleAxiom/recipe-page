import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div class="container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Omelette Image"></img>
        </a>

        <h1>Simple Omelette Recipe</h1>

        <div class="card" id="preperation">
          <h3 class="red-text">Preperation Time</h3>
          <p class="red-text">This is some blue text.</p>
          <ul class="red-text">
            <li>Total: Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li>Cooking: 5 minutes</li>
          </ul>
        </div>

        <div class="section" id="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>2 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <div class="section" id="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <b>Heat the pan:</b> Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>
            <li>
              <b>Cook the omelette:</b> Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>
            <li>
              <b color="green">Add fillings (optional):</b> When the eggs begin
              to set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <b>Fold and serve:</b> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <b>Enjoy:</b> Serve hot, with additional salt and pepper if
              needed.
            </li>
            <li>Slide the omelette onto a plate and serve immediately.</li>
          </ol>
        </div>

        <div class="section" id="nutrition">
          <h2>Nutrition Information</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <hr></hr>
          <li>Calories: 250</li>
          <hr></hr>
          <li>Protein: 18g</li>
          <hr></hr>
          <li>Fat: 20g</li>
          <hr></hr>
          <li>Carbohydrates: 3g</li>
          <hr></hr>
          <li>Fiber: 1g</li>
        </div>
      </div>
    </>
  );
}

export default App;
