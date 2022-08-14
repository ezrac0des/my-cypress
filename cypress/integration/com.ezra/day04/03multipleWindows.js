describe('multiple windows', () => {
  it('removing target', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

    //* invoke('removeAttr', 'attributeName') -> removes the given attribute's value
    cy.get('.example > a').invoke('removeAttr', 'target').click();
  });

  //* only() -> runs only this test
  it.only('opening in new tab', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.wait(3000);

    //* then(() => {}) -> takes and holds element
    //* prop('attribute') -> takes the value of given attribute
    cy.get('.example > a').then((element) => {
      const newURL = element.prop('href');
      cy.visit(newURL);
    });

    cy.get('h3').should('have.text', 'New Window');
  });
});
