describe('alerts', () => {
  //? Cypress automatically accepts alerts
  it('alert test', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(1) > button').click();

    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('confirm alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(2) > button').click();

    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('dismiss alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(2) > button').click();

    //* on('window:confirm', (param) => {}) -> does not confirm the alert, clicks cancel because of 'return false'
    cy.on('window:confirm', (str) => {
      return false;
    });

    cy.get('#result').should('have.text', `You clicked: Cancel`);
  });

  it('accept alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get(':nth-child(2) > button').click();

    //* on('window:confirm', (param) => {}) -> confirms the alert, clicks ok because of 'return true'
    cy.on('window:confirm', (str) => {
      return true;
    });

    cy.get('#result').should('have.text', `You clicked: Ok`);
  });

  it('enter text to alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    //* window() -> checks pop up windows

    cy.window()
      //* then(($windowElement) => {}) -> enters data to prompt
      .then(($windowElement) => {
        cy.stub($windowElement, 'prompt').returns('Hi');
        cy.get(':nth-child(3) > button').click();
      });

    cy.get('#result').should('have.text', `You entered: Hi`);
  });
});
