import express from "express"
import {
	createGameController,
	joinGameController,
	playGameController,
	getGameStateController,
} from "../controllers/creatGameControllers.js"

const router = express.Router()

// Route för att skapa ett spel
router.post("/", createGameController)

// Route för att gå med i ett spel
router.post("/:id/join", joinGameController)

// Route för att göra sitt drag
router.post("/:id/play", playGameController)

// Route för att se vem som vann
router.get("/:id", getGameStateController)

export default router
