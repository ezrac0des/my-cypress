alert(Cypress.env('my_variable'));
describe('environment variable', () => {
  beforeEach(() => {
    cy.visit('/example-4');
  });

  it("sets the header text to the item's name when double clicked", () => {
    cy.get('[data-cy="box-1-items-list"] > :nth-child(2)').dblclick();

    cy.get('[data-cy="box-1-selected-name"]')
      .invoke('text')
      .should('equal', 'Option Two');
  });
});
