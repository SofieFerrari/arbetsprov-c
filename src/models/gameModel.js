import { v4 as uuidv4 } from "uuid"

const games = {}

export const createGame = (playerOneName) => {
	const id = uuidv4()
	games[id] = {
		id,
		playerOne: { name: playerOneName, move: null },
		playerTwo: { name: null, move: null },
		winner: null,
		gameOver: false,
	}
	return id
}

export const joinGame = (id, playerTwoName) => {
	console.log(`Trying to join game for game ID: ${id} `)
	if (!games[id]) {
		throw new Error("Game not found")
	}
	if (!playerTwoName) {
		throw new Error("Player name is required")
	}
	games[id].playerTwo.name = playerTwoName
}

export const makeMove = (playerName, id, move) => {
	const game = games[id]
	if (game && !game.gameOver) {
		if (game.playerOne.name === playerName) {
			game.playerOne.move = move
		} else if (game.playerTwo.name === playerName) {
			game.playerTwo.move = move
		}

		// const validMoves = ["Rock", "Paper", "Scissor"]
		// if (!validMoves.includes(move)) {
		// 	throw new Error("Invalid move. Please choose Rock, Paper, or Scissor.")
		// }

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
