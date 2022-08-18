describe('hooks', () => {
  //? runs first
  before(() => {
    console.log('before method');
    cy.url().should('')
  });

  //? runs second
  beforeEach(() => {
    console.log('before each method');
    cy.visit('https://qa-environment.koalaresorthotels.com/');
  });

  //? runs second
  after(() => {
    console.log('after method');
  });

  //? runs first
  afterEach(() => {
    console.log('after each method');
    cy.url().should('include', '/Account/Logon');
  });

  it('test', () => {
    cy.contains('Log in').click();
  });
});
