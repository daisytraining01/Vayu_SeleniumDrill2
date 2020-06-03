package com.stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

 

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeMethod;

import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class Register_ViewProfile_Sakthivel {

    static WebDriver driver;

    @BeforeMethod
	@Given("^user to open the application with URL_sakthi$")
	public void user_to_open_the_application_with_URL_sakthi() throws ClassNotFoundException, SQLException
	{
		
		Class.forName("com.mysql.cj.jdbc.Driver");  
		
		Connection connection = DriverManager.getConnection("jdbc:mysql://elastic.rapidtestpro.com:2777/Vayusakthi","belitypi","47GWrkhPknA3");
				
		Statement statement = connection.createStatement();
		
		ResultSet resultset = statement.executeQuery("SELECT * FROM VayuRegister;");//
		
		while(resultset.next())
		{
		
			System.out.println("First Name: " +resultset.getString(1) +" "+
								"Last Name: " +resultset.getString(2) +" "+
								"Phone: " +resultset.getInt(3) +" "+
								"Your Email: " +resultset.getString(4) +" "+
								"Username: " +resultset.getString(5) +" "+
								"Password: " +resultset.getString(6));
			
			
			  String FirstName = resultset.getString("First Name"); String LastName =
			  resultset.getString("Last Name"); String YourEmail =
			  resultset.getString("Your Email"); int phone = resultset.getInt("Phone");
			  String username = resultset.getString("UserName"); String Password =
			  resultset.getString("Password");
			  
			  WebDriverManager.chromedriver().setup();
			        driver =new ChromeDriver();
			  
			  
			  driver.get("http://elastic.rapidtestpro.com:8086/index?logout");
			  
			  WebElement Signup = driver.findElement(By.
			  xpath("//a[@class='btn btn-info btn-lg btn-block login-button']"));
			  Signup.click();
			  
			  WebElement LinkFirstname = driver.findElement(By.name("firstName"));
			  LinkFirstname.sendKeys(FirstName);
			  
			  WebElement LinkLastname1 = driver.findElement(By.name("lastName"));
			  LinkLastname1.sendKeys(LastName);
			  
			  WebElement LinkPhone = driver.findElement(By.name("phone"));
			  LinkPhone.sendKeys(YourEmail);
			  
			  WebElement LinkYouremail = driver.findElement(By.name("email"));
			  LinkYouremail.sendKeys("YourEmail");
			  
			  WebElement Linkusename = driver.findElement(By.name("username"));
			  Linkusename.sendKeys(username);
			  
			  WebElement Linkpassword = driver.findElement(By.name("password"));
			  Linkpassword.sendKeys(Password);		 
			 
			
		}
		resultset.close();	
		statement.close();
		connection.close();			
	    
		
	}

	@When("^user input the Registration details_sakthi$")
	public void user_input_the_Registration_details_sakthi() throws InterruptedException 
	{
	 
			
	}

	@Then("^User submitted the registraion successfully_sakthi$")
	public void user_submitted_the_registraion_successfully_sakthi()
	{
		
			WebElement submit = driver.findElement(By.xpath("//button[@class='btn btn-primary btn-lg btn-block login-button']"));
		  submit.click();
		
	}

	@Given("^user login valid (.*?)_sakthi$")
	public void user_login_with_the_valid_username__sakthi()
	{
	 
	}

	@When("^user login with the valid (.*?)_sakthi$")
	public void user_login_with_the_valid_password__sakthi()
	{
	 
	}

	@Then("^User modified successfully_sakthi$")
	public void user_login_successfully_sakthi()
	{
	 
	}

	
}
