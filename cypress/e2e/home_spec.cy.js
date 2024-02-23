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

  it('Select colour', () => {
    cy.get('#favcolor').invoke('val', '#000000');
    cy.get('.btn').click()
    cy.url().should('include','&favcolor=%23000000') 
  })

  it('Date', () => {
    cy.get('#day').type('1999-12-01');
    cy.get('.btn').click()
    cy.url().should('include','&day=1999-12-01') 
  })

  it('Range value scroller', () => {
    cy.get('#a').invoke('val', '55').trigger('input');
    cy.get('.btn').click()
    cy.url().should('include','&a=55') 
  })

  it('File', () => {
    cy.get('input[type=file]').selectFile('cypress/fixtures/test_file.txt')
    cy.get('.btn').click()
    cy.url().should('include', '&myfile=test_file.txt')
  })

  it('Range value input', () => {
    cy.get('#quantity').type(3);
    cy.get('.btn').click()
    cy.url().should('include', '&quantity=3')
  })

  it('Long text', () => {
    const text = 'test text '.repeat(50)
    cy.get('textarea[name="message"]').clear().type(text)
    cy.get('.btn').click()
    cy.url().should('include', `&message=${'test+text+'.repeat(50)}`)
  })

})

describe('Text after Layout 2', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Text', () => {
    cy.get('.main > :nth-child(4)').should('have.text', 'Some text..')
    cy.get('.main > :nth-child(5)').should(($p) => {
      const text = $p.text()
      expect(text).to.include(' tempor incididunt ut labore et')
    })
  })
})

describe('Layout 3', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Table date', () => {
    cy.get('.main > h5').should('have.text', 'Title description, Sep 2, 2017')
  })

  it('Table header', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(5)').should('have.text', 'Occupation')
  })
})

describe('Footer', () => {
  
})