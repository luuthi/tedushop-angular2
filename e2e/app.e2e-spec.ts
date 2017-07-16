import { TedushopWebsitePage } from './app.po';

describe('tedushop-website App', () => {
  let page: TedushopWebsitePage;

  beforeEach(() => {
    page = new TedushopWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
