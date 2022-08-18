import HomePage from '../../pageObjectRepository/HomePage';
import LoginPage from '../../pageObjectRepository/LoginPage';

describe('Paylinn Bank', () => {
  before(function () {
    cy.fixture('creds').then(function (data) {
      this.data = data;
    });
  });

  it('paylinn login test', () => {
    //! creating object
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    cy.visit('https://www.paylinn.com/');

    homePage.getSigIn().click();

    loginPage.getUserNameBox().type(this.data.username);

    loginPage.getUserNameBox().should('have.value', 'User');

    loginPage.getPasswordBox().type(this.data.password);

    loginPage.getPasswordBox().should('have.attr', 'value', this.data.password);

    loginPage.getLoginButton().click();

    loginPage.getWelcomeText().should('contain.text', 'Welcome');

    loginPage
      .getNavBarHeader()
      .should('contain.text', 'Welcome')
      .and('contain.text', 'React')
      .and('contain.text', 'Logout')
      .and('contain.text', this.data.username);
  });
});
