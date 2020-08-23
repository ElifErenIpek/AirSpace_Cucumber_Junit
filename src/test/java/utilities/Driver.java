package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Driver {

    private  static WebDriver driver;


    public static WebDriver getReference(){
        return driver;
    }
    private Driver(){

    }

    public static WebDriver getDriver (){
        if(driver==null){

            if ("chrome".equals(Config.getProperty("browser"))) {

                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();

//                case "firefox":
//                     WebDriverManager.firefoxdriver().setup();
//                    driver=new FirefoxDriver();
//                    break;
            }

            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.manage().window().maximize();

        }
        return driver;
    }


    public static void closeDriver(){

        if(driver!=null) {
            driver.quit();
            driver=null;
        }

    }


    public static void quitDriver() {
    }
}
