// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
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

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
