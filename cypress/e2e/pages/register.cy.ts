/// <reference types="cypress"/>

context('Cadastro', () => {
  beforeEach(() => {
    cy.task('clearDB', 'users');
    cy.visit('http://localhost:5173/register');
  });

  afterEach(() => {
    cy.task('clearDB', 'users');
  });

  it('Deve cadastrar um usuário e redirecionar para a tela de listagem de galerias', () => {
    cy.get('input#name').type('John Doe');
    cy.get('input#email').type('johndoe@example.com');
    cy.get('input#phone').type('21999999999');
    cy.get('input#password').type('123123');
    cy.get('input#passwordConfirm').type('123123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/galleries');
  });

  it('Deve exibir uma mensagem de erro se o e-mail informado já existe no banco de dados', () => {
    cy.get('input#name').type('John Doe');
    cy.get('input#email').type('user-test@photolink.com.br');
    cy.get('input#phone').type('21999999999');
    cy.get('input#password').type('123123');
    cy.get('input#passwordConfirm').type('123123');
    cy.get('button[type="submit"]').click();

    cy.get('.toast-text').should(
      'have.text',
      'Já existe um usuário com esse e-mail cadastrado',
    );
  });

  it('Deve exibir uma mensagem de erro se o usuário não preencher algum dos campos obrigatórios', () => {
    cy.get('button[type="submit"]').click();

    cy.get('input#email').should('have.class', 'ring-red-500');
    cy.get('[data-testid="error-input-email"]').should(
      'have.text',
      'Preencha esse campo, por favor.',
    );
  });

  it('Deve redirecionar o usuário para a página de login, quando o usuário clica em "Voltar para o login"', () => {
    cy.get('[data-testid="voltar-login"]').click();
    cy.url().should('include', '/');
  });
});
