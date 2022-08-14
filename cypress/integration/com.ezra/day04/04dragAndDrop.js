//TODO 1. npm install --save-dev @4tw/cypress-drag-drop in terminal
import '@4tw/cypress-drag-drop';

describe('drag and drop', () => {
  it('title', () => {
    cy.visit('https://demo.guru99.com/test/simple_context_menu.html');

    //* dblclick() -> double clicks
    cy.contains('Double-Click Me To See Alert').dblclick();

    //* on('window:alert', () =>{}) -> gets into the alert
    cy.on('window:alert', (str) => {
      //*  to.equal('text') -> checks if the text equals to the given text
      expect(str).to.equal('You double clicked me.. Thank You..');

      //*  to.eq('text') -> checks if the text equals to the given text
      expect(str).to.eq('You double clicked me.. Thank You..');

      //*  to.contain('text') -> checks if the text contains to the given text
      expect(str).to.contain('You double clicked me..');
    });

    //* rightclick() -> right clicks
    cy.get('.context-menu-one').rightclick();
  });

  it('drag and drop', () => {
    cy.visit('http://demo.guru99.com/test/drag_drop.html');

    //* drag('locator') -> drags the element to the gicen locator ({ force: true } may be needed in some cases)
    cy.get(':nth-child(2) > .button') //? the element that will be dragged
      .drag('#amt7', { force: true }); //? the place it should be dragged to
  });
});
