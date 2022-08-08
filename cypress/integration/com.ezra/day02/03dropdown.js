describe("dropdown", () => {
    
  it("dropdown test", () => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
    cy
    .get("#dropdown")
    .select("Option 1")
    .should("have.value", "1");

    cy.wait(3000);

    cy
    .get("#dropdown")
    .select("Option 2")
    .should("have.value", "2");
  });
});
