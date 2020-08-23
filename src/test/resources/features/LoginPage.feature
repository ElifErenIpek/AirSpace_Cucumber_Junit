@airSpaceLogin @Regression @Smoke

Feature: Login Functionality Feature

  Agile Story: When user is on the login page of Air Space app
  User should be able to login using valid credentials.
  A/C:
  1- Only authenticated user should be able to login
  Link: https://the-internet.herokuapp.com/login
  Authenticated test data:
  Username: tomsmith
  Password: SuperSecretPassword!
  2- User should see "You logged into a secure area!" displayed when logged in.
  3-Log out button should be displayed.

  Background:
    When User is on Air Space login page

  @positiveLogin
  Scenario: As a user I should be able to login by entering valid credentials and clicking on the Login button.

    When User enters correct username "tomsmith"
    And User enters correct password "SuperSecretPassword!"
    And User clicks to login button
    Then User should be logged in to the secure area and be able to see message and log out button.


  @negativeLogin
  Scenario: As a user I should NOT be able to login by entering invalid username and I should see the warning message.

    When User enters incorrect username "invalidUsername"
    And User enters correct password "SuperSecretPassword!"
    And User clicks to login button
    Then User should see the warning message displayed on the page about invalid username.

  @negativeLogin
  Scenario: As a user I should NOT be able to login by entering invalid password and I should see the warning message.

    When User enters correct username "tomsmith"
    And User enters incorrect password "invalidPassword"
    And User clicks to login button
    Then User should see the warning message displayed on the page about invalid password.


  @negativeLogin
  Scenario: As a user I should NOT be able to login by entering invalid credentials or blank field and I should see the warning message.


    When User enters incorrect username ""
    And User enters incorrect password ""
    And User clicks to login button
    Then User should see the warning message displayed on the page about invalid username.
