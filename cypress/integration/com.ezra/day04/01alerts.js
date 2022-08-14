describe('alerts', () => {
    
  it('alert test', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(1) > button').click();

    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('accept alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(2) > button').click();

    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('dismiss alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(3) > button').click();

    cy.on('window:confirm', (str)=>{
        return false
    })

    cy.get('#result').should('have.text', `You entered: ${str}`);
  });
});
