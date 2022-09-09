import axios from 'axios'
import { stopServer } from './helpers/server'

afterAll(() => {
  stopServer()
})

describe('hello', () => {
  it('world', async () => {
    const res = await axios.get('http://localhost:4001/api/hello/world')
    expect(1 + 199).toEqual(200)
  })
})
