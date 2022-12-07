//* used for auto-completion of cypress commands on current page only
/// <reference types = "Cypress" />

describe('other useful commands', () => {
  beforeEach(() => {
    cy.visit('/example-3');
  });

  it('wrap', () => {
    //* wrap() -> adds more consistency and lets us to use Cypress assertions instead of Chai assertions
    cy.get('[data-cy="last-name-chars-left-count"]').then(($charsLeftSpan) => {
      expect($charsLeftSpan.text()).to.equal('15');
    });

    cy.get('[data-cy="last-name-chars-left-count"]').then(($charsLeftSpan) => {
      cy.wrap($charsLeftSpan).should('have.text', 15);
    });
  });

  it('and() command', () => {
    //* and() -> used for connecting two or more assertions
    cy.get('[data-cy="last-name-chars-left-count"]')
      .should('have.text', '15')
      .and('be.greaterThan', '10');
  });

  it('filter(), not()', () => {
    cy.visit('/example-4');
    //* not() -> used for not getting specific elements from a list of elements, can be chained
    cy.get('[data-cy="box-4-items-list"] >')
      .not(':nth-child(2)')
      .not(':nth-child(3)');

    //* filter() -> used for filtering from the list of elements
    cy.get('li').filter(':contains("Option Two")').should('be.visible');
  });

  it('type() with special characters', () => {
    //* type('{...}') -> used for entering a key from keyboard
    cy.get('[data-cy="input-last-name"]').type('hello {enter}');
  });
});
