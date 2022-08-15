describe('amazon', () => {
  it('search', () => {
    //* amazonSearch() -> defined in support/commands.js, can be used in anywhere in the project
    cy.amazonSearch('imac');

    cy.get('.a-section > .a-color-state').should('include.text', 'imac');
    cy.get('.a-section > .a-color-state').should('have.text', '"imac"');
  });
});
