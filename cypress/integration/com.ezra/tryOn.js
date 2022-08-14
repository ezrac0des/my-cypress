describe('', () => {
  it('test 1', () => {
    cy.visit('http://automationpractice.com/index.php');

    cy.get('.login').click();

    cy.get('#email').type('email');

    cy.get('#passwd').type('password');

    cy.get('#SubmitLogin > span').click();
  });

  it('test 2', () => {});
});
