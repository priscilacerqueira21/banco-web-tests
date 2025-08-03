Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
  cy.selecionarOpcaoComBox('conta-origem', contaOrigem)
    cy.selecionarOpcaoComBox('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
   
})