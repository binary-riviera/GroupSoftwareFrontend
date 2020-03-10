describe('Tests account related functionality', function() {
  it('Checks whether student login is possible', function() {
    cy.visit('./introPage.html');
    cy.get('#studentLogin').click();
    cy.get('#email_address').type('admin1@exeter.ac.uk');
    cy.get('#password').type('admin1');
    cy.get('#login').click();
    cy.url().should('include', '/studentGame.html')
  });
});