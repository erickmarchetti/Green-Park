import "reflect-metadata"
import "express-async-errors"
import express, { Request, Response } from "express"
import appRoutes from "./routes"
import errorMiddleware from "./middlewares/errorMiddleware"

const app = express()

app.use(express.json())

appRoutes(app)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World"
  })
})

app.use(errorMiddleware)

export default app
