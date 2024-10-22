import express from "express"
import expressListEndpoints from "express-list-endpoints"

const router = express.Router()
const {
	createGame,
	joinGame,
	makeMove,
	getGameState,
} = require("../models/gameModel")

//mina routes och endpoints

//route för att se alla endpoints
app.get("/", (req, res) => {
	const endpoints = expressListEndpoints(app)
	res.json(endpoints)
})

//route för att skapa ett spel.
router.post("/", (req, res) => {
	const gameId = createGame(req.body.name)
	res.status(201).json({ id: gameId })
})

//route för att gå med i ett spel
router.post("/:id/join", (req, res) => {
	joinGame(req.params.id, req.body.name)
	res.status(200).send("Player successfully joined the game! Yeay!")
})

//route för att göra sitt drag
router.post("/:id/move", (req, res) => {
	makeMove(req.params.id, req.body.name, req.body.move)
	res.status(200).send("Successful move")
})

//route för att se vem som vann
router.get("/:id", (req, res) => {
	const gameState = getGameState(req.params.id)
	res.status(200).json(gameState)
})

module.exports = router
