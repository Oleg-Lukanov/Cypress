class HomePage {
  elements = {
    // profileName: () => cy.get('a.nav-link.active .user-pic'),
    profileName: () => cy.get(':nth-child(4) > .nav-link'),
    newArticleLink: () => cy.get('.nav-link').contains('New Article'),
    settingsLink: () => cy.get('.nav-link').contains('Settings')
  };

  getProfileName() {
    // return this.elements.profileName().invoke('text').then((text) => text.trim());
    return this.elements.profileName().invoke('attr', 'href')
              .then((href) => href.split('/').pop());
  }

  clickProfileName() {
    // return this.elements.profileName().invoke('text').then((text) => text.trim());
    return this.elements.profileName().click();
  }

  navigateToNewArticle() {
    this.elements.newArticleLink().click();
  }

  navigateToSettings() {
    this.elements.settingsLink().click();
  }
}

export const homePage = new HomePage();