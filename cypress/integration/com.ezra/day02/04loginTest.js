describe("Log in", () => {
  const wrongEmail = "qwert@gmail.com";
  const wrongPass = "qwert";

  const correctEmail = "cypress_test_1@gmail.com";
  const correctPass = "admin_123";

  it("log in negative", () => {
    cy.visit("https://test.iyikisordun.com/login.php");

    cy.get('[type="email"]').type(wrongEmail);
    cy.get('[type="password"]').type(wrongPass);
    cy.get(".btn").click();

    //this can be used when we are expecting it to fail
    cy.get("#fail").should("include.text", "Girdiginiz bilgiler hatalidir");
  });

  it("log in positive", () => {
    cy.visit("https://test.iyikisordun.com/login.php");

    cy.get('[type="email"]').type(correctEmail);
    cy.get('[type="password"]').type(correctPass);
    cy.get(".btn").click();

    cy.get(".m-0").should("have.text", "Dashboard");
    cy.url().should("include", "index.php");
  });
});
