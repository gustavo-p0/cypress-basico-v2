describe("Central de atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("src/index.html");
  });
  // exercício 00
  it("verifica o titulo da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });
});
