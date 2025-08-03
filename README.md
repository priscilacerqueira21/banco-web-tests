
# banco-web-tests

Este projeto tem como objetivo automatizar testes de aplicações web utilizando **Cypress** e **JavaScript**, com foco na organização de código e boas práticas.

## 🎯 Objetivo

Automatizar cenários de testes para a aplicação **Banco Web**, utilizando:

* Boas práticas de organização
* Comandos customizados

---

## 🧩 Componentes do Projeto

* **Cypress**: Framework principal de automação de testes end-to-end.
* **Custom Commands**: Comandos personalizados para reutilização de lógicas comuns nos testes (em `cypress/support/commands/`).

### 📁 Estrutura de Pastas

```
banco-web-tests/
├── cypress/
│   ├── e2e/              # Scripts de testes automatizados
│   ├── fixtures/         # Dados de apoio para os testes
│   ├── support/          # Configurações e comandos customizados
```

---

## ⚙️ Pré-requisitos

* Node.js instalado
* Clonar e executar a API e a aplicação Web localmente

---

## 📦 Instalação

Clone este repositório:

```bash
git clone https://github.com/priscilacerqueira21/banco-web-tests.git
cd banco-web-tests
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Execução dos Testes

### Headless (modo silencioso):

```bash
npm test
```

### Com interface gráfica do Cypress:

```bash
npm run cy:open
```

### Em modo headed (com navegador visível):

```bash
npm run cy:headed
```
---

## 🧪 Estrutura dos Testes

* `cypress/e2e/login.cy.js`: Testes de login
* `cypress/e2e/transferencia.cy.js`: Testes de transferência bancária

---

## 🛠️ Comandos Customizados

Localização:

* `cypress/support/commands/common.js`: Comandos utilitários gerais
* `cypress/support/commands/login.js`: Comandos de login
* `cypress/support/commands/transferencia.js`: Comandos de transferência bancária

Para usar em seus testes:

cy.nomeDoComando()
```

---

## 📌 Observações

* Certifique-se de que a API e a aplicação Web estejam **rodando** antes de executar os testes.
* Dados de acesso e exemplos estão em:
  `cypress/fixtures/`

---

