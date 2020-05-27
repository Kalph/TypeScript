import puppeteer from 'puppeteer'
const fs = require('fs');

async function getFile () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.ytn.co.kr/_cs/_ln_0103_202005271609395005_005.html')
  // const name = await page.$eval('#zone1 > div.article_tit', node => (node as HTMLElement).innerText);
  
  // const name = await page.evaluate(() => {
  //     return (document.querySelector('#zone1 > div.article_tit') as HTMLElement).innerText
  //  })

  const result = await page.evaluate(() => {
    const name = (document.querySelector('#zone1 > div.article_tit')as HTMLElement).innerText
    const time = (document.querySelector('#newsContent > div.extra_info')as HTMLElement).innerText
    const content = (document.querySelector('#CmAdContent > span')as HTMLElement).innerText

    return {name, time, content}
  })

  // evaluate로 가져온 결과는 이렇게 변수에 저장되는걸 볼 수 있음.
  console.log(result);

  fs.writeFile('outputs/async_crawling.json', JSON.stringify(result), function(err:any) {
    if(err) console.log('error', err);
  });
  // 마지막에는 launch한 브라우저를 닫아야함.
  await browser.close()
}

getFile().catch(err => console.error(err))
