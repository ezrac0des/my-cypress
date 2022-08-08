describe("Navigation", () => {
    
  //it.skip -> skips the test, doesnt execute it
  it.skip("back, forward, refresh", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    cy.contains("Log in").click();

    //* wait(int) -> waits as given milliseconds (hard wait)
    cy.wait(2000);

    //* go('back') -> goes to previous page
    cy.go("back");
    cy.wait(2000);

    //* go('forward') -> goes to next page
    cy.go("forward");
    cy.wait(2000);

    //* go(-1) -> goes to previous page
    cy.go(-1);
    cy.wait(2000);

    //* go(1) -> goes to next page
    cy.go(1);
    cy.wait(2000);

    //* reload() -> reloads the page
    cy.reload();
    cy.wait(2000);
  });

  it("chained navigation", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.
    contains("Log in").
    click().
    go("back").
    go("forward").
    go("back");

    cy.
    reload(true).
    contains("Log in").
    should("be.visible");
  });
});
