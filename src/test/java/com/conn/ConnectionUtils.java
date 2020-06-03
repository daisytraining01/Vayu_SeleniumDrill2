package com.conn;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;


import com.utilies.logs;





public class ConnectionUtils {
	 static WebDriver driver;
	 public static Calendar cal = Calendar.getInstance();
	 public static DateFormat For = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
	 public static String ExecutionStarttime = For.format(cal.getTime()).toString();
	 public static File resfold = null;
	public static String trfold = "";
	public static String timefold = "";
	public static final String Result_FLD = System.getProperty("user.dir") + "/Result";
	private Logger Log = Logger.getLogger(logs.class.getName());//
	public static ThreadLocal<WebDriver> dr = new ThreadLocal<WebDriver>();
	
	public static Connection getConnection() {
       return MySQLConnUtils.getMySQLConnection();
  }
   
  public static void closeQuietly(Connection conn) {
      try {
          conn.close();
      } catch (Exception e) {
      }
  }

  public static void rollbackQuietly(Connection conn) {
      try {
          conn.rollback();
      } catch (Exception e) {
      }
  }
  public void setDriver(WebDriver driver) {
		this.driver = driver;
	}
  public static void implicitWait(int timeSec) {
		driver.manage().timeouts().implicitlyWait(timeSec, TimeUnit.SECONDS);
	}
  public void createtimestampfold() {
		DateFormat dateFormat = new SimpleDateFormat("dd-MMM-yyyy");
		Calendar cal = Calendar.getInstance();

		try {

			resfold = new File(Result_FLD + "/" + dateFormat.format(cal.getTime()) + "/");
			if ((!resfold.exists()))
				resfold.mkdir();

			timefold = ExecutionStarttime.replace(":", "-").replace(" ", "_");
			File tresfold = new File(resfold + "/" + timefold + "/");
			if ((!tresfold.exists()))
				tresfold.mkdir();
			File screenshotfold = new File(resfold + "/" + timefold + "/screenshots");
			if ((!screenshotfold.exists()))
				screenshotfold.mkdir();
			trfold = tresfold.toString();
		} catch (Exception e) {
			e.getMessage();
		}
	}
  public void info(String message) {

		Log.info(message+"\r\n");

	}
  public String takescreenshot() { // Capture screenshot. //
	  String destDir = trfold + "/screenshots";
      File scrFile = ((TakesScreenshot) dr.get()).getScreenshotAs(OutputType.FILE);
      // Set date format to set It as screenshot file name.
      SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MMM-yyyy__hh_mm_ssaa");
      // Create folder under project with name "screenshots" provided to destDir.
      new File(destDir).mkdirs();
      // Set file name using current date time.
      String destFile = dateFormat.format(new Date()) + ".png";

      try {
          // Copy paste file at destination folder location
          FileUtils.copyFile(scrFile, new File(destDir + "/" + destFile));
          // Thread.sleep(100);
      } catch (IOException e) {
          e.printStackTrace();
      }
      return destFile;

	}
}
