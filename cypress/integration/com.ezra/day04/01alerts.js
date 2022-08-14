describe('alerts', () => {
  //TODO Cypress automatically accepts alerts
  it('alert test', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(1) > button').click();

    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  //TODO Cypress automatically accepts alerts
  it('confirm alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(2) > button').click();

    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('dismiss alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(3) > button').click();

    //* on('window:confirm', (param) => {}) -> does not confirm the alert, clicks cancel because of 'return false'
    cy.on('window:confirm', (str) => {
      return false;
    });

    cy.get('#result').should('have.text', `You entered: Cancel`);
  });

  it.only('accept alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(3) > button').click();

    //* on('window:confirm', (param) => {}) -> confirms the alert, clicks ok because of 'return true'
    cy.on('window:alert', (str) => {
      return true;
    });

    cy.get('#result').should('have.text', `You entered: Cancel`);
  });
});
