import { DocumentPlannerPage } from './app.po';

describe('document-planner App', function() {
  let page: DocumentPlannerPage;

  beforeEach(() => {
    page = new DocumentPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
