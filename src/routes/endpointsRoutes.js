import express from "express"
import { displayEndpoints } from "../controllers/endpointsController.js"

const router = express.Router()

router.get("/", displayEndpoints)

export default router
