import { AngVmlPage } from './app.po';

describe('ang-vml App', function() {
  let page: AngVmlPage;

  beforeEach(() => {
    page = new AngVmlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
