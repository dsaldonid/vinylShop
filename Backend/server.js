const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const serviceRoutes = require("./routes/service")

const app = express()

app.use(cors())

app.use(express.json())

app.use(morgan("tiny"))

app.use("/service",serviceRoutes)

/** Generic error handler; anything unhandled goes here. */
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message
  
    return res.status(status).json({
      error: { message, status },
    })
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  })