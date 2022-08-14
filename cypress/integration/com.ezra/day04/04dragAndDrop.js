// import '@4tw/cypress-drag-drop';

describe('drag and drop', () => {
  it('title', () => {
    cy.visit('https://demo.guru99.com/test/simple_context_menu.html');

    //* dblclick() -> double clicks
    cy.contains('Double-Click Me To See Alert').dblclick();
    
    //* rightclick() -> right clicks
    cy.get('.context-menu-one').rightclick();
  });
});
