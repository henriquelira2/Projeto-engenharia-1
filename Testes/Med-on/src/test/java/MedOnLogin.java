
import cucumber.runtime.junit.Assertions;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.*;
import java.util.concurrent.TimeUnit;

public class MedOnLogin {
    private WebDriver driver;
    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver","chromedriver_32/chromedriver.exe" );
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(60000, TimeUnit.MILLISECONDS);
    }
    @After
    public void tearDown() {

        driver.quit();
    }

    @Test
    public void abrirPageTest() {
        System.setProperty("web-driver.chrome.driver", "driver/chromedriver_32/chromedriver.exe");
        WebDriver webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();

        webDriver.get("https://medon.netlify.app/");
        assertEquals("https://medon.netlify.app/", webDriver.getCurrentUrl());
    }
    @Test
    public void LoginTest() {
        System.setProperty("web-driver.chrome.driver", "driver/chromedriver_32/chromedriver.exe");
        WebDriver navegador = new ChromeDriver();
        navegador.get("https://medon.netlify.app/usuarioLogin");
        navegador.manage().window().maximize();
        navegador.findElement(
                By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[2]/a[2]/button")).click();
        navegador.findElement(By.xpath("//*[@id=\"email\"]")).click();
        navegador.findElement(By.id("email")).sendKeys("deyvison_2022@hotmail.com");
        navegador.findElement(By.xpath("//*[@id=\"password\"]")).click();
        navegador.findElement(By.id("password")).sendKeys("02480248");
        navegador.findElement(By.xpath("//*[@id=\"form-login\"]/div[3]/div/button")).click();
    }

    @Test
    public  void SenhaInvalida() {
        System.setProperty("web-driver.chrome.driver", "driver/chromedriver_32/chromedriver.exe");
        WebDriver navegador = new ChromeDriver();
        navegador.get("https://medon.netlify.app/usuarioLogin");
        navegador.manage().window().maximize();
        navegador.findElement(
                By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[2]/a[2]/button")).click();
        navegador.findElement(By.xpath("//*[@id=\"email\"]")).click();
        navegador.findElement(By.id("email")).sendKeys("deyvison_0@hotmail.com");
        navegador.findElement(By.xpath("//*[@id=\"password\"]")).click();
        navegador.findElement(By.id("password")).sendKeys("123456");
        navegador.findElement(By.xpath("//*[@id=\"form-login\"]/div[3]/div/button")).click();
    }
    @Test
    public void UsuarioNaoRegistrado(){
        System.setProperty("web-driver.chrome.driver", "driver/chromedriver_32/chromedriver.exe");
        WebDriver navegador = new ChromeDriver();
        navegador.get("https://medon.netlify.app/usuarioLogin");
        navegador.manage().window().maximize();
        navegador.findElement(
                By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[2]/a[2]/button")).click();
        navegador.findElement(By.xpath("//*[@id=\"email\"]")).click();
        navegador.findElement(By.id("email")).sendKeys("deyvison_0@hotmail.com");
        navegador.findElement(By.xpath("//*[@id=\"password\"]")).click();
        navegador.findElement(By.id("password")).sendKeys("12345678");
        navegador.findElement(By.xpath("//*[@id=\"form-login\"]/div[3]/div/button")).click();
    }

    @Test
    public void SenhaCorreta(){
        System.setProperty("web-driver.chrome.driver", "driver/chromedriver_32/chromedriver.exe");
        WebDriver navegador = new ChromeDriver();
        navegador.get("https://medon.netlify.app/usuarioLogin");
        navegador.manage().window().maximize();

        navegador.findElement(
                By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[2]/a[2]/button")).click();
        navegador.findElement(By.xpath("//*[@id=\"email\"]")).click();
        navegador.findElement(By.id("email")).sendKeys("deyvison_2022@hotmail.com");
        navegador.findElement(By.xpath("//*[@id=\"password\"]")).click();
        navegador.findElement(By.id("password")).sendKeys("02480248");
        List<WebElement> password = navegador.findElements(By.id("password"));
        assertTrue(!password.isEmpty());
    }

    @Test
    public void CadastroDeConsulta(){
        System.setProperty("web-driver.chrome.driver", "driver/chromedriver_32/chromedriver.exe");
        WebDriver navegador = new ChromeDriver();
        navegador.get("https://medon.netlify.app/cadastrarConsulta");
        navegador.manage().window().maximize();
        navegador.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[1]/input")).click();
        navegador.findElement(By.name("tipo")).sendKeys("cardiologista");
        navegador.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[2]/input")).click();
        navegador.findElement(By.name("endereco")).sendKeys("rua jose camilo 102");
        navegador.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[3]/input")).click();
        navegador.findElement(By.name("data")).sendKeys("28.12.2022");
        navegador.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[4]/input")).click();
        navegador.findElement(By.name("hora")).sendKeys("16:40");
        navegador.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div[5]/button/a")).click();

    }
/**
@Test
public void medOnTest() {
    driver.get("https://medon.netlify.app/");
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
*/

}

