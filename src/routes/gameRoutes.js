import express from "express"
import {
	createGame,
	joinGame,
	makeMove,
	getGameState,
} from "../models/gameModel.js"

const router = express.Router()

// Route för att skapa ett spel
router.post("/", (req, res) => {
	try {
		const playerOneName = req.body.name
		if (!playerOneName) {
			return res.status(400).send("playerName is required")
		}
		const gameId = createGame(req.body.name)
		res.status(201).json({ id: gameId, name: playerOneName })
	} catch (error) {
		console.error("Error creating game:", error)
		res.status(500).send("Something went wrong while creating the game.")
	}
})

// Route för att gå med i ett spel
router.post("/:id/join", (req, res) => {
	const playerTwoName = req.body.name
	try {
		if (!playerTwoName) {
			return res.status(400).send("Player name is required")
		}
		joinGame(req.params.id, playerTwoName)
		res.status(200).send(`${playerTwoName} successfully joined the game! Yeay!`)
	} catch (error) {
		console.error("Error joining game:", error.message)
		res.status(500).send("Something went wrong while trying to join the game.")
	}
})

// Route för att göra sitt drag
router.post("/:id/move", (req, res) => {
	const { name, move } = req.body
	try {
		if (!name || !move) {
			return res.status(400).send("Both player name and move are required")
		}
		makeMove(name, req.params.id, move)
		res.status(200).send(`You successfully played ${move}`)
	} catch (error) {
		console.error("Error making move:", error.message)
		res.status(500).send("Something went wrong while trying to make a move")
	}
})

// Route för att se vem som vann
router.get("/:id", (req, res) => {
	const gameState = getGameState(req.params.id)
	res.status(200).json(gameState)
})

export default router
