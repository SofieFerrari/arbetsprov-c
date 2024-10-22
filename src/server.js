import express from "express"
import cors from "cors"
import expressListEndpoints from "express-list-endpoints"
import gameRoutes from "./routes/gameRoutes.js"

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/games", gameRoutes)

app.get("/", (req, res) => {
	const endpoints = expressListEndpoints(app)
	res.json(endpoints)
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
