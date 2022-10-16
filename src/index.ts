import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

app.get('/', (req, res) => res.send('Hello, World!'))
app.listen(port)
