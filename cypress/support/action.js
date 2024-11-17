class actionType {
  visitSite() {
    cy.visit("https://www.saucedemo.com/");
  }
  login(email, password) {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[id="user-name"]').type(email);
    cy.get('[id="password"]').type(password);
    cy.get('[id="login-button"]').click();
    cy.url().should("include", "/inventory");
  }
  logout() {
    cy.get(".bm-burger-button").click();
    cy.get('[id="logout_sidebar_link"]').click();
  }
  assertErrorWithLockedUser() {
    cy.get(".error-message-container").contains(
      "Epic sadface: Sorry, this user has been locked out."
    );
    cy.get(".error-button").click();
    cy.get(".error-message-container").should(
      "not.contain.value",
      '[data-test="error"]'
    );
  }
  assertErrorWithInvalidUser() {
    cy.get(".error-message-container").contains(
      "Username and password do not match any user in this service"
    );
    cy.get(".error-button").click();
    cy.get(".error-message-container").should(
      "not.contain.value",
      '[data-test="error"]'
    );
  }
  assertProductPage() {}
}
export default actionType;
