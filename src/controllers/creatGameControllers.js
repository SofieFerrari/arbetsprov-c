import {
	createGame,
	joinGame,
	playGame,
	getGameState,
} from "../models/gameModel.js"

const convertInput = (input) => {
	return input.toLowerCase()
}

//Controller to create new game
export const createGameController = (req, res, next) => {
	try {
		const gameId = createGame()
		res.status(201).json({ id: gameId })
	} catch (error) {
		error.status = 400
		error.message = "Failed to create game"
		next(error)
	}
}

//Controller to join game, for both players
export const joinGameController = (req, res, next) => {
	try {
		const playerName = convertInput(req.body.name)
		joinGame(req.params.id, playerName)
		res.status(200).send(`${playerName} successfully joined the game! Yeay!`)
	} catch (error) {
		if (error.message === "Game not found") {
			error.status = 404
		} else if (error.message === "Game is already full") {
			error.status = 400
		} else {
			error.status = 500
		}
		next(error)
	}
}

//Controller to play game
export const playGameController = (req, res, next) => {
	try {
		const { id } = req.params
		const name = convertInput(req.body.name)
		const move = convertInput(req.body.move)

		if (!name || !move) {
			const error = new Error("Name and move is required")
			error.status = 400
			return next(error)
		}

		playGame(id, name, move)
		res.status(200).send(`${name} successfully played ${move}`)
	} catch (error) {
		error.status = 400
		error.message = "Could not perform the move"
		next(error)
	}
}

//Controller to check who won
export const getGameStateController = (req, res, next) => {
	try {
		const gameState = getGameState(req.params.id)
		res.status(200).json(gameState)
	} catch (error) {
		error.status = 404
		error.message = "Game not found. Please check the games ID"
		next(error)
	}
}
