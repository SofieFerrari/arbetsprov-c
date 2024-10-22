import { v4 as uuidv4 } from "uuid"

const games = {}

export const createGame = (playerOneName) => {
	const id = uuidv4()
	games[id] = {
		id,
		playerOne: { name: playerOneName, move: null },
		playerTwo: { name: playerTwoName, move: null },
		winner: null,
		gameOver: false,
	}
	return id
}

export const joinGame = (playerTwoName, id) => {
	if (games[id]) {
		games[id].playerTwo.name = playerTwoName
	} else {
		return error.message("Please try again")
	}
}

export const makeMove = (playerName, id, move) => {
	const game = games[id]
	if (game && !game.finished) {
		if (game.playerOne.name === playerName) {
			game.playerOne.move = move
		} else if (game.playerTwo.name === playerName) {
			game.playerTwo.move = move
		}
	} else if (game.playerOne.move && game.playerTwo.move) {
		if (game.playerOne.move === game.playerTwo.move) {
			game.winner = "Tie"
		} else if (
			(game.playerOne.move === "Rock" && game.playerTwo.move === "Scissor") ||
			(game.playerOne.move === "Scissor" && game.playerTwo.move === "Paper") ||
			(game.playerOne.move === "Paper" && game.playerTwo.move === "Rock")
		) {
			game.winner = game.playerOne.name
		} else {
			game.winner = game.playerTwo.name
		}
		game.finished = true
	} else {
		error.error.message("Something went wrong")
	}
}

export const getGameState = (id) => {
	return games[id] || null
}
