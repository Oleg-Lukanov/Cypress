import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';
import { settingsPage } from '../pages/settingsPage';

describe('User Login', () => {
  beforeEach(() => {
    cy.fixture('user.json').as('user');
  });

  it('The user can successfully log in with valid credentials', function() {
    loginPage.visit();
    loginPage.fillEmail(this.user.email);
    loginPage.fillPassword(this.user.password);
    loginPage.submit();

    homePage.getProfileName().should('contain', this.user.username);

    // Logout after test
    homePage.navigateToSettings();
    settingsPage.logout();
  });

  it('The user cannot log in with an empty email field', function() {
    loginPage.visit();
    loginPage.fillPassword(this.user.password);
    loginPage.submit();

    cy.get('.error-messages').should('contain', 'email can\'t be blank');
  });

  it('The user cannot log in with an empty password field', function() {
    loginPage.visit();
    loginPage.fillEmail(this.user.email);
    loginPage.submit();

    cy.get('.error-messages').should('contain', 'password can\'t be blank');
  });

  it('The user cannot log in with empty fields', function() {
    loginPage.visit();
    loginPage.submit();

    cy.get('.error-messages').should('contain', 'email can\'t be blank');
    cy.get('.error-messages').should('contain', 'password can\'t be blank');
  });
});