package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {



    public LoginPage(){PageFactory.initElements(Driver.getDriver(),this);}


    @FindBy(id="username")
    public WebElement userNameBox;

    @FindBy(id="password")
    public WebElement passwordBox;

    @FindBy(xpath="//button[@class='radius']")
    public WebElement loginButton;

    @FindBy(xpath = "//div[@id='flash']")
    public WebElement textMessage;

    @FindBy(linkText="Logout")
    public WebElement logOutButton;





}
