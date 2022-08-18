describe('Paylinn Bank', () => {
  it('paylinn login test', () => {
    cy.visit('https://www.paylinn.com/');

    cy.contains('Hello').click();

    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User');

    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user');

    cy.get('.MuiButtonBase-root').click();

    //* should('contain.text', 'text') -> asserts the element contains the given text
    cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text', 'Welcome');
  });
});
