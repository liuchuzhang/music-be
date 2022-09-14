import * as http from 'http'
import app from '../../src/app'

let server: http.Server

export const startServer = async () => {
  const port = 4001
  server = app.listen(port)
  return port
}

export const stopServer = () => {
  server?.close()
}
