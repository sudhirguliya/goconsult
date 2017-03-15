import { GoconsultPage } from './app.po';

describe('goconsult App', function() {
  let page: GoconsultPage;

  beforeEach(() => {
    page = new GoconsultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
