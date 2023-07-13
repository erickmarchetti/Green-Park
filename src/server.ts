import app from "./app"
import AppDataSource from "./data-source"
import "dotenv/config"

async function init() {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!")

      const PORT = process.env.PORT || 8000

      app.listen(PORT, () => {
        console.log("The server is running on the port " + PORT)
      })
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    })
}
init()
