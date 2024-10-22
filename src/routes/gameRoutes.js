import express from "express"
import expressListEndpoints from "express-list-endpoints"
import {
	createGame,
	joinGame,
	makeMove,
	getGameState,
} from "../models/gameModel.js"

const router = express.Router()

// Route för att se alla endpoints
router.get("/", (req, res) => {
	const endpoints = expressListEndpoints(router)
	res.json(endpoints)
})

// Route för att skapa ett spel
router.post("/", (req, res) => {
	const gameId = createGame(req.body.name)
	res.status(201).json({ id: gameId })
})

// Route för att gå med i ett spel
router.post("/:id/join", (req, res) => {
	joinGame(req.params.id, req.body.name)
	res.status(200).send("Player successfully joined the game! Yeay!")
})

// Route för att göra sitt drag
router.post("/:id/move", (req, res) => {
	makeMove(req.params.id, req.body.name, req.body.move)
	res.status(200).send("Successful move")
})

// Route för att se vem som vann
router.get("/:id", (req, res) => {
	const gameState = getGameState(req.params.id)
	res.status(200).json(gameState)
})

export default router
