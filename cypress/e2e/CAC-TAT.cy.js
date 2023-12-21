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
    cy.get(`button.button[type = "submit"]`).click();
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
    cy.get(`button.button[type = "submit"]`).click();
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
    cy.get("#email").type("email@mail");
    cy.get("#open-text-area").type(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid vero pariatur odit quas! Cum, sit vero odit maiores corporis veniam necessitatibus temporibus ab quis incidunt assumenda laboriosam dolorem?",
      { delay: 0 }
    );
    cy.get("#phone-checkbox").click();
    cy.get(`button.button[type = "submit"]`).click();
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
});
