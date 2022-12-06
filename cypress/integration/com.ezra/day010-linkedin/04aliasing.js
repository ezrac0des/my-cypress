describe('text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('http://192.168.2.20:3000/example-3');

    //* as() -> aliasing
    cy.get('[data-cy="last-name-chars-left-count"]').as('charsLeftSpan');
    cy.get('[data-cy="input-last-name"]').as('charInput');

    cy.get('@charsLeftSpan').invoke('text').should('equal', '15');

    cy.get('@charInput').type('hello');

    cy.get('@charsLeftSpan').invoke('text').should('equal', '10');

    cy.get('@charInput').type(' my friend');

    cy.get('@charsLeftSpan').invoke('text').should('equal', '0');
  });

  it('prevents the user from typing more characters once max is exceeded', () => {
    cy.visit('http://192.168.2.20:3000/example-3');

    cy.get('[data-cy="input-last-name"]').as('charInput');

    cy.get('@charInput').type('abcdefghijklmnopqrstuvwxyz');

    cy.get('@charInput').should('have.attr', 'value', 'abcdefghijklmno');
  });
});
