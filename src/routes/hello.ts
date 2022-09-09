import express, { Response, Request } from 'express'

const router = express.Router()

router.get('/world', (req: Request, res: Response, next) => {
  res.send('Hello World')
})

export default router
