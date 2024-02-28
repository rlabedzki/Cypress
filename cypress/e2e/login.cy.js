describe('Home test', () => {
    /*let userToken
    
    before(function () {
        cy.request({
          method: 'POST',
          url: 'url', 
          body: {
            username: 'username',
            password: 'password'
          }
        }).then((resp) => {
          expect(resp.body).to.have.property('token');
          userToken = resp.body.token;
        })
    })

    beforeEach(function () {
        cy.setCookie('token', this.userToken)
        cy.visit('/')
    })*/

    beforeEach(() => {
        cy.request('GET', 'https://trytestingthis.netlify.app/login.html?uname=test&pwd=test')
        cy.visit('https://trytestingthis.netlify.app/login.html?uname=test&pwd=test')
    })

    it('Login', () => {
        cy.get('h2').should('have.text','Login Successful :) ')
    })
})