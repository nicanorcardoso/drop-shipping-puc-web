import { MeatPage } from './app.po';

describe('ds-web App', function() {
  let page: MeatPage;

  beforeEach(() => {
    page = new MeatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
