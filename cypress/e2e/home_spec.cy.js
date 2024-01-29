describe('Home test', () => {
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
})

describe('Body left test', () => {
  beforeEach(()=>{
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Button', ()=>{
    cy.get('.side').should('contain','This is your layout one')
    cy.get('.pop-up-alert > button').click()
    cy.get('.pop-up-alert > #demo').should('have.text', 'You Pressed the OK Button!')
  })

  it('Hover tooltip', ()=>{
      //needs addional library, only works on chomium
    cy.get('.tooltip').realHover();
    cy.get('.tooltiptext').should('not.have.css', 'visibility', 'hidden')
  })

  it('Photo', ()=>{
    cy.get('.fakeimg').should('be.visible')
    cy.get('.side > :nth-child(6)').should('contain.text', 'This is your description of the photo')
  
  })

  it('Foody Text', ()=>{
      cy.get('.side > :nth-child(9)').should('contain.text', '🥞 🥡🥙🥨🥠🥧')
  })

  it('Double click', ()=>{
    cy.get('[ondblclick="myFunction()"]').dblclick()
      .then(() => {
        cy.get('.pop-up-alert > #demo').should('contain.text', 'Your Sample Double Click worked!')
      })
  })
})