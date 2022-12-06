describe('heading text', () => {
  it('contains the correct title', () => {
    cy.visit('http://192.168.2.20:3000/example-1');

    //* invoke() -> gets the value of given attribute of the element 
    cy.get('h1')
      .invoke('text')
      .should('equal', 'My Awesome Web Application');
  });
});
