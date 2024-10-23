import {
	createGame,
	joinGame,
	playGame,
	getGameState,
} from "../models/gameModel.js"

export const createGameController = (req, res, next) => {
	try {
		const gameId = createGame(req.body.name)
		res.status(201).json({ id: gameId, name: req.body.name })
	} catch (error) {
		next(error)
	}
}

export const joinGameController = (req, res, next) => {
	try {
    const playerName = req.body.name
		joinGame(req.params.id, playerName)
		res.status(200).send(`${playerName} successfully joines the game! Yeay!`)
	} catch (error) {
		next(error)
	}
}

export const playGameController = (req, res, next) => {
	try {
    const {id } = req.params
    const { name, move } = req.body
		playGame(id, name, move)
		res
			.status(200)
			.send(`${name} successfully played ${move}`)
	} catch (error) {
		next(error)
	}
}


export const getGameStateController = (req, res, next) => {
	try {
		const gameState = getGameState(req.params.id)
		res.status(200).json(gameState)
	} catch (error) {
		next(error)
	}
}
