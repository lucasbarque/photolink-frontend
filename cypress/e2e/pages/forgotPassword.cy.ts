/// <reference types="cypress"/>

import { subMinutes } from 'date-fns'

context('Forgot password', () => {
  beforeEach(() => {
    cy.task('clearDB', 'users');
    cy.visit('http://localhost:5173/forgot-password');
  });

  it('Deve enviar um e-mail de recuperação de senha para um e-mail válido', () => {
    cy.get('input#email').type('user-test@photolink.com.br');
    cy.get('button[type="submit"]').click();

     cy.task('selectDB', "SELECT * FROM users WHERE email = 'user-test@photolink.com.br'")
      .then(([result]: any) => {
        expect(result.reset_password_token).to.be.not.null;
        expect(result.reset_password_expiration).to.be.not.null;
      });
  });

  it('Deve acessar a página de redefinição de senha com o token que recebeu no e-mail', () => {
    cy.get('input#email').type('user-test@photolink.com.br');
    cy.get('button[type="submit"]').click();

     cy.task('selectDB', "SELECT * FROM users WHERE email = 'user-test@photolink.com.br'")
      .then(([result]: any) => {
        cy.visit(`http://localhost:5173/reset-password/${result.reset_password_token}`);
        cy.url().should('equal', `http://localhost:5173/reset-password/${result.reset_password_token}`);
      });
  });

  it('Deve exibir uma mensagem de erro quando acessar a página de redefinição de senha com o token inválido', () => {
    cy.visit('http://localhost:5173/reset-password/invalid-token');

    cy.url().should('equal', 'http://localhost:5173/');
    cy.get('.toast-text').should(
        'have.text',
        'Token inválido, solicite uma nova redefinição de senha.'
      );
  });

   it('Deve exibir uma mensagem de token expirado, quando o token estiver expirado', () => {
    cy.get('input#email').type('user-test@photolink.com.br');
    cy.get('button[type="submit"]').click();

    cy.task('selectDB', `UPDATE users SET reset_password_expiration = '${subMinutes(new Date(), 31).toISOString()}' WHERE email = 'user-test@photolink.com.br'`).then(() => { })

    cy.task('selectDB', "SELECT * FROM users WHERE email = 'user-test@photolink.com.br'")
      .then(([result]: any) => {
        cy.visit(`http://localhost:5173/reset-password/${result.reset_password_token}`);
        cy.url().should('equal', `http://localhost:5173/reset-password/${result.reset_password_token}`);

        cy.get('[data-testid="expired-message"]').should('be.visible');
      });
   });

   it('Deve reenviar um e-mail se o token estiver expirado', () => {
    cy.get('input#email').type('user-test@photolink.com.br');
    cy.get('button[type="submit"]').click();

    cy.task('selectDB', `UPDATE users SET reset_password_expiration = '${subMinutes(new Date(), 31).toISOString()}' WHERE email = 'user-test@photolink.com.br'`).then(() => { })

    cy.task('selectDB', "SELECT * FROM users WHERE email = 'user-test@photolink.com.br'")
      .then(([result]: any) => {

        cy.visit(`http://localhost:5173/reset-password/${result.reset_password_token}`);
        cy.url().should('equal', `http://localhost:5173/reset-password/${result.reset_password_token}`);

        cy.get('[data-testid="expired-message"]').should('be.visible');
        cy.get('[data-testid="button-resend-email"]').click();

        cy.get('input#email').type('user-test@photolink.com.br');
        cy.get('button[type="submit"]').click();
      });
  });
});
