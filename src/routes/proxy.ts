import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { ProxyItem, proxyList } from '../constants'

const router = express.Router()

const getKuwoProxy = (): ProxyItem[] => {
  const array26 = Array(26).fill(null)
  return array26.map((_, first) => array26.map((_, second) => {
    const keyword = String.fromCharCode(97 + first) + String.fromCharCode(97 + second)

    return {
      prefix: `/${keyword}sycdnkuwo`,
      target: `http://${keyword}.sycdn.kuwo.cn`
    }
  })).flat()
}

proxyList.concat(getKuwoProxy()).forEach(item => {
  const host = item.target.replace(/^http[s]?:\/\//, '')

  router.use(
    item.prefix,
    createProxyMiddleware({
      target: item.target,
      changeOrigin: true,
      pathRewrite: {
        [`^/api${item.prefix}`]: ''
      },
      cookieDomainRewrite: {
        '*': item.domain || ''
      },
      cookiePathRewrite: {
        '*': '/'
      },
      headers: {
        Referer: item.target,
        Host: host,
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
      }
    })
  )
})

export default router
