import express from "express"
import { displayEndpoints } from "../controllers/endpointsController.js"

//made function to be able to pass app as argument to server
const router = (app) => {
	const expressRouter = express.Router()

	//Route to display all endpoints
	expressRouter.get("/", displayEndpoints(app))

	return expressRouter
}

export default router
