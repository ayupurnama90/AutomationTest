/// <reference types="cypress" />
import actionType from "../support/action";
const letUser = Cypress.env("login_test_data");
const execute = new actionType();

beforeEach(() => {
  execute.login(letUser.valid_user, letUser.password);
});

context("Verify Home Products List Page", () => {
  it("Verify Product Catalog Layout", () => {
    cy.contains('[data-test="primary-header"]', "Swag Labs").then(
      (primaryHeader) => {
        const menu = primaryHeader.find(".bm-burger-button");
        const headerTitle = primaryHeader.find(".header_label");
        const shoppingChart = primaryHeader.find(".shopping_cart_container");
        expect(menu).to.be.visible;
        expect(headerTitle).to.contain("Swag Labs");
        expect(shoppingChart).to.be.visible;
      }
    );

    cy.get('[data-test="secondary-header"]')
      .find(".title")
      .should("contain", "Products");

    cy.get(".inventory_container")
      .find(".inventory_list")
      .should("have.class", ".inventory_item_img");
  });
});
