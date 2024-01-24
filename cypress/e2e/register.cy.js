describe('Register Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept(
      'POST',
      'https://smd-backend-production.up.railway.app/api/auth/register'
    ).as('registerUser');
    cy.intercept(
      'POST',
      'https://smd-backend-production.up.railway.app/api/auth/login'
    ).as('loginUser');
  });
  it('Register Button Click', () => {
    //navbar
    cy.get('[data-cy="RegisterBtn"]').should('be.visible');
    cy.get('[data-cy="RegisterBtn"]').click();
    //check if fields are visible
    cy.get('[data-cy="fullName"]').should('be.visible');
    cy.get('[data-cy="userName"]').should('be.visible');
    cy.get('[data-cy="password"]').should('be.visible');
    cy.get('[data-cy="repeatPassword"]').should('be.visible');
    cy.get('[data-cy="email"]').should('be.visible');
    //check if buttons are visible
    cy.get('[data-cy="register"]').should('be.visible');
    cy.get('[data-cy="closeBtn"]').should('be.visible');

    cy.get('[data-cy="fullName"]').type('Vasko Ivanov');
    cy.get('[data-cy="userName"]').type('Vasko18');
    cy.get('[data-cy="password"]').type('1234');
    cy.get('[data-cy="repeatPassword"]').type('1234');
    cy.get('[data-cy="email"]').type('vasko18@abv.bg');

    cy.get('[data-cy="register"]').click();
    cy.wait('@registerUser').then((request) => {
      expect(request?.response?.statusCode).to.be.equal(201);
      expect(request?.response?.body.message).to.be.equal(
        'User registered successfully'
      );
    });
    cy.wait('@loginUser').then((request) => {
      expect(request?.response?.statusCode).to.be.equal(200);
      cy.get('[data-cy="RegisterBtn"]').should('not.exist');
      cy.get('[data-cy="logInBtn"]').should('not.exist');
      cy.get('[data-cy="logOutBtn"]').should('be.visible');
    });
  });
});
