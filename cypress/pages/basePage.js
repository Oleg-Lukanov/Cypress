export default class BasePage {
  login() {
    cy.fixture('user.json').as('user');
  
    cy.get('@user').then((user) => {
      cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          user: {
            email: user.email,
            password: user.password
          }
        }
      }).then((response) => {        
            window.localStorage.setItem('token', response.body.user.token);
            return response.body.user.token;  
        });
    });
  }  
}
