const { afterEach } = require("mocha")

describe('Home test', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Header', () => {
    cy.get('h1').should('have.text','Your Website to practice Automation Testing')
  })

  it('Navigation', () => {
    cy.get('.navbar').children().as('navi')
    cy.get('@navi').should('have.length', 2)
    cy.get('@navi').first().should('have.text', 'Contact')
    cy.get('@navi').first().next().should('have.text', 'Home')
  })
})

describe('Layout one', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Button', () => {
    cy.get('.side').should('contain','This is your layout one')
    cy.get('.pop-up-alert > button').click()
    cy.get('.pop-up-alert > #demo').should('have.text', 'You Pressed the OK Button!')
  })

  it('Hover tooltip', () => {
      //needs addional library, only works on chomium
    cy.get('.tooltip').realHover();
    cy.get('.tooltiptext').should('not.have.css', 'visibility', 'hidden')
  })

  it('Photo', () => {
    cy.get('.fakeimg').should('be.visible')
    cy.get('.side > :nth-child(6)').should('contain.text', 'This is your description of the photo')
  
  })

  it('Foody Text', () => {
      cy.get('.side > :nth-child(9)').should('contain.text', '🥞 🥡🥙🥨🥠🥧')
  })

  it('Double click', () => {
    cy.get('[ondblclick="myFunction()"]').dblclick()
      .then(() => {
        cy.get('.pop-up-alert > #demo').should('contain.text', 'Your Sample Double Click worked!')
      })
  })

  it('Drag pizza', () => {
    //needs addional library
    cy.get('#drag1').drag('#div1')
      .then(() => {
        cy.get('#div1').children('img').should('have.length', 1)
      })
  })

  it('Login empty', () => {
    cy.get('[type="submit"]').click()
    cy.on('window:confirm',(confirmMessage)=>{
      expect(confirmMessage).to.equal('Wrong Credentials! Try again!');
    })
  })

  it('Login wrong', () => {
    cy.login('a', 'a')
    cy.on('window:confirm',(confirmMessage)=>{
      expect(confirmMessage).to.equal('Wrong Credentials! Try again!')
    })
  })

  it('Login correct', () => {
    cy.login('test', 'test')
    cy.get('h2').should('have.text','Login Successful :) ')
  })
})


describe('Layout two', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Empty form', () => {
    cy.get('.btn').click()
    cy.url().should('include','?fname=&lname=&option=option&Options=&favcolor=%2300ced1&day=&a=50&myfile=&quantity=&message=The+cat+was+playing+in+the+garden.')
  })
  
  it('Select gender', () => {
    cy.get('#female').click()
    cy.get('.btn').click()
    cy.url().should('include','&gender=female')
  })

  it('Select one option', () => {
    cy.get('#option').select('Option 2')
    cy.get('.btn').click()
    cy.url().should('include','&option=option+2')
  })

  it('Select multiple options', () => {
    cy.get('[name="option2"]').click()
    cy.get('[name="option3"]').click()
    cy.get('.btn').click()
  })


})