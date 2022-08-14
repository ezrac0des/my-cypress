describe('checkboxes', () => {
  it.skip('checking single box', () => {
    cy.visit('http://automationpractice.com/index.php');

    //* first() -> finds the first element that has the given css locator
    cy.get('.sf-with-ul').first().click();

    //* should('not.be.checked') -> asserts that the checkbox is not checked, returns true or false
    cy.get('#layered_category_4').should('not.be.checked');

    //* check() -> checks the given checkbox
    cy.get('#layered_category_4').check();

    //* should('be.checked') -> asserts that the checkox is checked, returns true or false
    cy.get('#layered_category_4').should('be.checked');

    //* uncheck() -> unchecks the given checkbox
    cy.get('#layered_category_4').uncheck();
  });

  it.skip('checking all checkboxes', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.sf-with-ul').first().click();

    //? find the common attribute for all checkboxes
    cy.get("input[type='checkbox']").check();

    cy.wait(3000);

    cy.get("input[type='checkbox']").uncheck();
  });

  it('checking boxes with click', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.sf-with-ul').first().click();

    /*
    cy.click() can only be called on a single element. 
    Your subject contained 19 elements. 
    Pass { multiple: true } if you want to serially click each element.
    */
    //? {multiple: true} helps us to click more than one element
    cy.get("input[type='checkbox']").click({ multiple: true });

    //assert if all boxes are unchecked
    cy.get("input[type='checkbox']").should('be.checked');
    cy.get("input[type='checkbox']").first().should('be.checked');

    //* should('have.class', 'text') -> checks if the element has the given class value
    cy.get("input[type='checkbox']")
      .first()
      .parent()
      .should('have.class', 'checked');

    // click again to uncheck
    cy.get("input[type='checkbox']").click({ multiple: true });

    //assert if all boxes are unchecked
    cy.get("input[type='checkbox']").should('not.be.checked');

    //* should('have.id', 'text') -> checks if the element has the given id value
    //* should('have.name', 'text') -> checks if the element has the given name value
  });
});
