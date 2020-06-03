$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/TechFishBank_Deposit_Maree.feature");
formatter.feature({
  "line": 1,
  "name": "TechFishBank_Deposit",
  "description": "",
  "id": "techfishbank-deposit",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "To Validate successful Deposit to Savings Account",
  "description": "",
  "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Maree2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Sigin-In with Multiple users \"\u003cSQLQuery\u003e\" TechFishBank Application and Validate Dashboard_Maree",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Perform and Validate multiple Deposit \"\u003cSQLQuery\u003e\"for Savings Account_Maree",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Signout TechFishBank Application _Maree",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;",
  "rows": [
    {
      "cells": [
        "SQLQuery"
      ],
      "line": 16,
      "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;1"
    },
    {
      "cells": [
        "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit1\u0027;"
      ],
      "line": 17,
      "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;2"
    },
    {
      "cells": [
        "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit2\u0027;"
      ],
      "line": 18,
      "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;3"
    },
    {
      "cells": [
        "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit3\u0027;"
      ],
      "line": 19,
      "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;4"
    },
    {
      "cells": [
        "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit4\u0027;"
      ],
      "line": 20,
      "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;5"
    },
    {
      "cells": [
        "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit5\u0027;"
      ],
      "line": 21,
      "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "To Validate successful Deposit to Savings Account",
  "description": "",
  "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Maree2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Sigin-In with Multiple users \"SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit1\u0027;\" TechFishBank Application and Validate Dashboard_Maree",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Perform and Validate multiple Deposit \"SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit1\u0027;\"for Savings Account_Maree",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Signout TechFishBank Application _Maree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit1\u0027;",
      "offset": 30
    }
  ],
  "location": "Deposit_Maree.sigin_In_with_Multiple_users_TechFishBank_Application_and_Validate_Dashboard_Maree(String)"
});
formatter.result({
  "duration": 20123155700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Browsing context has been discarded\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAVBCP75\u0027, ip: \u0027192.168.43.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 77.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200528194502, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 24916, moz:profile: C:\\Users\\vimalrajv\\AppData\\..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 58ecd767-3ce0-4ab9-aeb4-18f3cb877d2b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.stepdefination.Deposit_Maree.sigin_In_with_Multiple_users_TechFishBank_Application_and_Validate_Dashboard_Maree(Deposit_Maree.java:163)\r\n\tat ✽.Given Sigin-In with Multiple users \"SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit1\u0027;\" TechFishBank Application and Validate Dashboard_Maree(Feature/TechFishBank_Deposit_Maree.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit1\u0027;",
      "offset": 39
    }
  ],
  "location": "Deposit_Maree.perform_and_Validate_multiple_Deposit_for_Savings_Account_Maree(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Deposit_Maree.signout_TechFishBank_Application__Maree()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "To Validate successful Deposit to Savings Account",
  "description": "",
  "id": "techfishbank-deposit;to-validate-successful-deposit-to-savings-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Maree2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Sigin-In with Multiple users \"SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit2\u0027;\" TechFishBank Application and Validate Dashboard_Maree",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Perform and Validate multiple Deposit \"SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit2\u0027;\"for Savings Account_Maree",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Signout TechFishBank Application _Maree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SELECT * FROM Maree where ScriptName \u003d\u0027SavingsDeposit\u0027 AND `Iteration`\u003d\u0027SavingsDeposit2\u0027;",
      "offset": 30
    }
  ],
  "location": "Deposit_Maree.sigin_In_with_Multiple_users_TechFishBank_Application_and_Validate_Dashboard_Maree(String)"
});
