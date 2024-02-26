describe('Contact Test', () => {
    beforeEach(() => {
        cy.visit('https://trytestingthis.netlify.app/contact')
    })
    
    it('Thank you message', () => {
        cy.get('.side > h2').should('have.text', 'Thank you for using this Website :)  ')
    })
    
    it('Links', () => {
        cy.get('.side > :nth-child(2) > a').should("have.attr", "href", "https://github.com/oviyak/Testing")
        cy.get('.side > :nth-child(3) > a').should("have.attr", "href", "https://www.linkedin.com/in/oviyak/")
        cy.get('.footer > :nth-child(3) > a').should("have.attr", "href", "https://github.com/oviyak/Testing")
        cy.get(':nth-child(4) > a').should("have.attr", "href", "https://www.linkedin.com/in/oviyak/")
    })
})