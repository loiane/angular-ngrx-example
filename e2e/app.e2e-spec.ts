import { AngularNgrx4ExamplePage } from './app.po';

describe('angular-ngrx4-example App', () => {
  let page: AngularNgrx4ExamplePage;

  beforeEach(() => {
    page = new AngularNgrx4ExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
