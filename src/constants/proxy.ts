export interface ProxyItem {
  prefix: string
  target: string
  domain?: string
}

export const proxyList: ProxyItem[] = [
  {
    prefix: '/uyqq',
    target: 'https://u.y.qq.com'
  },
  {
    prefix: '/cyqq',
    target: 'https://c.y.qq.com'
  },
  {
    prefix: '/music163',
    target: 'https://music.163.com'
  },
  {
    prefix: '/kuwo',
    target: 'https://www.kuwo.cn'
  },
  {
    prefix: '/kwroot/root',
    target: 'https://www.kuwo.cn',
    domain: 'www.kuwo.cn'
  },
  {
    prefix: '/songsearchkugou',
    target: 'https://songsearch.kugou.com'
  },
  {
    prefix: '/apibilibili',
    target: 'https://api.bilibili.com'
  },
  {
    prefix: '/jadeitemigu',
    target: 'https://jadeite.migu.cn'
  },
  {
    prefix: '/interface3',
    target: 'https://interface3.music.163.com'
  },
  {
    prefix: '/iyqq',
    target: 'https://i.y.qq.com'
  },
  {
    prefix: '/antiserverkuwo',
    target: 'https://antiserver.kuwo.cn'
  },
  {
    prefix: '/appcnfmigu',
    target: 'https://app.c.nf.migu.cn'
  },
  {
    prefix: '/wwwapikugou',
    target: 'https://wwwapi.kugou.com'
  }
]
