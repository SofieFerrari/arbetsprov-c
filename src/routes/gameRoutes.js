import express from "express"

const router = express.Router()
const { createGame, joinGame, makeMove, getGameState } = require("../models/gameModel")
