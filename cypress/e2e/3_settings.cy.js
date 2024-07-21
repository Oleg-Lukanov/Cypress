import { homePage } from '../pages/homePage';
import { settingsPage } from '../pages/settingsPage';
import { newArticlePage } from '../pages/newArticlePage';

describe('User Settings', () => {
  beforeEach(() => {
    newArticlePage.login();
    settingsPage.visit();
  });

  it('The user can log out from the settings page', function() {
    // homePage.navigateToSettings();
    // cy.contains('Settings')
    settingsPage.logout();

    cy.url().should('eq', 'https://conduit.realworld.how/');
  });
});