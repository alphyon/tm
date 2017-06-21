import { PortalfrontendPage } from './app.po';

describe('portalfrontend App', () => {
  let page: PortalfrontendPage;

  beforeEach(() => {
    page = new PortalfrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
