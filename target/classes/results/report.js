$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/TransferBetweenAccounts_Vimal.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 34,
      "value": "#|         7 |"
    }
  ],
  "line": 37,
  "name": "Fund Tranfer Between Primary Account to Savings Account with a invalid amount",
  "description": "",
  "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account-with-a-invalid-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User enters the credentials and login to the application\"\u003cuserdata2\u003e\"_Vimal",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Navigate to transfer between own accounts page_Vimal",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User selects Primary to Savings transfer and enters a invalid amount_Vimal",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Fund Transfer is should be rejected_Vimal",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account-with-a-invalid-amount;",
  "rows": [
    {
      "cells": [
        "userdata2"
      ],
      "line": 44,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account-with-a-invalid-amount;;1"
    },
    {
      "cells": [
        "8"
      ],
      "line": 45,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account-with-a-invalid-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launch the browser_Vimal",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to the URL_Vimal",
  "keyword": "When "
});
formatter.match({
  "location": "TransferBetweenAccounts_Vimal.launch_the_browser_Vimal()"
});
formatter.result({
  "duration": 10773041800,
  "status": "passed"
});
formatter.match({
  "location": "TransferBetweenAccounts_Vimal.navigate_to_the_URL_Vimal()"
});
formatter.result({
  "duration": 4574179800,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Fund Tranfer Between Primary Account to Savings Account with a invalid amount",
  "description": "",
  "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account-with-a-invalid-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@tag3"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User enters the credentials and login to the application\"8\"_Vimal",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Navigate to transfer between own accounts page_Vimal",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User selects Primary to Savings transfer and enters a invalid amount_Vimal",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Fund Transfer is should be rejected_Vimal",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 57
    }
  ],
  "location": "TransferBetweenAccounts_Vimal.user_enters_the_credentials_and_login_to_the_application__Vimal(String)"
});
formatter.result({
  "duration": 20866353200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.61)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAVBCP75\u0027, ip: \u0027192.168.43.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\VIMALR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cb28d70a47866058461663d6c6ad094c\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027Primary Balance:\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefination.TransferBetweenAccounts_Vimal.user_enters_the_credentials_and_login_to_the_application__Vimal(TransferBetweenAccounts_Vimal.java:56)\r\n\tat ✽.Given User enters the credentials and login to the application\"8\"_Vimal(Feature/TransferBetweenAccounts_Vimal.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TransferBetweenAccounts_Vimal.navigate_to_transfer_between_own_accounts_page_Vimal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TransferBetweenAccounts_Vimal.user_selects_Primary_to_Savings_transfer_and_enters_a_invalid_amount_Vimal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TransferBetweenAccounts_Vimal.fund_Transfer_is_should_be_rejected_Vimal()"
});
formatter.result({
  "status": "skipped"
});
});