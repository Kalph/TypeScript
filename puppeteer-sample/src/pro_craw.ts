import puppeteer from 'puppeteer'
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
    console.log(result)
    fs.writeFile('outputs/async_crawling.json', JSON.stringify(result), function(err:any) {
      if(err) console.log('error', err);
    });
    return browser.close()
  })
}

getFile().catch(err => console.error(err))
