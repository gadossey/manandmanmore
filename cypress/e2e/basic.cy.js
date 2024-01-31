describe('sample render test', () => {
  beforeEach(() => {
    // This will be executed before each test, you can keep it as is.
    cy.visit('/');
  });

  it.skip('displays the title text', () => {
    // This test is skipped and won't be executed.
    cy.get('h2').contains('Essentials for a cold winter');
  });
});
