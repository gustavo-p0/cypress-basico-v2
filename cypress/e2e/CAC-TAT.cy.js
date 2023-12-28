describe("Central de atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });

  // exercício 00
  it("verifica o titulo da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });
  // exercício 01
  it("Preenche os campos obrigatórios e envia o formulário", () => {
    cy.get("#firstName").type("Dutch");
    cy.get("#lastName").type("Salamandra");
    cy.get("#email").type("email@email.com");
    cy.get("#open-text-area").type(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid vero pariatur odit quas! Cum, sit vero odit maiores corporis veniam necessitatibus temporibus ab quis incidunt assumenda laboriosam dolorem?",
      { delay: 0 }
    );
    cy.contains("button", "Enviar").click();
    cy.get(`span.success`).should("be.visible");
  });

  // exercício 02
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Dutch");
    cy.get("#lastName").type("Salamandra");
    cy.get("#email").type("email@mail");
    cy.get("#open-text-area").type(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid vero pariatur odit quas! Cum, sit vero odit maiores corporis veniam necessitatibus temporibus ab quis incidunt assumenda laboriosam dolorem?",
      { delay: 0 }
    );
    cy.contains("button", "Enviar").click();
    cy.get("span.error").should("be.visible");
  });

  //exercicio 03
  it("verifica que o campo telefone fica em branco ao serem digitados caracteres inválidos", () => {
    cy.get("#phone").type("abcdefgh");
    cy.get("#phone").should("have.value", "");
  });

  //exercicio 04
  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Dutch");
    cy.get("#lastName").type("Salamandra");
    cy.get("#email").type("email@email.com");
    cy.get("#open-text-area").type(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid vero pariatur odit quas! Cum, sit vero odit maiores corporis veniam necessitatibus temporibus ab quis incidunt assumenda laboriosam dolorem?",
      { delay: 0 }
    );
    cy.get("#phone-checkbox").click();
    cy.contains("button", "Enviar").click();
    cy.get("span.error").should("be.visible");
  });

  //exercicio 05
  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName").type("Alguem");
    cy.get("#firstName").should("have.value", "Alguem");
    cy.get("#firstName").clear();
    cy.get("#firstName").should("have.value", "");

    cy.get("#lastName").type("Someone");
    cy.get("#lastName").should("have.value", "Someone");
    cy.get("#lastName").clear();
    cy.get("#lastName").should("have.value", "");

    cy.get("#email").type("email@email.com");
    cy.get("#email").should("have.value", "email@email.com");
    cy.get("#email").clear();
    cy.get("#email").should("have.value", "");
  });

  // exercicio 06
  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.get(`button.button[type="submit"]`).click();
    cy.get(`span.error`).should("be.visible");
  });

  it("envia o formulário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();
  });

  //exercicio 03-1
  it("seleciona um produto (YouTube) por seu texto", () => {
    cy.get("#product").select("YouTube");
    cy.get("#product").should("have.value", "youtube");
  });

  //exercicio 03-2
  it("seleciona um produto (Mentoria) por seu valor (value)", () => {
    cy.get("#product").select("mentoria");
    cy.get("#product").should("have.value", "mentoria");
  });

  //exercicio 03-3
  it("seleciona um produto (Blog) por seu índice", () => {
    cy.get("#product").select(1);
    cy.get("#product").should("have.value", "blog");
  });

  //   Exercício  04-1

  // Crie um teste chamado marca o tipo de atendimento "Feedback"
  // Faça a verificação que o valor correto foi selecionado após o .check()
  // Por fim, execute o novo teste no Test Runner

  it(`marca o tipo de atendimento "Feedback"`, () => {
    cy.get(`input[type="radio"][value="feedback"]`).check();
    cy.get(`input[type="radio"][value="feedback"]`).should("be.checked");
  });

  //   Exercício extra 04-2

  // Crie um teste chamado marca cada tipo de atendimento
  // Faça a verificação de que após o .check(), cada radio foi marcado (.should('be.checked'))
  // Por fim, execute o novo teste no Test Runner

  it.only("marca cada tipo de atendimento", () => {
    cy.get(`input[type="radio"][value="elogio"]`).check();
    cy.get(`input[type="radio"][value="elogio"]`).should("be.checked");
    cy.get(`input[type="radio"][value="feedback"]`).check();
    cy.get(`input[type="radio"][value="feedback"]`).should("be.checked");
    cy.get(`input[type="radio"][value="ajuda"]`).check();
    cy.get(`input[type="radio"][value="ajuda"]`).should("be.checked");
  });
});
