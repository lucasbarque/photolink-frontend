/// <reference types="cypress"/>

context('Cadastro de Pessoa Física', () => {
  beforeEach(() => {
    cy.task('clearDB', 'users');
    cy.visit('http://localhost:5173/register');
  });

  afterEach(() => {
    cy.task('clearDB', 'users');
  });

  it('Deve criar um pré-registro e redirecionar o usuário para a tela de verificação de conta', () => {
    cy.get('input#name').type('User test');
    cy.get('input#email').type('usertest@meapoia.com');
    cy.get('input#cpf').type('58154016095');
    cy.get('input#phoneNumber').type('21999999999');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/register/verify-account');
  });

  it('Deve exibir uma mensagem de erro se o e-mail informado já existe no banco de dados', () => {
    cy.get('input#name').type('User test');
    cy.get('input#email').type('lucas.barque@meapoia.com');
    cy.get('input#cpf').type('58154016095');
    cy.get('input#phoneNumber').type('21999999999');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();
    cy.get('.toast-text').should(
      'have.text',
      'Já existe um usuário com esse e-mail cadastrado'
    );
  });

  it('Deve exibir uma mensagem de erro se o cpf do usuário já existir no banco de dados', () => {
    cy.get('input#name').type('User test');
    cy.get('input#email').type('otheruseremail@meapoia.com');
    cy.get('input#cpf').type('98765432100');
    cy.get('input#phoneNumber').type('21999999999');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();
    cy.get('.toast-text').should(
      'have.text',
      'Já existe um usuário com esse CPF cadastrado'
    );
  });

  it('Deve exibir uma mensagem de erro se o usuário não preencher algum dos campos obrigatórios', () => {
    cy.get('button[type="submit"]').click();

    cy.get('input#email').should('have.class', 'ring-danger-pure');
    cy.get('[data-testid="error-input-email"]').should(
      'have.text',
      'Preencha esse campo, por favor.'
    );
  });

  it('Caso já exista um e-mail ou cpf em etapa de validação de conta do pré cadastro, deverá ser atualizado no banco de dados com as novas informações e redirecionado para a tela de validação de conta', () => {
    cy.get('input#name').type('User test');
    cy.get('input#email').type('usertest@meapoia.com');
    cy.get('input#cpf').type('58154016095');
    cy.get('input#phoneNumber').type('21999999999');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();

    cy.visit('http://localhost:5173/register');
    cy.get('input#name').type('Another User Test');
    cy.get('input#email').type('usertest2@meapoia.com');
    cy.get('input#cpf').type('58154016095');
    cy.get('input#phoneNumber').type('21999999990');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/register/verify-account');

    cy.task('selectDB', "SELECT * FROM users WHERE cpf = '581.540.160-95'")
    .then(([result]: any) => {
      expect(result).to.deep.include({
        name: 'Another User Test',
        email: 'usertest2@meapoia.com',
        cpf: '581.540.160-95',
        phone_number: '(21) 99999-9990',
      })
    });
  });

  it('Caso já exista um e-mail ou cpf em etapa de definição de senha do pré cadastro, deverá ser atualizado no banco de dados com as novas informações e redirecionado para a tela de definição de senha', () => {
    cy.get('input#name').type('User test');
    cy.get('input#email').type('usertest@meapoia.com');
    cy.get('input#cpf').type('58154016095');
    cy.get('input#phoneNumber').type('21999999999');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();

    cy.getAllSessionStorage().then((result) => {
      expect(result).to.have.nested.property('http://localhost:5173');
      expect(result['http://localhost:5173']).to.have.any.keys('@meapoia.com:countdown', '@meapoia.com:register-flow')
    })

    cy.task('selectDB', "SELECT * FROM users WHERE email = 'usertest@meapoia.com'")
      .then(([result]: any) => {
        const code = result.register_flow.registerCode.split('');
        cy.get('input[data-id=0]').type(code[0])
        cy.get('input[data-id=1]').type(code[1])
        cy.get('input[data-id=2]').type(code[2])
        cy.get('input[data-id=3]').type(code[3])
        cy.get('input[data-id=4]').type(code[4])
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/register/set-password');
      });

    cy.visit('http://localhost:5173/register');

    cy.get('input#name').type('Another User Test');
    cy.get('input#email').type('usertest2@meapoia.com');
    cy.get('input#cpf').type('58154016095');
    cy.get('input#phoneNumber').type('21999999990');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();


    cy.task('selectDB', "SELECT * FROM users WHERE cpf = '581.540.160-95'")
    .then(([result]: any) => {
      expect(result).to.deep.include({
        name: 'Another User Test',
        email: 'usertest2@meapoia.com',
        cpf: '581.540.160-95',
        phone_number: '(21) 99999-9990',
      })
    });

    cy.url().should('include', '/register/set-password');
  });
});

