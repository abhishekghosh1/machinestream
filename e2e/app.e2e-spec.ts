import { MachineStreamPage } from './app.po';

describe('Machine Stream App', () => {
  let page: MachineStreamPage;

  beforeEach(() => {
    page = new MachineStreamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Machine Health Monitoring');
  });
});
