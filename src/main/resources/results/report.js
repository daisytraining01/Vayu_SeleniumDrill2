$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Register_Login_Rajesh.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up and Login to TechFish Bank",
  "description": "",
  "id": "sign-up-and-login-to-techfish-bank",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FullSuit"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Sign up into Bank site",
  "description": "",
  "id": "sign-up-and-login-to-techfish-bank;sign-up-into-bank-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open bank application and click on signup button_Rajesh",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the personal details and click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User registration will be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup_drillday2_Rajesh.open_bank_application_and_click_on_signup_button_Rajesh()"
});
formatter.result({
  "duration": 10887507000,
  "status": "passed"
});
formatter.match({
  "location": "Signup_drillday2_Rajesh.user_enters_the_personal_details_and_click_on_register_button()"
});
