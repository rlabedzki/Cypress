describe('Header test', () => {
  it('Header is correct', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('h1').should('have.text','Your Website to practice Automation Testing')
  })
})