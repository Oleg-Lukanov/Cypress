class SettingsPage {
  elements = {
    logoutButton: () => cy.get('button').contains('Or click here to logout')
  };

  visit() {
    cy.visit('/settings');
  }

  logout() {
    this.elements.logoutButton().click();
  }
}

export const settingsPage = new SettingsPage();