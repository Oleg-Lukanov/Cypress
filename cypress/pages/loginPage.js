class LoginPage {
  elements = {
    emailInput: () => cy.get('input[placeholder="Email"]'),
    passwordInput: () => cy.get('input[placeholder="Password"]'),
    submitButton: () => cy.get('button').contains('Sign in')
  };

  visit() {
    cy.visit('/login');
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

export const loginPage = new LoginPage();