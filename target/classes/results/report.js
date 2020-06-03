$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/PrimaryBalance_Nisha.feature");
formatter.feature({
  "line": 2,
  "name": "Techfish_Nisha",
  "description": "I want to check my Primary and Savings Balance_Nisha",
  "id": "techfish-nisha",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FullSuit"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "User login_Nisha",
  "description": "",
  "id": "techfish-nisha;user-login-nisha",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open the URL_Nisha",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "when i enter \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"_Nisha",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Savings Balance_Nisha",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "close_Nisha1",
  "keyword": "Then "
});
formatter.match({
  "location": "PrimaryBalance_Nisha.open_the_URL()"
});
