/// <reference types="cypress"/>

context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Deve realizar o login de um usuário com um e-mail e senha válidos', () => {
    cy.get('input#email').type('user-test@photolink.com.br');
    cy.get('input#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/galleries');
  });

  it('Deve exibir uma mensagem de erro ao tentar logar com um usuário que não existe', () => {
    cy.get('input#email').type('invalid-credentials@photolink.com');
    cy.get('input#password').type('123123');
    cy.get('button[type="submit"]').click();

    cy.get('.toast-text').should('have.text', 'E-mail ou senha inválidos.');
  });

  it('Deve redirecionar um usuário logado para a listagem de galerias', () => {
    cy.visit('http://localhost:5173');
    cy.get('input#email').type('user-test@photolink.com.br');
    cy.get('input#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.wait(1000);
    cy.visit('http://localhost:5173');
    cy.wait(1000);
    cy.url().should('include', '/galleries');
  });

  it('Deve exibir uma mensagem de erro quando o usuário não preenche o campo e-mail', () => {
    cy.get('button[type="submit"]').click();

    cy.get('input#email').should('have.class', 'ring-red-500');
    cy.get('[data-testid="error-input-email"]').should(
      'have.text',
      'Preencha esse campo, por favor.',
    );
  });

  it('Deve exibir uma mensagem de erro quando o usuário digita um e-mail incompleto', () => {
    cy.get('input#email').as('inputEmail');
    cy.get('@inputEmail').type('invalid-email');
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="error-input-email"]').should(
      'have.text',
      'E-mail com formato inválido.',
    );
  });

  it('Deve exibir uma mensagem de erro quando o usuário não preenche o campo de senha', () => {
    cy.get('button[type="submit"]').click();

    cy.get('input#password').should('have.class', 'ring-red-500');

    cy.get('[data-testid="error-input-password"]').should(
      'have.text',
      'Preencha esse campo, por favor.',
    );
  });

  it('Deve exibir mensagem de erro quando o usuário digita uma senha inválida', () => {
    cy.get('button[type="submit"]').click();

    cy.get('input#password').type('123').should('have.class', 'ring-red-500');

    cy.get('[data-testid="error-input-password"]').should(
      'have.text',
      'A senha deve ter pelo menos 6 caracteres.',
    );
  });

  it('Deve redirecionar o usuário para a página de redefinição de senha, quando o usuário clica em "esqueceu sua senha?"', () => {
    cy.get('[data-testid="forgot-password-link"]').click();
    cy.url().should('include', '/forgot-password');
  });

  it('Deve redirecionar o usuário para a página de cadastro, quando o usuário clica em "Criar uma conta"', () => {
    cy.get('[data-testid="register-link"]').click();
    cy.url().should('include', '/register');
  });

  it('Deve testar se a senha ficará visível se clicar no botão do olho no input de senha', () => {
    cy.get('input#password').type('123');
    cy.get('[data-testid="reveal-password"]').click();
    cy.get('input#password').should('have.attr', 'type', 'text');
  });
});
