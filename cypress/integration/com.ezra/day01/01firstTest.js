describe("My First Test", () => {
  //describe ('name', ()=> {tests})

  //defining our test
  it("URL Test", () => {
    //it('name', ()=> {test body})

    //*visit(): to go to a website -> go to google website
    cy.visit("https://wwww.google.com/");

    //*url(): for testing url
    //?should('include', 'text') -> does it include the given text?
    cy.url().should("include", "google");
    cy.url().should("include", "google", "com");
    cy.url().should("include", "//");
    cy.url().should("include", "");
  });

  it("Title Test", () => {
    cy.visit("https://wwww.google.com/");

    //*title(): for testing title
    //?should('eq', 'text') -> is it equals to the given text?
    cy.title().should("eq", "Google");
  });
});
