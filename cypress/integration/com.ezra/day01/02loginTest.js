describe("Crystal Key hotel", () => {
  it("Test 1", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    //login
    //1. way: using open selector playground on the test page
    //* get() -> gets an element using css selector
    cy.get("#navLogon > .nav-link").click();

    //2. way: using text attribute of the element
    //* contains() -> gets an element using text attribute
    cy.contains("Log in").click();
  });
});
