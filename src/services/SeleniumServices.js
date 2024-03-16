import {Builder, Browser, until, By} from 'selenium-webdriver';

export default class SeleniumServices {
  constructor() {
    this.driver = null;
  }
  async initDriver(browser = Browser.CHROME) {
    this.driver = await new Builder().forBrowser(browser).build();
  }
  async getSiteByUrl(url) {
    await this.driver.get(url);
    await this.driver.wait(until.elementLocated(By.tagName('body')));
  }
  async scrollToBottom() {
    await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    await this.driver.sleep(2000);
  }
  async initialize() {
    try {
      await this.initDriver(Browser.CHROME);
      await this.getSiteByUrl('https://willtiptop.com');
      await this.scrollToBottom();
      const images = await this.driver.findElements(By.tagName('img'));
      return await Promise.all([...images].map(image => image.getAttribute('src')));
    } catch (e) {
      console.log({e});
    } finally {
      await this.driver.quit();
    }
  }
}
