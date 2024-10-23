# Backend Sample of Work - Rock, Paper Scissor Game

## The Project:

In this project I created a RESTful API for the game of Rock, Paper, Scissor.
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

### To start the application in production mode run:

npm start

## API Endpoints

This API exposed the following endpoints:

### 1. Create a Game

Path: /api/games
Method: POST
Description: This endpoint returns a game ID

Ex Response:
{
"id": "random-id"
}

### 2. Join a Game

Path: /api/games/:id/join
Method: POST
Description: This endpoint allows Players 1 and 2 to join an the game. The game ID should be specified in the URL path, and each players name should be included in the request body.

Ex Request:
{
"name": "Player1"
}

### 3. Make a Move

Path: /api/games/:id/play
Method: POST
Description: This endpoint allows players to make their moves in the game. The game ID should be specified in the URL path, and the request body should include the player's name and the move they wish to make.

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

This game can only be played once. For a rematch, please create a new game-ID.

## Future Improvements:
