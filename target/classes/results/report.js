$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Addrecipient_varun.feature");
formatter.feature({
  "line": 2,
  "name": "Add Recipient In the TechFish Bank",
  "description": "",
  "id": "add-recipient-in-the-techfish-bank",
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
  "name": "Login into a TechFish Bank website_varun",
  "description": "",
  "id": "add-recipient-in-the-techfish-bank;login-into-a-techfish-bank-website-varun",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Varun1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the username and password and add the Add Recipient",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Recipient Information successfully Created.",
  "keyword": "Then "
});
formatter.match({
  "location": "FillingRecipientInformation.user_open_the_URL()"
});
formatter.result({
  "duration": 16566771000,
  "status": "passed"
});
formatter.match({
  "location": "FillingRecipientInformation.user_enters_the_username_and_password_and_add_the_Add_Recipient()"
});
formatter.result({
  "duration": 65492800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.61)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAVBCP75\u0027, ip: \u0027192.168.43.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\VIMALR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55125}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 73889db1f07e6fb7de7baa80321464a6\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Transfer\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefination.FillingRecipientInformation.user_enters_the_username_and_password_and_add_the_Add_Recipient(FillingRecipientInformation.java:47)\r\n\tat ✽.When User enters the username and password and add the Add Recipient(Feature/Addrecipient_varun.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FillingRecipientInformation.recipient_Information_successfully_Created()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "User checks the List of Recipient_varun1",
  "description": "",
  "id": "add-recipient-in-the-techfish-bank;user-checks-the-list-of-recipient-varun1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Varun2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user click on the particular recipient name",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user Validate the data",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "All data correct is created successfully under the recipient list",
  "keyword": "Then "
});
formatter.match({
  "location": "FillingRecipientInformation.user_click_on_the_particular_recipient_name()"
});
formatter.result({
  "duration": 134862200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.61)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAVBCP75\u0027, ip: \u0027192.168.43.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\VIMALR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55125}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 73889db1f07e6fb7de7baa80321464a6\n*** Element info: {Using\u003dlink text, value\u003dVarun Mishra}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefination.FillingRecipientInformation.user_click_on_the_particular_recipient_name(FillingRecipientInformation.java:99)\r\n\tat ✽.Given user click on the particular recipient name(Feature/Addrecipient_varun.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FillingRecipientInformation.user_Validate_the_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FillingRecipientInformation.all_data_correct_is_created_successfully_under_the_recipient_list()"
});
formatter.result({
  "status": "skipped"
});
});