$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/LoginPage.feature");
formatter.feature({
  "name": "Login Functionality Feature",
  "description": "  Agile Story: When user is on the login page of Air Space app\n  User should be able to login using valid credentials.\n  A/C:\n  1- Only authenticated user should be able to login\n  Link: https://the-internet.herokuapp.com/login\n  Authenticated test data:\n  Username: tomsmith\n  Password: SuperSecretPassword!\n  2- User should see \"You logged into a secure area!\" displayed when logged in.\n  3-Log out button should be displayed.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@airSpaceLogin"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Air Space login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_is_on_Air_Space_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I should be able to login by entering valid credentials and clicking on the Login button.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@airSpaceLogin"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@positiveLogin"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"tomsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_correct_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters correct password \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_correct_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks to login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_clicks_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be logged in to the secure area and be able to see message and log out button.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_should_be_logged_in_to_the_secure_area_and_be_able_to_see_message_and_log_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Air Space login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_is_on_Air_Space_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I should NOT be able to login by entering invalid username and I should see the warning message.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@airSpaceLogin"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.step({
  "name": "User enters incorrect username \"invalidUsername\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_incorrect_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters correct password \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_correct_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks to login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_clicks_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see the warning message displayed on the page about invalid username.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_should_see_the_warning_message_displayed_on_the_page_about_invalid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Air Space login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_is_on_Air_Space_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I should NOT be able to login by entering invalid password and I should see the warning message.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@airSpaceLogin"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"tomsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_correct_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters incorrect password \"invalidPassword\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_incorrect_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks to login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_clicks_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see the warning message displayed on the page about invalid password.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_should_see_the_warning_message_displayed_on_the_page_about_invalid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Air Space login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_is_on_Air_Space_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a user I should NOT be able to login by entering invalid credentials or blank field and I should see the warning message.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@airSpaceLogin"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.step({
  "name": "User enters incorrect username \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_incorrect_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters incorrect password \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_enters_incorrect_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks to login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_clicks_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see the warning message displayed on the page about invalid username.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage_StepDefs.user_should_see_the_warning_message_displayed_on_the_page_about_invalid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});