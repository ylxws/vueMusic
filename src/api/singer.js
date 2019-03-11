import axios from 'axios'
// import jsonp from 'common/js/jsonp'
// import { commonParams, options } from './config'
import { commonParams } from './config'

export function getSingerList(index) {
  // const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  const url = '/api/getSingerList'

  const data = Object.assign({}, commonParams, {
    // '-': 'getUCGI9499417720287104',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    format: 'json',
    data: {'comm': {'ct': 24, 'cv': 0}, 'singerList': {'module': 'Music.SingerListServer', 'method': 'get_singer_list', 'param': {'area': -100, 'sex': -100, 'genre': -100, 'index': index, 'sin': 0, 'cur_page': 1}}}
  })

  return axios.get(url, {params: data}).then(res => {
    return Promise.resolve(res.data)
  })
  // return jsonp(url, data, options)
}
