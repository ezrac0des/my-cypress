describe('XHR -XML, HTTP, Request', () => {
  const requestUrl = 'https://example.cypress.io/commands/waiting';

  it('XHR Example 3', () => {
    cy.visit(requestUrl);

    //* intercept() -> listens to network (right click->inspect->network)
    cy.intercept('GET', '**/comments/**').as('getComment');

    cy.get('.network-btn').click();

    cy.wait('@getComment')
      .its('response')
      .then((response) => {
        console.log(response);
        assert.equal(response.statusCode, 200, 'Status Code Control');
      });
  });
});
