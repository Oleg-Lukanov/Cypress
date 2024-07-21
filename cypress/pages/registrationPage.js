class RegistrationPage {
  elements = {
    usernameInput: () => cy.get('input[placeholder="Username"]'),
    emailInput: () => cy.get('input[placeholder="Email"]'),
    passwordInput: () => cy.get('input[placeholder="Password"]'),
    submitButton: () => cy.get('button').contains('Sign up')
  };

  visit() {
    cy.visit('/register');
  }

  fillUsername(username) {
    this.elements.usernameInput().type(username);
  }

  fillEmail(email) {
    this.elements.emailInput().type(email);
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }

  submit() {
    this.elements.submitButton().click();
  }
}

export const registrationPage = new RegistrationPage();