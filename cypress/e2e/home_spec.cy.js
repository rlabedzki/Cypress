describe('Header test', () => {
  beforeEach(()=>{
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Header', ()=>{
    cy.get('h1').should('have.text','Your Website to practice Automation Testing')
  })

  it('Navigation', ()=>{
    cy.get('.navbar').children().as('navi')
    cy.get('@navi').should('have.length', 2)
    cy.get('@navi').first().should('have.text', 'Contact')
    cy.get('@navi').first().next().should('have.text', 'Home')
  })

  it('Body', ()=>{

  })

  it('Footer', ()=>{
    
  })

})