describe("checkboxes", () => {
  it("checking single box", () => {

    cy.visit("http://automationpractice.com/index.php");
    
    //* first() -> finds the first element that has the given css locator
    cy.get(".sf-with-ul").first().click();

    //* should('not.be.checked') -> asserts that the checkbox is not checked
    cy.get('#layered_category_4').should('not.be.checked')

    
  });
});
