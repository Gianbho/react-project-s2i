# My React.js-Project for Start2Impact
<p align="center">
  <a href="https://github.com/Gianbho/react-project-s2i">
  </a>

  <h3 align="center">Veg Recipe Website Project GT</h3>

  <p align="center">
    Search for your favourite vegeterian or vegan recipes.
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This is a a simple web app that fetches vegeterian and vegan recipes  [Spoonacular](spoonacular.com) via their free [API](https://spoonacular.com/food-api/) and displays it.

The user can get suggested recipes telling through the homepage inputs 3 ingredients that really likes and 3 that really hates.

The API fetches data and shows a list of recipes.

The user can also search for recipes trough a search toolbar and save the recipes that likes the most. 

Each and every recipe shown in the fetch list will have a title, an image (if provided by the API), a button to open the recipe related page and an heart to save the recipe.

Saved recipes can be found in 'My recipes' page, reachable through the link in the navbar.

Every recipe page shows title, image, ingredients and method. Also you can save the recipe clicking the little heart at the bottom.


### Built With

* [React](https://reactjs.org/)
* [React-router](https://v5.reactrouter.com/web/guides/quick-start)
* [Axios](https://axios-http.com/)
* [Redux](https://redux.js.org/)
* [Dotenv](https://github.com/motdotla/dotenv)

## Getting Started

To get a local copy up and running follow these simple steps.
To try the app online follow the link [TheVegProjectGT](https://lucid-khorana-f11952.netlify.app/)

### Prerequisites

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/Gianbho/react-project-s2i.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```
   
3. Get a free API key at [Spoonacular](https://spoonacular.com/food-api/)

4. Rename the ".env.example" file in the root folder in ".env" and insert your REACT_APP_API_KEY:

   ```sh
   REACT_APP_API_KEY = 'ENTER YOUR API'
   ```
5. Open powershell window in root folder and start a local server

   ```sh
   npm start
   ```

## Usage

The homepage will start asking for 3 ingredients you really like (all required) and then for 3 that you hate. After that it will show you a list of suggested recipes.

The heart at the bottom of every recipe container will save in localStorage the chosen recipe.

The lens in the Navbar show a search toolbar for a 'title-matched' recipes fetch.
 
Clicking on the button 'Open' of a recipe preview will open a page that shows the whole recipe, including ingredients and method.

The page 'My recipes' shows a list of saved recipes stored in localStorage and fetched through id.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Gianluca Tramontano - gianluca.trm@gmail.com


## Acknowledgements

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Spoonacular](https://spoonacular.com/)

