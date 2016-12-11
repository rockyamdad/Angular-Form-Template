import { AngularFormTemplatePage } from './app.po';

describe('angular-form-template App', function() {
  let page: AngularFormTemplatePage;

  beforeEach(() => {
    page = new AngularFormTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
