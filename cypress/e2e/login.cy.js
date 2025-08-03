describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos devem permitir entrada no sistema', () => {
    cy.fazerLoginComCredenciaisValidas()
    cy.screenshot('apos-clicar-no-botao-entrar')
  
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos devem apresentar mensagem de erro', () => {
    cy.fazerLoginComCredenciaisInvalidas()
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})