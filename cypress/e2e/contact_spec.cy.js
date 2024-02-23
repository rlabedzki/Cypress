describe('Contact Test', () => {
    beforeEach(() => {
        cy.visit('https://trytestingthis.netlify.app/contact')
    })

    it('Login', () => {
        cy.get('h2').should('have.text','Login Successful :) ')
    })
})