
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class MedOnTestTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void medOnTest() {
    driver.get("https://medon.netlify.app/");
    driver.manage().window().setSize(new Dimension(1382, 784));
    driver.findElement(By.cssSelector(".css-entrar")).click();
    assertThat(driver.findElement(By.cssSelector(".btn-outline-primary")).getText(), is("Paciente"));
    driver.findElement(By.cssSelector(".btn-outline-primary")).click();
    driver.findElement(By.id("email")).click();
    driver.findElement(By.id("email")).sendKeys("deyvison_2022@hotmail.com");
    driver.findElement(By.id("password")).click();
    driver.findElement(By.id("password")).sendKeys("02480248");
    assertThat(driver.findElement(By.cssSelector(".btn2")).getText(), is("Login"));
    driver.findElement(By.cssSelector(".btn2")).click();
    driver.findElement(By.name("tipo")).click();
    driver.findElement(By.name("tipo")).sendKeys("cardiologista");
    driver.findElement(By.name("endereco")).click();
    driver.findElement(By.name("endereco")).sendKeys("rua jose camilo");
    driver.findElement(By.name("endereco")).click();
    driver.findElement(By.name("endereco")).sendKeys("rua jose camilo 102");
    driver.findElement(By.name("data")).click();
    driver.findElement(By.name("data")).sendKeys("28/11/22");
    driver.findElement(By.name("data")).click();
    driver.findElement(By.name("data")).sendKeys("28-12-22");
    driver.findElement(By.name("hora")).click();
    driver.findElement(By.name("hora")).sendKeys("16:40");
    driver.findElement(By.linkText("Cadastrar")).click();
    driver.findElement(By.cssSelector(".map2:nth-child(3) a")).click();
    driver.findElement(By.cssSelector(".map2:nth-child(3) a")).click();
  }
}
