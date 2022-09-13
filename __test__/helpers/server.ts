import portfinder from 'portfinder'
import * as http from 'http'
import { delay } from './utils'
import app from '../../src/app'

let server: http.Server

export const startServer = async () => {
  await delay(1000)
  const port = await portfinder.getPortPromise({ port: 4001 })
  server = app.listen(port)
  return port
}

export const stopServer = async () => {
  server?.close()
}
