describe("Crystal Key hotel", () => {
  it("Test 1", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.contains("Log in").click();

    //! ASSERT
    //*should('include', 'text') -> checks if the element contains given text
    cy.url().should("include", "Account/Logon");

    //*should('have.text', 'text') -> checks if the text attribute of element contains given text
    cy.get("#navLogon > .nav-link").should("have.text", "Log in");

    //*should('be.visible') -> checks if the element is visible
    cy.get(".row > .mb-4").should("be.visible");

    //*should('eq', 'text') -> checks if the element's text is equals to the given text
    cy.title().should("eq", "KoalaResortHotels - Log in");

    //* should('include.text', 'text') -> checks if the text attribute of element contains given text
    cy.get(".row > .mb-4").should("include.text", "Log");
  });
});
