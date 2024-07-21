import { newArticlePage } from '../pages/newArticlePage';
import { homePage } from '../pages/homePage';
import { settingsPage } from '../pages/settingsPage';
import { faker } from '@faker-js/faker';

describe('Article Creation', () => {
  beforeEach(() => {
    newArticlePage.login();
    newArticlePage.visit();
  });  

  it('The user can successfully create an article by filling in all required fields', function() {
    
    // newArticlePage.visit();
    // homePage.navigateToNewArticle()

    const articleTitle = faker.lorem.sentence();
    const articleDescription = faker.lorem.sentences(2);
    const articleContent = faker.lorem.paragraphs(3);
    const articleTags = 'test,cypress';

    newArticlePage.fillTitle(articleTitle);
    newArticlePage.fillDescription(articleDescription);
    newArticlePage.fillContent(articleContent);
    newArticlePage.fillTags(articleTags);
    newArticlePage.publish();

    cy.wait(1000)
    cy.url().should('contain', '/article');
    cy.get('h1').should('contain', articleTitle);

    // Logout after test
    homePage.navigateToSettings();
    settingsPage.logout();
  });

  it('The user can see the created article in their personal profile', function() {
    // newArticlePage.visit();
    // homePage.navigateToNewArticle()

    const articleTitle = faker.lorem.sentence();
    const articleDescription = faker.lorem.sentences(2);
    const articleContent = faker.lorem.paragraphs(3);

    newArticlePage.fillTitle(articleTitle);
    newArticlePage.fillDescription(articleDescription);
    newArticlePage.fillContent(articleContent);
    newArticlePage.publish();

    cy.url().should('contain', '/article');
    cy.get('h1').should('contain', articleTitle);

    homePage.clickProfileName()
    // cy.contains('')
    cy.contains('My Articles').click();
    cy.contains(articleTitle).should('exist');

    // Logout after test
    homePage.navigateToSettings();
    settingsPage.logout();
  });
});