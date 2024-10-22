# Backend Sample of Work - Rock, Paper Scissor Game

## The Project:

In this project I created a RESTful API for the game of Rock, Paper, Scissor.
Player one requests a game-ID and Player 2 can be added to the game by using this ID. The game can only be played once, a win is counted as a win, and so is also a tie.
Create a new ID to play a new game.

## Tecnology Stack:

Node.js
Express
CORS
@babel
UUID

## Installation & Setup DOWNLOAD:

1. Download the zip file and extraxt it to your desired location.
2. Thought the terminal, navigate to the project directory:
   cd path/to/your/arbetsprov

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
Description: This endpoint allows Player 1 to create a new game. The request should include the player’s name in the request body.

### 2. Join a Game
Path: /api/games/:id/join
Method: POST
Description: This endpoint allows Player 2 to join an existing game. The game ID should be specified in the URL path, and the player’s name should be included in the request body.

### 3. Make a Move
Path: /api/games/:id/move
Method: POST
Description: This endpoint allows players to make their moves in the game. The game ID should be specified in the URL path, and the request body should include the player's name and the move they wish to make.

{
    "name": "Player1",
    "move": "Rock"
}

### 4. Get Game State
Path: /api/games/:id
Method: GET
Description: This endpoint retrieves the current state of the game, including the moves made by both players and the winner (if the game is over). The game ID should be specified in the URL path.

### 5. Documentation of All Endpoints
Path: /
Method: GET
Description: This endpoint returns a list of all available API endpoints for easy reference.


## Note that this game can only be played once. For a rematch, please create a new game-ID.

# View it live:
