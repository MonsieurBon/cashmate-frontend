import 'jasmine';
import 'jasminewd2';
import { AppPage } from './app.po';

describe('cashmate-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home');
  });
});
