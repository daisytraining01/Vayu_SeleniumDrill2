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
      "name": "@FullSuit"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Fund Tranfer Between Primary Account to Savings Account",
  "description": "",
  "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters the credentials and login to the application\"\u003cuserdata\u003e\"_Vimal",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Navigate to transfer between own accounts page_Vimal",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User selects Primary to Savings transfer_Vimal",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Fund Transfer is succesfull_Vimal",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account;",
  "rows": [
    {
      "cells": [
        "userdata"
      ],
      "line": 17,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 18,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 19,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 20,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account;;4"
    },
    {
      "cells": [
        "4"
      ],
      "line": 21,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account;;5"
    },
    {
      "cells": [
        "5"
      ],
      "line": 22,
      "id": "title-of-your-feature;fund-tranfer-between-primary-account-to-savings-account;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 317878500,
  "status": "passed"
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
