describe('Basic page interactions', () => {
  beforeEach(() => {
    cy.visit('/example-4');
  });

  it('displays the name of the most recently hovered item', () => {
    //* debugger -> will let you debug on the UI, for it to work dev tools must be open on the UI
    cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
      .trigger('mouseover')
      .then(() => {
        debugger;
      });

    //* debug() -> will let you debug on the UI, inspect and click on console
    cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
      .trigger('mouseover')
      .debug();

    cy.get('[data-cy="box-4-selected-name"]')
      .invoke('text')
      .should('equal', 'Option Two');
  });
});
