import axios from 'axios'
import { stopServer, startServer } from './helpers/server'

let origin: string

beforeAll(async () => {
  const port = await startServer()
  origin = `http://localhost:${port}`
})

afterAll(() => {
  stopServer()
})

describe('hello', () => {
  it('world', async () => {
    const res = await axios.get(`${origin}/api/hello/world`)
    expect(res.status).toEqual(200)
  })
})
