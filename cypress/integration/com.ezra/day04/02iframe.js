//! provides methods and codes to help cypress runner to contact with iframes
import 'cypress-iframe';

describe('iframes', () => {
  it('iframe', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.get('h3').should('contain', 'Editor');

    //* frameloaded('locator') -> locates and loads iframe
    cy.frameLoaded('#mce_0_ifr');

    //* iframe() -> enters into the iframe
    //* find('htmlTag') -> finds the given HTML tag
    //* clear() -> clears a textbox
    cy.iframe().find('p').clear();

    cy.iframe().find('p').type('Hello World!');

    cy.get('.large-4 > div > a').should('contain.text', 'Elemental Selenium').click();

    cy.title();
  });
});
