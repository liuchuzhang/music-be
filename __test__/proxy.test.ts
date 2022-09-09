import axios from 'axios'
import { stopServer } from './helpers/server'

afterAll(() => {
  stopServer()
})

describe('proxy', () => {
  it('kuwo', async () => {
    const res = await axios.get('http://localhost:4001/api/kuwo')
    expect(res.status).toEqual(200)
  })

  it('163', async () => {
    const res = await axios.get('http://localhost:4001/api/music163/api/artist/10559')
    expect(res.status).toEqual(200)
  })

  it('migu', async () => {
    const res = await axios.get('http://localhost:4001/api/appcnfmigu/MIGUM3.0/v1.0/template/rank-list/release?dataVersion=1616469593718&templateVersion=9')
    expect(res.status).toEqual(200)
  })

  it('migu', async () => {
    const res = await axios.get('http://localhost:4001/api/cyqq/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&uin=0&needNewCode=1&platform=h5')
    expect(res.status).toEqual(200)
  })
})
