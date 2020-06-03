package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		// Location of the feature file folder
		features = { "classpath:Feature/Register_Login_Rajesh.feature" },
		// Where my definition is written
		glue = { "classpath:com.stepdefination", "classpath:com.pageobject" },
		// Which tag needs to be executed
		tags = { "@FullSuit" },
		// Reports generations
		plugin = { "pretty", "html:src/main/resources/results/" },
		// creates body of the undefined functions
		dryRun = false,
		// To know the pass and fail statics
		monochrome = true)
public class Runner {

}
