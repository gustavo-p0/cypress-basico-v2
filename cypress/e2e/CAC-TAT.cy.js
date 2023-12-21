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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid vero pariatur odit quas! Cum, sit vero odit maiores corporis veniam necessitatibus temporibus ab quis incidunt assumenda laboriosam dolorem?"
    );
    cy.get(`button.button[type = "submit"]`).click();
    cy.get(`span.success`).should("be.visible");
  });
});
