import express from "express"
import { displayEndpoints } from "../controllers/endpointsController.js"

const router = express.Router()

//Route to display all endpoints
router.get("/", displayEndpoints)

export default router
