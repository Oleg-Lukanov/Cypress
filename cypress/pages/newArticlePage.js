class NewArticlePage {
  elements = {
    titleInput: () => cy.get('input[placeholder="Article Title"]'),
    descriptionInput: () => cy.get('input[placeholder="What\'s this article about?"]'),
    contentInput: () => cy.get('textarea[placeholder="Write your article (in markdown)"]'),
    tagsInput: () => cy.get('input[placeholder="Enter tags"]'),
    publishButton: () => cy.contains('button','Publish Article')
  };

  visit() {
    cy.visit('/editor');
  }

  login() {
    cy.fixture('user.json').as('userData');
  
    cy.get('@userData').then((userData) => {
      cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          user: {
            email: userData.email,
            password: userData.password
          }
        }
      }).then((response) => {        
            window.localStorage.setItem('token', response.body.user.token);
        });
    });
  }

  fillTitle(title) {
    this.elements.titleInput().type(title);
  }

  fillDescription(description) {
    this.elements.descriptionInput().type(description);
  }

  fillContent(content) {
    this.elements.contentInput().type(content);
  }

  fillTags(tags) {
    this.elements.tagsInput().type(tags);
  }

  publish() {
    this.elements.publishButton().click();
  }
}

export const newArticlePage = new NewArticlePage();