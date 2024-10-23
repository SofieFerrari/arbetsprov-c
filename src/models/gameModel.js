import { v4 as uuidv4 } from "uuid"

const games = {}
const validMoves = ["Rock", "Paper", "Scissor"]

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
		console.log(`Game with ID ${id} not found`)
		throw new Error("Game not found")
	}
	if (game.gameOver) {
		throw new Error("Game is already over")
	}

	if (game && !game.gameOver) {
		if (game.playerOne.name === playerName) {
			game.playerOne.move = move
		} else if (game.playerTwo.name === playerName) {
			game.playerTwo.move = move
		}

		if (!validMoves.includes(move)) {
			throw new Error("Invalid move. Please choose Rock, Paper, or Scissor.")
		}

		if (game.playerOne.move && game.playerTwo.move) {
			if (game.playerOne.move === game.playerTwo.move) {
				game.winner = "Tie"
			} else if (
				(game.playerOne.move === "Rock" && game.playerTwo.move === "Scissor") ||
				(game.playerOne.move === "Scissor" &&
					game.playerTwo.move === "Paper") ||
				(game.playerOne.move === "Paper" && game.playerTwo.move === "Rock")
			) {
				game.winner = game.playerOne.name
			} else {
				game.winner = game.playerTwo.name
			}
			game.gameOver = true
		}
	} else {
		throw new Error("Game not found")
	}
}

export const getGameState = (id) => {
	return games[id] || null
}
