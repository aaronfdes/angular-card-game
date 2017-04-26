import { AngularCardGamePage } from './app.po';

describe('angular-card-game App', () => {
  let page: AngularCardGamePage;

  beforeEach(() => {
    page = new AngularCardGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
