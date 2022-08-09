describe("hover over", () => {
  it("move over", () => {
    cy.visit("https://www.amazon.com/");

    //* trigger('mouseover') -> moves the cursor on top of the given element
    cy.get(".icp-nav-link-inner > .nav-line-2 > .nav-icon").trigger(
      "mouseover"
    );

    // change country/region
    cy.contains("Change country/region").click();

    // select canada
    //* {force: true} -> forces the action to happen, removes error risk if there is 
    cy.get("#icp-dropdown").select("Canada", { force: true });
    /* select() can't be used in the following webelement as its tag is not select
        <span class="a-dropdown-prompt">
        United States
        </span>
    */
  });
});
