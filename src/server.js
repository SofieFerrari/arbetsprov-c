import express from "express"
import cors from "cors"


const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

//import gameRoutes here
const gameRoutes = require("./routes/gameRoutes")
app.use("/api/games", gameRoutes)

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
