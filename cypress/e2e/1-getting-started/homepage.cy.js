describe('Tests in home page', () => {
  it('Visitar Home Page', () => {
      cy.visit('/');
  });
  it('Deve conter a Header', () => {
    cy.get('[data-cy=textoComics').should('be.visible');
    cy.get('[data-cy=logo').should('be.visible');
      cy.get('[data-cy=logoCarrinho').should('be.visible');
  });
});