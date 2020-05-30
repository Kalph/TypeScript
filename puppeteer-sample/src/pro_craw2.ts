import puppeteer from 'puppeteer'
import { promisify } from 'util'
const fs = require('fs');

function getFile () {
  return puppeteer.launch().then(browser => {
    return browser.newPage().then(page => {
      // 나중을 위해 browser도 같이 반환해줘야함.
      return { page, browser }
    })
  }).then(({ page, browser }) => {
    return page.goto("https://www.ytn.co.kr/_cs/_ln_0103_202005271609395005_005.html"
    ).then(() => {
      return page.evaluate(() => {
        const name = (document.querySelector('#zone1 > div.article_tit')as HTMLElement).innerText
        const time = (document.querySelector('#newsContent > div.extra_info')as HTMLElement).innerText
        const content = (document.querySelector('#CmAdContent > span')as HTMLElement).innerText
    
        return {name, time, content}
      })
    }).then(result => {
      return { result, browser }
    })
  }).then(({ result, browser }) => {
    // Callback 형식의 node.js의 기본 함수를 Promise 형태로 감싸주는 기능입니다.
    // node.js v8부터 지원되기 시작되었습니다. https://nodejs.org/api/util.html#util_util_promisify_original
    const writeFile = promisify(fs.writeFile)
    
    console.log(result)
    return writeFile('outputs/async_crawling.json', JSON.stringify(result)).catch((err:any)=> {
      console.log('error', err)
    })
  }).then(( browser ) => browser.close())
}


getFile().catch(err => console.error(err))
