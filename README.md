<h1 align="center">
  <br>
  <a href="https://github.com/binary-riviera/GroupSoftwareFrontend"><img src="https://i.imgur.com/JYXOrqU.png" alt="Exeter Orientation" width="400"></a>
  <br>
  Software Engineering Group Project
  <br>
  Exeter Orientation - A campus treasure hunt
  <br>
  <br>
  <h2 align="center">
  Group F
  </h2>
</h1>

<p align="center">
     <a href="https://github.com/binary-riviera/GroupSoftwareFrontend">
    <img src="https://img.shields.io/github/commit-activity/m/binary-riviera/GroupSoftwareFrontend"
         alt="Commit">
  </a>
    <a href="https://github.com/binary-riviera/GroupSoftwareFrontend/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/binary-riviera/GroupSoftwareFrontend"
         alt="License">
  </a>
  <a href="https://binary-riviera.github.io/GroupSoftwareFrontend/introPage.html">
  <img src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg"
         alt="Website">
     <a>
 
</p>

<p align="center">
  
  <a href="https://github.com/binary-riviera/GroupSoftwareFrontend/blob/master/CODE_OF_CONDUCT.md">
    <img src="http://ForTheBadge.com/images/badges/makes-people-smile.svg"
         alt="Smile">
  </a>
   <a href="https://en.wikipedia.org/wiki/Electricity">
    <img src="http://ForTheBadge.com/images/badges/powered-by-electricity.svg"
         alt="Elecricity">
  </a>
  
  </p>

<p align="center">
 • <a href="#getting-started">Getting started</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#installing">Installing</a> •
  <a href="#testing">Testing</a> •
  <a href="#deployment">Deployment</a> •
   <a href="#usage">Usage</a> •
  <a href="#how-to-play">How to play</a> •
   <a href="#authors">Authors</a> •
  <a href="#code-of-conduct">Code of Conduct</a> •
  <a href="#license">License</a> •
</p>


We have created a treasure hunt game for new students to complete during welcome 
week to help orientate students on campus while being an icebreaker to meet their peers. 
Students are able to solve clues on the app to find their way to locations around campus
in small groups and complete tasks when they arrive. The webapp also features a gamekeeper user 
profile which can be used to supervise the game and make changes.

**Link to hosted page**: **https://binary-riviera.github.io/GroupSoftwareFrontend/introPage.html**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a web browser or mobile device.

### Dependencies

* Firebase Authentication
* Firebase Realtime Database
* Firebase Firestore
* Nodejs (if running tests locally)
* Cypress (if running tests locally)

 [![ForTheBadge uses-html](http://ForTheBadge.com/images/badges/uses-html.svg)](http://ForTheBadge.com)
 [![ForTheBadge uses-css](http://ForTheBadge.com/images/badges/uses-css.svg)](http://ForTheBadge.com)
 [![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)


### Prerequisites

* Text Editor of your choice (VS Code, Atom, Brackets).
* Stable internet connection.

### Installing

Windows:
1. Open Git Bash.
2. Change the current working directory to the location where you want the cloned directory to be made.
3. Use the command shown below and press enter.
```
$ git clone https://github.com/binary-riviera/GroupSoftwareFrontend.git
```

OS X & Linux:
1. Open Terminal.
2. Change the current working directory to the location where you want the cloned directory to be made.
3. Use the command shown below and press enter.

```
$ git clone https://github.com/binary-riviera/GroupSoftwareFrontend.git
```

Or using an IDE:
1. Navigate to your IDEs Version Control System tab.
2. Go to Git > Clone.
3. Use the link shown below to clone the repository.

```
https://github.com/binary-riviera/GroupSoftwareFrontend.git
```

## Testing

### Testing remotely

By default, the tests are run on every push to the repository. All the required functionality works out of the box. The results of the tests passing are displayed in the *actions* pane of the repository. If you want to change how the tests run, for instance running tests on pull requests instead of on push then the *.github/javascript.yml* needs to be edited.

### Testing locally

To test locally first make sure to clone the repository. Then install Cypress (the testing tool used) by running:

```
node install
```
After this, tests can be run by running the following command in the home directory:

On Linux
```
./node_modules/.bin/cypress run
```
On Windows
```
.\node_modules\.bin\cypress run
```
The tests will all be run then, displaying the passes and failures on the command line.


## Deployment

**Student** :mortar_board: 

*Student version of the app is designed to be used with mobile devices.*

1. Go to [this link](https://binary-riviera.github.io/GroupSoftwareFrontend/introPage.html).
2. Click on 'Student Login'.
3. Log in with your @exeter.ac.uk email account and password.
4. Ready to play!


**Gamekeeper** :game_die:

*Gamekeeper version of the app is designed for a laptop/desktop computer.*

1. Go to [this link](https://binary-riviera.github.io/GroupSoftwareFrontend/introPage.html).
2. Click on 'Gamekeeper Login'.
3. Log in with your @exeter.ac.uk email account, password and key (*must be authenticated as a gamekeeper account by the developers*).
4. Ready to conduct the game!

## Usage

### Sitemap

<br>
  <a href="https://binary-riviera.github.io/GroupSoftwareFrontend/introPage.html"><img src="https://i.imgur.com/6JxdYiJ.png" alt="Sitemap"></a>
  <br>
  
### Realtime database

<br>
  <a href="https://binary-riviera.github.io/GroupSoftwareFrontend/introPage.html"><img src="https://i.imgur.com/I2cu9Ky.png" alt="Sitemap"></a>
  <br>

## How to play

**Student** :mortar_board:

Upon starting a game the players will be given a hint to help them find their way to one of the university resources. Players can use the **'FAQ'** button to get help with frequently ocurring questions about the game or press the **'I need help'** button to notify the gamekeeper that they feel unsafe or overwhelmed. Players can use the feed to keep track of the state of the game and use the **'Emoji buttons'** for a fun and fast-paced way of communicating. When arriving at the intended resource, players must use the **'Open camera'** button to scan a QR code and recieve their next hint. The game is finished when the players have been to all the resources on their route and scanned the QR codes.

<br>
  <a><img src="https://i.imgur.com/TCew7OF.jpg" alt="Student screen" width="200" height="400"></a>
 <br>


**Gamekeeper** :game_die:

The gamekeeper has the ability to start and end a game using the **'Start/End game'** button and can keep track of everything using a map of the university, a leaderboard and the feed. The map displays a marker for each player which is updated in real-time to allow the gamekeeper to keep track of their progress. The leaderboard will display all the rankings of the players and also what stage they are currently at. The gamekeeper can recieve help requests from players and keep track of the game state using the feed which the gamekeeper can also manually clear using the **'Clear feed'** button. 

<br>
  <a><img src="https://i.imgur.com/8CnZ6RB.png" alt="Student screen"></a>
 <br>


## Authors

* [**Daniel Cripps**](https://github.com/binary-riviera)
* [**Louis Evans**](https://github.com/LouisEvans)
* [**Connor Forsyth**](https://github.com/cFors4)
* [**Mbongeni Gulu**](https://github.com/Mgulu)
* [**Richard Li**](https://github.com/richardli29)
* [**Andero Pinka**](https://github.com/Andu321)

Project was conducted as part of the ECM2434 Software Engineering Group Project module in University of Exeter.

## Code of conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) file for details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.





