package com.stepdefination;

import java.util.ArrayList;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.conn.ConnectionUtils;
import com.conn.DBFunctions;

import com.utilies.logs;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import com.aventstack.extentreports.*;

public class StepDefinition extends ConnectionUtils {
	WebDriver driver;
	ConnectionUtils utils = new ConnectionUtils();
	static logs clog = new logs();

	ArrayList<String> names = null;
	ArrayList<String> secnames = null;
	static ExtentReports extent;
	static ExtentHtmlReporter htmlReporter;
	static ExtentTest test;

	@Before
	public void configExtent() throws Exception {

		createtimestampfold();
		ArrayList<String> names = new ArrayList<String>();
		secnames = new ArrayList<String>();
		extent = new ExtentReports();
		htmlReporter = new ExtentHtmlReporter(trfold + "/Master.html");
		extent.attachReporter(htmlReporter);
		System.setProperty("logfilename", trfold + "/Logs");
		clog.info("Starting execution at :" + ExecutionStarttime);
	}

	@Given("^user fetches the details from DB_Nitin$")
	public void user_fetches_the_details_from_DB_Nitin() throws Throwable {
		try {

			names = DBFunctions.getMydetails();
			test = extent.createTest(names.get(0) + " Logged in to Fish app");
			test.log(Status.PASS, "<b>user fetches the details from DB_Nitin</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user fetches the details from DB_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Given("user fetches the details from secondDB_Nitin$")
	public void user_fetches_the_details_from_secondDB_Nitin() throws Throwable {
		try {

			names = DBFunctions.getMydetails();
			test = extent.createTest(" second used Logged in to  Fish app");
			test.log(Status.PASS, "<b>user fetches the details from secondDB_Nitin</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user fetches the details from secondDB_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Given("^user navigates to webpage_Nitin$")
	public void user_navigates_to_webpage_Nitin() throws Throwable {
		try {
			System.setProperty("webdriver.chrome.driver", "src/main/java/driver/chromedriver.exe");
			driver = new ChromeDriver();
			utils.setDriver(driver);

			driver.manage().window().maximize();
			ConnectionUtils.implicitWait(30);
			driver.get("http://elastic.rapidtestpro.com:8086/index");
			test.log(Status.PASS, "<b>Lunches the browser</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user navigates to webpage_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Given("^user enters the login Credential_Nitin$")
	public void user_enters_the_login_Credential_Nitin() throws Throwable {

		try {

			driver.findElement(By.xpath("//*[@id='username']")).sendKeys(names.get(0));
			Thread.sleep(2000);
			test.log(Status.PASS, "<b>Enters username -->" + names.get(0) + "</b>");
			driver.findElement(By.xpath("//*[@id='password']")).sendKeys(names.get(1));
			// test.addScreenCaptureFromPath("screenshots/" + takescreenshot());
			test.log(Status.PASS, "<b>Enters Password -->" + names.get(1) + "</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user enters the login Credential_Nitin" + e.getMessage() + "</b>");
		}
	}

	@When("^user clicks login button_Nitin$")
	public void user_clicks_login_button_Nitin() throws Throwable {
		try {
			driver.findElement(By.xpath("//button[contains(text(),'Sign in')]")).click();

			// button[contains(text(),'Sign in')]
			test.log(Status.PASS, "<b>Clicks the login button</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user clicks login button_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Then("^user validates the information_Nitin$")
	public void user_validates_the_information_Nitin() throws Throwable {
		try {
			WebElement ele = driver.findElement(By.xpath("//span[contains(text(),'Go to Withdrawal')]"));
			String actual = ele.getText();
			if (actual.equalsIgnoreCase("Go to Withdrawal")) {
				System.out.println("Assertion passed   --> Logged in to Fish bank");
				test.log(Status.PASS, "<b>Logged in to Fish bank</b>");
			}
			// update before withdraw amount and after with draw amount in db
			String beforebalance = driver.findElement(By.xpath("(//div[@class='col-xs-6 text-right']/h1/span)[1]"))
					.getText();
			String savingbefore = driver.findElement(By.xpath("(//div[@class='col-xs-6 text-right']/h1/span)[2]"))
					.getText();
			test.log(Status.PASS, "<b>Before withdraw primary balance-->" + beforebalance + "</b>");
			test.log(Status.PASS, "<b>Before withdraw savings balance-->" + savingbefore + "</b>");
			DBFunctions.updatetoDB(beforebalance, savingbefore);
			// driver.findElement(By.xpath("//button[contains(text(),'Withdraw')]")).click();
			Thread.sleep(5000);

		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user validates the information_Nitin" + e.getMessage() + "</b>");
		}
	}

	@When("^user navigates to withdraw page_Nitin$")
	public void user_navigates_to_withdraw_page_Nitin() throws Throwable {
		try {

			WebElement ele = driver.findElement(By.xpath("//span[contains(text(),'Go to Withdrawal')]"));
			ele.click();
			test.log(Status.PASS, "<b>user clicks on go to withdrawal link</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user navigates to withdraw page_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Then("^user validates the Withdrawpage should display_Nitin$")
	public void user_validates_the_Withdrawpage_should_display_Nitin() throws Throwable {
		try {
			WebElement ele = driver.findElement(
					By.xpath("//label[contains(text(),'Please select the account you would like to withdraw:')]"));
			String actual = ele.getText();
			if (actual.equalsIgnoreCase(
					"//label[contains(text(),'1. Please select the account you would like to withdraw:')]")) {
				System.out.println("Assertion passed   --> In Withdraw page");
				test.log(Status.PASS, "<b>Verifying whether user is in withdraw page</b>");
			}

		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user validates the Withdrawpage should display_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Then("^user selects primary acccount in accounts dropdown_Nitin$")
	public void user_selects_primary_acccount_in_accounts_dropdown_Nitin() throws Throwable {
		try {
			Select sel = new Select(driver.findElement(By.xpath("//select[@id='accountType']")));
			sel.selectByVisibleText("Primary");
			DBFunctions.accountName_saving("Primary");
			test.log(Status.PASS, "<b>Select the Primary Account</b>");
		} catch (Exception e) {
			test.log(Status.FAIL,
					"<b>user selects primary acccount in accounts dropdown_Nitin" + e.getMessage() + "</b>");
		}

	}

	@Then("^user enters amount that would like to withdraw_Nitin$")
	public void user_enters_amount_that_would_like_to_withdraw_Nitin() throws Throwable {
		try {
			System.out.println(names.get(2));
			driver.findElement(By.xpath("//input[@id='amount']")).sendKeys(names.get(2));
			test.log(Status.PASS, "<b>Enters the amount -->" + names.get(2) + "</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user enters amount that would like to withdraw_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Then("^user enters savings amount that would like to withdraw_Nitin$")
	public void user_enters_savings_amount_that_would_like_to_withdraw_Nitin() throws Throwable {
		try {
			// System.out.println(secnames.get(6));
			driver.findElement(By.xpath("//input[@id='amount']")).sendKeys(names.get(6));
			test.log(Status.PASS, "<b>Enters the amount -->" + secnames.get(6) + "</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user enters amount that would like to withdraw_Nitin" + e.getMessage() + "</b>");
		}
	}

	@Then("^user clicks on withdraw button_Nitin$")
	public void user_clicks_on_withdraw_button_Nitin() throws Throwable {
		try {
			driver.findElement(By.xpath("//button[contains(text(),'Withdraw')]")).click();
			Thread.sleep(5000);
			String beforebalance = driver.findElement(By.xpath("(//div[@class='col-xs-6 text-right']/h1/span)[1]"))
					.getText();
			String savingbefore = driver.findElement(By.xpath("(//div[@class='col-xs-6 text-right']/h1/span)[2]"))
					.getText();
			test.log(Status.PASS, "<b>Before withdraw primary balance-->" + beforebalance + "</b>");
			test.log(Status.PASS, "<b>Before withdraw savings balance-->" + savingbefore + "</b>");
			DBFunctions.updatetoDB_after(beforebalance, savingbefore);
			test.log(Status.PASS, "<b>Clcik on with draw button and update to database</b>");
		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user clicks on withdraw button_Nitin" + e.getMessage() + "</b>");
		}

	}

	@And("^user logs out from the applicaton_Nitin$")
	public void user_logs_out_from_the_applicaton_Nitin() throws Throwable {
		try {
			driver.findElement(By.xpath("(//a[@class='dropdown-toggle'])[4]")).click();

			driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
			test.log(Status.PASS, "<b>Clcik on with draw button and update to database</b>");
			DBFunctions.changeflagstatus();
			driver.close();

		} catch (Exception e) {
			test.log(Status.FAIL, "<b>user logs out from the applicaton_Nitin" + e.getMessage() + "</b>");
		}

	}

	@Then("^user selects savings acccount in accounts dropdown_Nitin$")
	public void user_selects_savings_acccount_in_accounts_dropdown_Nitin() throws Throwable {
		try {
			Select sel = new Select(driver.findElement(By.xpath("//select[@id='accountType']")));
			sel.selectByVisibleText("Savings");
			DBFunctions.accountName_saving("Savings");
			test.log(Status.PASS, "<b>Selected the savings Account</b>");
		} catch (Exception e) {
			test.log(Status.FAIL,
					"<b>user selects savings acccount in accounts dropdown_Nitin" + e.getMessage() + "</b>");
		}
	}

	@After
	public void flushthereport() {
		extent.flush();
	}

}