context('Validação de conta', () => {
  beforeEach(() => {
    cy.clearAllSessionStorage()
    cy.task('clearDB', 'users');
    cy.visit('http://localhost:5173/register');
    cy.get('input#name').type('User test');
    cy.get('input#email').type('usertest@meapoia.com');
    cy.get('input#cpf').type('58154016095');
    cy.get('input#phoneNumber').type('21999999999');
    cy.get('input#terms').check();
    cy.get('button[type="submit"]').click();
  });

  it('Deve validar o código recebido por e-mail', () => {
    cy.task('selectDB', "SELECT * FROM users WHERE email = 'usertest@meapoia.com'")
      .then(([result]: any) => {
        const code = result.register_flow.registerCode.split('');
        cy.get('input[data-id=0]').type(code[0])
        cy.get('input[data-id=1]').type(code[1])
        cy.get('input[data-id=2]').type(code[2])
        cy.get('input[data-id=3]').type(code[3])
        cy.get('input[data-id=4]').type(code[4])
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/register/set-password');
      });
  });

  it('Deve exibir uma mensagem de erro quando o usuário digita um código inválido', () => {
    cy.getAllSessionStorage().then((result) => {
      expect(result).to.have.nested.property('http://localhost:5173');
      expect(result['http://localhost:5173']).to.have.any.keys('@meapoia.com:countdown', '@meapoia.com:register-flow')
    })

    cy.get('input[data-id=0]').type('0')
    cy.get('input[data-id=1]').type('0')
    cy.get('input[data-id=2]').type('0')
    cy.get('input[data-id=3]').type('0')
    cy.get('input[data-id=4]').type('0')
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="error-code"]').should(
      'have.text',
      'Código inválido.'
    );
  });

  it('Deve exibir uma mensagem de erro quando o usuário digita um código expirado', () => {
    cy.getAllSessionStorage().then((result) => {
      expect(result).to.have.nested.property('http://localhost:5173');
      expect(result['http://localhost:5173']).to.have.any.keys('@meapoia.com:countdown', '@meapoia.com:register-flow')
    })

    cy.task('selectDB', "SELECT * FROM users WHERE email = 'usertest@meapoia.com'")
      .then(([result]: any) => {
        const registerFlow = result.register_flow;
        registerFlow.registerAttemptCodeTime = '2023-01-01T03:01:55.490Z';

        cy.task('selectDB', `UPDATE users SET register_flow = '${JSON.stringify(registerFlow)}' WHERE email = 'usertest@meapoia.com'`).then(() => {

        const code = result.register_flow.registerCode.split('');
        cy.get('input[data-id=0]').type(code[0])
        cy.get('input[data-id=1]').type(code[1])
        cy.get('input[data-id=2]').type(code[2])
        cy.get('input[data-id=3]').type(code[3])
        cy.get('input[data-id=4]').type(code[4])
        cy.get('button[type="submit"]').click();

        cy.get('[data-testid="error-code"]').should(
        'have.text',
          'Código expirado, solicite o reenvio.'
        );
      });
    })


  });

  it('Deve ser possível reenviar um código de validação após 60 segundos', () => {
    cy.getAllSessionStorage().then((result) => {
      expect(result).to.have.nested.property('http://localhost:5173');
      expect(result['http://localhost:5173']).to.have.any.keys('@meapoia.com:countdown', '@meapoia.com:register-flow')
    })
    cy.get('[data-testid="resend-code"]').should('be.disabled');
    cy.wait(61 * 1000) // 61 seconds
    cy.get('[data-testid="resend-code"]').click()
     cy.get('.toast-text').should(
      'have.text',
      'Código reenviado'
    );
  });

  it('Não deve permitir reenviar um código de validação antes de 60 segundos', () => {
    cy.getAllSessionStorage().then((result) => {
      expect(result).to.have.nested.property('http://localhost:5173');
      expect(result['http://localhost:5173']).to.have.any.keys('@meapoia.com:countdown', '@meapoia.com:register-flow')
    })
    cy.get('[data-testid="resend-code"]').should('be.disabled');
  });

  it('Deve exibir uma mensagem de erro se o usuário tentar reenviar um código e seu cadastro não estiver presente na base de dados por qualquer motivo', () => {
    cy.get('[data-testid="resend-code" ]').should('be.disabled');
    cy.wait(61 * 1000) // 61 seconds

    cy.task('selectDB', "DELETE FROM users WHERE email = 'usertest@meapoia.com'")
      .then(() => {
        cy.get('[data-testid="resend-code"]').click()
        cy.url().should('include', '/register');
        cy.get('.toast-text').should(
          'have.text',
          'Seu cadastro não foi encontrado em nossa base de dados. Por favor, tente realizar seu cadastro novamente.'
        );
      });
  });
});

