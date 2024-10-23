import express from "express"
import cors from "cors"
import gameRoutes from "./routes/gameRoutes.js"
import displayEndpoints from "./routes/endpointsRoutes.js"
import { handleError } from "./middleware/handleError.js"

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/games", gameRoutes)
app.use("/", displayEndpoints)

app.use(handleError)

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
