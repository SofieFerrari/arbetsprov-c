import { v4 as uuidv4 } from "uuid"

const games = {}
const validMoves = ["rock", "paper", "scissors"]

export const createGame = () => {
	const id = uuidv4()
	games[id] = {
		id,
		playerOne: { name: null, move: null },
		playerTwo: { name: null, move: null },
		winner: null,
		gameOver: false,
	}
	return id
}

export const joinGame = (id, playerName) => {
	if (!games[id]) {
		throw new Error("Game not found")
	}
	if (!playerName) {
		throw new Error("Player name is required")
	}
	if (!games[id].playerOne.name) {
		games[id].playerOne.name = playerName
	} else if (!games[id].playerTwo.name) {
		games[id].playerTwo.name = playerName
	} else {
		throw new Error("Game is already full")
	}
}

export const playGame = (id, playerName, move) => {
	const game = games[id]
	if (!game) {
		throw new Error("Game not found")
	}
	if (game.gameOver) {
		throw new Error("Game is already over")
	}

	//controll if move is valid
	if (!validMoves.includes(move)) {
		throw new Error("Invalid move. Please choose rock, paper, or scissors.")
	}

	//controll if player has entered a name and move can be made.
	if (game.playerOne.name === playerName) {
		game.playerOne.move = move
	} else if (game.playerTwo.name === playerName) {
		game.playerTwo.move = move
	} else {
		throw new Error("Player not found in this game")
	}

	if (game.playerOne.move && game.playerTwo.move) {
		if (game.playerOne.move === game.playerTwo.move) {
			game.winner = "Tie"
		} else if (
			(game.playerOne.move === "rock" && game.playerTwo.move === "scissors") ||
			(game.playerOne.move === "scissors" && game.playerTwo.move === "paper") ||
			(game.playerOne.move === "paper" && game.playerTwo.move === "rock")
		) {
			game.winner = game.playerOne.name
		} else {
			game.winner = game.playerTwo.name
		}
		game.gameOver = true
	} else {
		throw new Error("Game not found")
	}
}

export const getGameState = (id) => {
	return games[id] || null
}
