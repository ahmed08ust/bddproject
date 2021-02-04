package steps;

import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import page.NewAccountPage;
import page.SideNavigation;
import util.BrowserFactory;

public class NewAccountSteps {
	WebDriver driver;
	LoginPage loginPage;
	SideNavigation sideNavigation;
	NewAccountPage newAccountPage;

	@Before
	public void init() {
		driver = BrowserFactory.startBrowser();

		loginPage = PageFactory.initElements(driver, LoginPage.class);
		sideNavigation = PageFactory.initElements(driver, SideNavigation.class);
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);

	}

	@Given("^a user with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void a_user_with_username_and_password(String userName, String password) {

		loginPage.login(userName, password);

	}
	@When("^user navigates to New Account page$")
	public void user_navigates_to_New_Account_page() throws Throwable {
	   sideNavigation.goToNewAccountPage();
	}

	@Then("^New Account Page should display$")
	public void new_Account_Page_should_display() throws Throwable {
		Assert.assertTrue("Page not found", newAccountPage.isPanelHeaderDisplayed());
	}

	@When("^user fills the form as Title \"([^\"]*)\" Description \"([^\"]*)\" Amount \"([^\"]*)\"$")
	public void user_fills_the_form_as_Title_Description_Amount(String accountTitle, String description, String balance) throws Throwable {
		Thread.sleep(2000);
		newAccountPage.fillInTheNewAccountForm(accountTitle + new Random().nextInt(99), description, balance);
	}
	
	@After
	public void TearDowm() throws InterruptedException {
		Thread.sleep(3000);

		driver.close();
		driver.quit();
	}
}
