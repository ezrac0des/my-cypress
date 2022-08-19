describe('XHR -XML, HTTP, Request', () => {
  const requestUrl = 'https://jsonplaceholder.cypress.io/comments';

  it('XHR Example 2', () => {
    cy.request('POST', requestUrl, {
      userId: 501,
      title: 'API testing with Cypress',
      body: 'and of course JavaScript',
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(201);
      expect(response)
        .property('body')
        .to.contain({ title: 'API testing with Cypress' });
      expect(response.body).property('userId').to.be.a('number');
    });
  });
});
