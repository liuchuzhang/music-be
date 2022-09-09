import { exec } from 'child_process'
import { delay } from './utils'
import app from '../../src/app'

const server = app.listen(4001)

export const stopServer = async () => {
  server.close()
}
