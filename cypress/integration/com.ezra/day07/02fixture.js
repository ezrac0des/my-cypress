describe('Paylinn Bank', () => {
  //? used before to get data from creds.json
  before(function () {
    //* fixture('name') -> gets the file with the given name under the fixtures folder
    cy.fixture('creds').then(function (data) {
      //? data from creds file = data created in the parameter 
      this.data = data;
    });
  });

  //? function() can be used instead of ()=> 
  it('paylinn login test', function() {
    cy.visit('https://www.paylinn.com/');

    cy.contains('Hello').click();

    //? this.data.nameOfTheVariable
    cy
    .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .type(this.data.username);

    //* should('have.value', 'text') -> checks if the element has the given text as value
    cy
    .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .should('have.value', 'User');

    cy
    .get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .type(this.data.password);

    //* should('have.attr', 'attributeName', 'text') -> checks if the element has the given text as the given attribute's value
    cy
    .get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    .should('have.attr', 'value', this.data.password);

    cy.get('.MuiButtonBase-root').click();

    //* should('contain.text', 'text') -> asserts the element contains the given text
    cy
    .get('.header__nav > :nth-child(1) > .header__lineOne')
    .should('contain.text', 'Welcome');

    //* and() -> used after should to chain assertions
    cy
    .get('.header__nav')
    .should('contain.text', 'Welcome')
    .and('contain.text', 'React')
    .and('contain.text', 'Logout')
    .and('contain.text', this.data.username);

  });
});
