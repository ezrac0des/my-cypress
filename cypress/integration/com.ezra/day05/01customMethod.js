describe('custom method try', () => {
  it('positive log in', () => {
    //* login(p1, p2) -> defined in support/commands.js, can be used in anywhere in the project
    cy.login('123murat123@gmail.com', '123murat123');
  });

  it('negative log in', () => {
    cy.login('123123@gmail.com', '123murat123');

    cy.contains('Authentication failed.').should('be.visible');

    cy.url().should('include', 'controller=authentication');

    //* screenshot() -> takes screenshot 
    cy.screenshot();
  });
});
