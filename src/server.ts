import address from 'address'
import app from './app'

app.listen(4001)

console.log(`server start on http://${address.ip()}:4001`)
