import express from 'express'
import { proxy, hello } from './routes'

const app = express()

app.use('/api', proxy)
app.use('/api/hello', hello)

export default app
