describe('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos devem permitir entrada no sistema', () => {
    cy.fixture('credenciais').then(credenciais => {
    cy.get('#username').click().type(credenciais.valida.usuario)
    cy.get('#senha').click().type(credenciais.valida.senha)
    })
    
    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-no-botao-entrar')
  
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos devem apresentar mensagem de erro', () => {
    cy.fixture('credenciais').then(credenciais => {
    cy.get('#username').click().type(credenciais.invalida.usuario)
    cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
      
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})