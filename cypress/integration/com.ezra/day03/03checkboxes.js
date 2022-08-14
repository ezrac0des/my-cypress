describe("checkboxes", () => {
  it("checking single box", () => {
    cy.visit("http://automationpractice.com/index.php");

    //* first() -> finds the first element that has the given css locator
    cy.get(".sf-with-ul").first().click();

    //* should('not.be.checked') -> asserts that the checkbox is not checked, returns true or false
    cy.get("#layered_category_4").should("not.be.checked");

    //* check() -> checks the given checkbox
    cy.get("#layered_category_4").check();

    //* should('be.checked') -> asserts that the checkox is checked, returns true or false
    cy.get("#layered_category_4").shoul('be.checked')



    
  });
});
