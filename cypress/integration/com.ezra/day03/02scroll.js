describe("scroll", () => {
  it("scroll", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    cy.wait(2000);

    //* scrollIntoView() -> scrolls into view of given element
    cy.get(".col-md-7 > .mb-4").scrollIntoView();

    cy.wait(2000);
    cy.get(":nth-child(9) > .container > .justify-content-center > .col-md-7 > h2").scrollIntoView();

    cy.wait(2000);
    cy.get(".col-md-7 > h2 > span").scrollIntoView();

    cy.wait(2000);

    //* scrollTo('bottom') -> scrolls to the bottom of the page
    cy.scrollTo("bottom");
    cy.wait(2000);

    //* scrollTo('top) -> scrolls to the top of the page
    cy.scrollTo("top");
    cy.wait(2000);

    //* scrollTo(x,y) -> scrolls to the given x-y coordinates
    cy.scrollTo(0, 1000); //1000px down
    cy.wait(2000);

    cy.scrollTo(0, -500); //500px up
    cy.wait(2000);
  });
});
