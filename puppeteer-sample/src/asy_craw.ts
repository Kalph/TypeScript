import puppeteer from 'puppeteer'
const fs = require('fs');

async function getFile () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://github.com/puppeteer/puppeteer/blob/master/README.md')
  const result = await page.evaluate(() => {
    // document.querySelector("span.lh-default.v-align-middle")가 undefined면 .innerText도 undefined임.
    const lastCommitMessage = (document.querySelector(
      "span.lh-default.v-align-middle"
    ) as HTMLSpanElement)?.innerText
    // document.querySelector(".markdown-body.entry-content")가 undefined면 .innerHTML도 undefined임.
    const readme = document.querySelector(".markdown-body.entry-content")?.innerHTML
    
    return { lastCommitMessage, readme }
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
