import {commonParams, options} from 'api/config'
import jsonp from 'common/js/jsonp'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    g_tk: 5381,
    format: 'jsonp'
  })
  return jsonp(url, data, options)
}

export function getSingerDetail(singId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    singermid: singId,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 5381
  })
  return jsonp(url, data, options)
}

export function getSongPlay(songmid) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
  const callBack = 'MusicJsonCallBack' + (Math.random() + '').replace('0.', '')
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 1,
    cid: 205361747,
    callback: callBack,
    uin: 0,
    songmid: songmid,
    filename: `C400${songmid}.m4a`,
    guid: 9188381060
  })
  const option = {param: 'jsonpCallback', name: callBack}
  return jsonp(url, data, option)
}
