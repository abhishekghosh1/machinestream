import { browser, by, element } from 'protractor';

export class MachineStreamPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('panel-heading')).getText();
  }
}
