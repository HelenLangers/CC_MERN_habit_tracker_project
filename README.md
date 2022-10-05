<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT NAME -->
<h3 align="center">Holy Shiitake</h3>

  <p align="center">
    This project was made in a group of 4 over 6 days during week 10 of the 16 week CodeClan Software Developer Bootcamp.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Nowadays everyone is trying to build or break a habit. But it's tricky to keep track of them. Identify a habit you'd like to help someone break or build (e.g. alcohol consumption, smoking, calories, exercise, healthy eating...) and make an app to help.
* Make CRUD entries on the front-end that are persisted on a MongoDB database on the back-end
* Display the data in visually interesting / insightful ways.

Habit to track: Home-cooked-meal frequency and mindfulness.

The App can:
* Allow a user to search for recipes based on a key word, e.g. ingredient
* Fetches a random recipe from the API and re-fetches based on a button press
* Presents each recipe with ingredients, an external link and an 'add to entry' button
* Create a diary entry including the recipe name, a date and notes from the user
* Displays the dates a user has entered a diary entry on
* Counts the overall number of entries and shows the user a 'level' of cooking they've achieved

# Responsibilities

# David
* CRUD actions on the app - add, delete, edit.
* Navbar/hamburger menu
* Mindfulness tip and reward system.


# Helen
* Understand and connect to the API
* Render out the results from the API using a flip card visual

# Mhairi
* Add an interactive calendar
* Connect the calendar to the entries data
* Style the calendar to reflect dates of entries
* Add a counter for total number of meals made 

# Stephen
* Add entry form, plus style
* Update entry form, plus style
* CRUD actions - add, delete, update



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* HTML
* CSS
* Javascript
* React
* Express
* Node.js
* MongoDB


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

To run this app, please run:
```sh
npm ci
```

in both client and server (see below)

### Installation

1. Clone the repo
```sh
git clone git@github.com:HelenLangers/Holy_Shiitake_habit_tracker_project.git
```
2. Create a free account on https://developer.edamam.com/edamam-recipe-api
3. Within the client/src folder create a config.js file:
```sh
const config = {
    app_id: ' ',
    app_key: ' '
}

export default config
```
4. Install the necessary dependencies
```sh
cd client
npm ci
..
cd server
npm ci
```
5. Run the seeds file in the server folder
```sh
npm run seeds
```
6. Start the server
```sh
npm run server:dev
```
7. Start the client
```sh
..
cd client
npm start
```
8. This will automatically open the app in Chrome.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Helen Langridge - [Twitter](https://twitter.com/HelenCycling) - [LinkedIn](https://www.linkedin.com/in/helen-langridge-62b32b166/)

Project Link: [Github](https://github.com/HelenLangers/CC_MERN_habit_tracker_project)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [CodeClan](https://codeclan.com/)
* [FontAwesome](https://fontawesome.com/)
* [EdamamAPI](https://www.edamam.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

