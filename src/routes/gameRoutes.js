import express from "express"
import {
	createGameController,
	joinGameController,
	playGameController,
	getGameStateController,
} from "../controllers/creatGameControllers.js"

const router = express.Router()

// Route to create game
router.post("/", createGameController)

// Route to join game
router.post("/:id/join", joinGameController)

// Route to play the game by making a move
router.post("/:id/play", playGameController)

// Route to controll who won the game
router.get("/:id", getGameStateController)

export default router
