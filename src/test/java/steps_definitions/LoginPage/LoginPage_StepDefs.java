package steps_definitions.LoginPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.LoginPage;
import utilities.Config;
import utilities.Driver;

public class LoginPage_StepDefs {



    LoginPage loginPage=new LoginPage();


    @When("User is on Air Space login page")
    public void user_is_on_Air_Space_login_page() {

        Driver.getDriver().get(Config.getProperty("AirSpaceUrl"));
    }

    @When("User enters correct username {string}")
    public void user_enters_correct_username(String username) {

        loginPage.userNameBox.sendKeys(username);
    }

    @When("User enters correct password {string}")
    public void user_enters_correct_password(String password) {

        loginPage.passwordBox.sendKeys(password);
    }

    @When("User clicks to login button")
    public void user_clicks_to_login_button() {

        Assert.assertTrue(loginPage.loginButton.isEnabled());
        loginPage.loginButton.click();
    }

    @Then("User should be logged in to the secure area and be able to see message and log out button.")
    public void user_should_be_logged_in_to_the_secure_area_and_be_able_to_see_message_and_log_out_button() {

        String actualMessage= loginPage.textMessage.getText();
        String expectedMessage= "You logged into a secure area!";

        Assert.assertTrue("Texts are not matching. Assertion failed.",actualMessage.contains(expectedMessage));
        Assert.assertTrue("Log out button is NOT displayed.",loginPage.logOutButton.isEnabled());
    }

    @When("User enters incorrect username {string}")
    public void user_enters_incorrect_username(String username) {

        loginPage.userNameBox.sendKeys(username);
    }

    @Then("User should see the warning message displayed on the page about invalid username.")
    public void user_should_see_the_warning_message_displayed_on_the_page_about_invalid_username() {


        String actualMessage= loginPage.textMessage.getText();
        String expectedMessage= "Your username is invalid!";

        Assert.assertTrue("Texts are not matching. Assertion failed.",actualMessage.contains(expectedMessage));
    }

    @When("User enters incorrect password {string}")
    public void user_enters_incorrect_password(String password) {

        loginPage.passwordBox.sendKeys(password);
    }


    @Then("User should see the warning message displayed on the page about invalid password.")
    public void user_should_see_the_warning_message_displayed_on_the_page_about_invalid_password() {

        String actualMessage= loginPage.textMessage.getText();
        String expectedMessage= "Your password is invalid!";

        Assert.assertTrue("Texts are not matching. Assertion failed.",actualMessage.contains(expectedMessage));
    }



}
