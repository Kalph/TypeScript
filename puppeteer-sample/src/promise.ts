import puppeteer from 'puppeteer'

function getFile () {
  return puppeteer.launch().then(browser => {
    return browser.newPage().then(page => {
      // 나중을 위해 browser도 같이 반환해줘야함.
      return { page, browser }
    })
  }).then(({ page, browser }) => {
    return page.goto(
      "https://github.com/puppeteer/puppeteer/blob/master/README.md"
    ).then(() => {
      return page.evaluate(() => {
        // 마지막 커밋 메세지를 가져옴
        // document.querySelector("span.lh-default.v-align-middle")가 undefined면 .innerText도 undefined임.
        const lastCommitMessage = (document.querySelector("span.lh-default.v-align-middle") as HTMLSpanElement)?.innerText

        // Markdown body의 내용 html을 가져옴
        // document.querySelector(".markdown-body.entry-content")가 undefined면 .innerHTML도 undefined임.
        const readme = document.querySelector(".markdown-body.entry-content")?.innerHTML

        return { lastCommitMessage, readme }
      })
    }).then(result => {
      return { result, browser }
    })
  }).then(({ result, browser }) => {
    console.log(result)
    return browser.close()
  })
}

getFile().catch(err => console.error(err))
