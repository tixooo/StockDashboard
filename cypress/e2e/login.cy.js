describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept(
      'POST',
      'https://smd-backend-production.up.railway.app/api/auth/login'
    ).as('loginUser');
  });
  it('Log In Button Click', () => {
    //navbar
    cy.get('[data-cy="logInBtn"]').should('be.visible');
    cy.get('[data-cy="logInBtn"]').click();
    //check if fields are visible
    cy.get('[data-cy="username"]').should('be.visible');
    cy.get('[data-cy="password"]').should('be.visible');
    //check if buttons are visible
    cy.get('[data-cy="logInButton"]').should('be.visible');

    cy.get('[data-cy="username"]').type('admin');
    cy.get('[data-cy="password"]').type('admin');

    cy.get('[data-cy="logInButton"]').click();
    cy.wait('@loginUser').then((request) => {
      expect(request?.response?.statusCode).to.be.equal(200);
      expect(request?.response?.body.message).to.be.equal('Login successful');
    });
  });
});
