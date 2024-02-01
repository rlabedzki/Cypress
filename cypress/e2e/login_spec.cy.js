describe('Home test', () => {
    beforeEach(() => {
        cy.request('GET', 'https://trytestingthis.netlify.app/login.html?uname=test&pwd=test')
        cy.visit('https://trytestingthis.netlify.app/login.html?uname=test&pwd=test')
    })

    it('Login', () => {
        cy.get('h2').should('have.text','Login Successful :) ')
    })
})