// context('Definição de senha', () => {
//   beforeEach(() => {
//     cy.clearAllSessionStorage()
//     cy.task('clearDB', 'users');
//     cy.visit('http://localhost:5173/register');
//     cy.get('input#name').type('User test');
//     cy.get('input#email').type('usertest@meapoia.com');
//     cy.get('input#cpf').type('58154016095');
//     cy.get('input#phoneNumber').type('21999999999');
//     cy.get('input#terms').check();
//     cy.get('button[type="submit"]').click();

//     cy.task('selectDB', "SELECT * FROM users WHERE email = 'usertest@meapoia.com'")
//       .then(([result]: any) => {
//         const code = result.register_flow.registerCode.split('');
//         cy.get('input[data-id=0]').type(code[0])
//         cy.get('input[data-id=1]').type(code[1])
//         cy.get('input[data-id=2]').type(code[2])
//         cy.get('input[data-id=3]').type(code[3])
//         cy.get('input[data-id=4]').type(code[4])
//         cy.get('button[type="submit"]').click();
//         cy.url().should('include', '/register/set-password');
//       });
//   });

//   it('Deve definir uma senha e ser redirecionado para o dashboard', () => {
//     cy.get('input#password').type('Batatinha123@')
//     cy.get('button[type="submit"]').click();
//     cy.wait(3001)

//     cy.task('selectDB', "SELECT * FROM users WHERE email = 'usertest@meapoia.com'")
//       .then(([result]: any) => {
//         expect(result.status === 'ACTIVE').to.be.true;
//       });
//     cy.url().should('include', '/dashboard');
//   });
// })

// context('Outros casos de uso', () => {
//   it('Deve exibir uma mensagem de erro caso o usuário acesse a página de validação de senha sem nenhum dado no session storage', () => {
//     cy.clearAllSessionStorage()
//     cy.visit('http://localhost:5173/register/verify-account');
//     cy.get('.toast-text').should(
//       'have.text',
//       'Sessão expirada. Tente novamente.'
//     );
//     cy.url().should('equal', 'http://localhost:5173/');
//   });

//   it('Deve exibir uma mensagem de erro caso o usuário acesse a página de definição de senha sem nenhum dado no session storage', () => {
//     cy.clearAllSessionStorage()
//     cy.visit('http://localhost:5173/register/set-password');
//     cy.get('.toast-text').should(
//       'have.text',
//       'Sessão expirada. Tente novamente.'
//     );
//     cy.url().should('equal', 'http://localhost:5173/');
//   });
// })
