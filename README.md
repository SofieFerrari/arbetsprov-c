# Backend Sample of Work - Rock, Paper Scissors Game

## The Project:

In this project I created a RESTful API for the game of Rock, Paper, Scissors.
A player requests a game-ID and then Player 1 and Player 2 can be added to the game by using this ID. The game can only be played once, a win is counted as a win, and so is also a tie.
Create a new ID to play a new game.

## Technology Stack:

Node.js - I chose Node.js because it is the language I am most familiar with. I like how it can handle multiple requests without blocking which creates a smooth, real time game.
Express - Because this is the framework I have used before when creating APIs. It enables routing and middleware which keeps the code clean and easier to navigate.
CORS - I added this middleware and made it possible for requests from all browsers. It's possible to make security restrictions (choose special browsers) in the future if needed.
@babel - To be able to use newer JavaScript features bc I use ES6.
UUID - To generate unique identifiers securely.

## Installation & Setup DOWNLOAD:

1. Download the zip file and extract it to your desired location.

2. Through the terminal, navigate to the project directory:

cd path/to/your/arbetsprov

3. Install the necessary dependencies:

npm install

## Running the Application:

### To start the application in dev mode, run:

npm run dev

### To start the application in production mode, run:

npm start

## API Endpoints:

This API exposed the following endpoints:

## Important note for testing the game (with Postman):

Click Body --> opt in "raw" and choose JSON in the drop down menu

### 1. Create a Game

Path: /api/games
Method: POST
Description: This endpoint returns a game ID.

To request the ID, use the POST-method, add the URL (Ex: http://localhost:8080/api/games/) and press SEND.

This will generate a response in the body field:
ex:

{
"id": "random-id"
}

### 2. Join a Game

Path: /api/games/:id/join
Method: POST
Description: This endpoint allows Players 1 and 2 to join an the game. The game ID should be specified in the URL path, and each players name should be included in the request body, one at a time.
This means that if you test this game alone you have to make two requests with this endpoint, one for each name.

Ex Request 1:
{
"name": "Player1"
}

Ex Request 2:
{
"name": "Player2"
}

### 3. Make a Move

Path: /api/games/:id/play
Method: POST
Description: This endpoint allows players to make their moves in the game. The game ID should be specified in the URL path, and the request body should include the player's name and the move they wish to make.
NOTE that every move has to be typed with a capital letter: Rock, Paper, Scissors.
Note that the input isn't case sensitive.

Ex Request:
{
"name": "Player1",
"move": "Rock"
}

### 4. Get Game State

Path: /api/games/:id
Method: GET
Description: This endpoint retrieves the current state of the game, including the moves made by both players and the winner (if the game is over). The game ID should be specified in the URL path.

Ex Response:
{
"id": "random id",
"playerOne": {
"name": "Player1",
"move": "Rock"
},
"playerTwo": {
"name": "Player2",
"move": "Scissors"
},
"winner": "Player1",
"gameOver": true
}

### 5. Documentation of All Endpoints

Path: /
Method: GET
Description: This endpoint returns a list of all available API endpoints for easy reference.

## Important Note:

This game can only be played once. For a rematch, please create a new game-ID by starting over from step 1.

## Future Improvements:

Add a fancy frontend and make the game possible to play online without sending the id by SoMe:

Initially I made Player1 add their name in the first step where the first player creates the game. But I changed this later in the process because I realized that if the game grows and is featured on a site for online games, the id-request will be made when you enter the game and two random people can join the game. Therefor it is crucial that the joinGame function makes it possible for both players to be added to the game in this step.
