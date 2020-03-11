describe('Tests connections and redirects', function() {
  it('Checks whether login page is accessible', function() {
    cy.visit('./introPage.html');
  });

  it('Checks whether student login page is accessible', function() {
    cy.visit('./introPage.html');
    cy.get('#studentLogin').click();
    // should be at studentLogin.html
    cy.url().should('include', '/studentLogin.html');
  });

  it('Checks whether gamekeeper login page is accessible', function() {
    cy.visit('./introPage.html');
    cy.get('#gamekeeperLogin').click();
    // should be at gamekeeperLogin.html
    cy.url().should('include', '/gamekeeperLogin.html');
  });

  it('Checks FAQ redirect when not logged in', function() {
    cy.visit('./faq.html');
    cy.url().should('include', '/introPage.html');
  });

  it('Checks gamekeeper redirect when not logged in', function() {
    cy.visit('./gamekeeper.html');
    cy.url().should('include', '/introPage.html');
  });

  it('Checks gamekeeper end redirect when not logged in', function() {
    cy.visit('./gamekeeperEnd.html');
    cy.url().should('include', '/introPage.html');
  });

  it('Checks student game redirect when not logged in', function() {
    cy.visit('./studentGame.html');
    cy.url().should('include', '/introPage.html');
  });
});