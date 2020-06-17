package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features", glue = "stepDefinitions", stepNotifications = true, plugin = {
		"html:target/htmlReport", "json:target/jsonReport/cucumber.json" }, dryRun = false, strict = true)
public class Runner {

}
