//! we have to import which classes we want to use with their path
import HomePage from '../../pageObjectRepository/HomePage';
import LoginPage from '../../pageObjectRepository/LoginPage';

describe('Paylinn Bank', () => {
  let data;
  before(() => {
    cy.fixture('creds').then((fData) => {
      data = fData;
    });
  });

  it('paylinn login test', () => {
    //! creating object
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    cy.visit('https://www.paylinn.com/');

    homePage.getSignIn().click();

    loginPage.getUserNameBox().type(data.username);

    loginPage.getUserNameBox().should('have.value', 'User');

    loginPage.getPasswordBox().type(data.password);

    loginPage.getPasswordBox().should('have.attr', 'value', data.password);

    loginPage.getLoginButton().click();

    loginPage.getWelcomeText().should('contain.text', 'Welcome');

    loginPage
      .getNavBarHeader()
      .should('contain.text', 'Welcome')
      .and('contain.text', 'React')
      .and('contain.text', 'Logout')
      .and('contain.text', data.username);
  });
});
