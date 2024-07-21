import { registrationPage } from '../pages/registrationPage';
import { homePage } from '../pages/homePage';
import { settingsPage } from '../pages/settingsPage';
import { faker } from '@faker-js/faker';

describe('User Registration', () => {
  it('The user can successfully register by filling in all required fields', () => {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    registrationPage.visit();
    registrationPage.fillUsername(username);
    registrationPage.fillEmail(email);
    registrationPage.fillPassword(password);
    registrationPage.submit();
    cy.wait(1000)
    cy.contains(username).should('be.visible')

    homePage.getProfileName().should('contain', username);
    // expect(homePage.getProfileName()).to.equal(username);
    // Save user data for future tests
    cy.writeFile('cypress/fixtures/user.json', { username, email, password });

    // Logout after test
    homePage.navigateToSettings();
    settingsPage.logout();
  });

  it('The user cannot register with an empty username field', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    registrationPage.visit();
    registrationPage.fillEmail(email);
    registrationPage.fillPassword(password);
    registrationPage.submit();

    cy.get('.error-messages').should('contain', 'username can\'t be blank');
  });

  it('The user cannot register with an invalid email format', () => {
    const username = faker.internet.userName();
    const email = 'invalidemail';
    const password = faker.internet.password();

    registrationPage.visit();
    registrationPage.fillUsername(username);
    registrationPage.fillEmail(email);
    registrationPage.fillPassword(password);
    registrationPage.submit();

    cy.get('.error-messages').should('contain', 'email is invalid');
  });

  it('The user cannot register with a short password', () => {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = '123';

    registrationPage.visit();
    registrationPage.fillUsername(username);
    registrationPage.fillEmail(email);
    registrationPage.fillPassword(password);
    registrationPage.submit();

    cy.get('.error-messages').should('contain', 'password is too short');
  });

  it('The user cannot register with empty fields', () => {
    registrationPage.visit();
    registrationPage.submit();

    cy.get('.error-messages').should('contain', 'username can\'t be blank');
    cy.get('.error-messages').should('contain', 'email can\'t be blank');
    cy.get('.error-messages').should('contain', 'password can\'t be blank');
  });
});