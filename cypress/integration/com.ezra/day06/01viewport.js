describe('Viewports', () => {
  it('iphone 6', () => {
    cy.visit('https://www.amazon.com');

    //* viewport('') -> screen is displayed in given electronic device's width & height
    cy.viewport('iphone-8');
    cy.screenshot();
  });

  it('macbook-16', () => {
    cy.visit('https://www.amazon.com');
    cy.viewport('macbook-16');
    cy.screenshot();
  });

  it('custom', () => {
    cy.visit('https://www.amazon.com');

    //* viewport(num1, num2) -> screen is displayed in given width & height
    cy.viewport(2500, 1500);
    cy.screenshot();
  });
});
