/// <reference types="cypress" />
import actionType from "../support/action";
const letUser = Cypress.env("login_test_data");
const execute = new actionType();

it("Login with Valid User Credentials then Logout", () => {
  execute.login(letUser.valid_user, letUser.password);
  execute.logout();
});

it("Login with Locked Out User Account", () => {
  execute.login(letUser.locked_user, letUser.password);
  execute.assertErrorWithLockedUser();
});

it("Login with Invalid user Credentials", () => {
  execute.login(letUser.invalid_user, letUser.password);
  execute.assertErrorWithInvalidUser();
});
