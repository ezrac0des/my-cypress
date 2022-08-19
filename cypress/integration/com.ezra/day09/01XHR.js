describe('XHR -XML, HTTP, Request', () => {
  //? XHR is an API presented with JavaScript
  //? monitors the events that runs in the background simultaneously on the website

  //   const requestUrl = 'https://example.cypress.io/commands/waiting';
  const requestUrl = 'https://jsonplaceholder.cypress.io/comments';

  it('XHR Example 1', () => {
    cy.request(requestUrl).should((response) => {
      console.log(response);
      assert.equal(response.status, 200);
      expect(response.statusText).to.eq('OK');
    });
  });
});
