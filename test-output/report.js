$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/NewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "New Account Page",
  "description": "As a user i want a New Account Page so the accounts can be created",
  "id": "new-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8742295100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Add New Account",
  "description": "",
  "id": "new-account-page;add-new-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to New Account page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "New Account Page should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 5002254100,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_page()"
});
formatter.result({
  "duration": 3511063200,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.new_Account_Page_should_display()"
});
formatter.result({
  "duration": 305735900,
  "status": "passed"
});
formatter.after({
  "duration": 4189709100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Create a new account",
  "description": "",
  "id": "new-account-page;create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "a user with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to New Account page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user fills the form as Title \"\u003cTitle\u003e\" Description \"\u003cDescription\u003e\" Amount \"\u003cAmount\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "new-account-page;create-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Title",
        "Description",
        "Amount"
      ],
      "line": 14,
      "id": "new-account-page;create-a-new-account;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Pizza",
        "Vegetable",
        "45"
      ],
      "line": 15,
      "id": "new-account-page;create-a-new-account;;2"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Choclate cake",
        "desert",
        "20"
      ],
      "line": 16,
      "id": "new-account-page;create-a-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6526809200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create a new account",
  "description": "",
  "id": "new-account-page;create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to New Account page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user fills the form as Title \"Pizza\" Description \"Vegetable\" Amount \"45\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 4709723700,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_page()"
});
formatter.result({
  "duration": 3396429400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pizza",
      "offset": 30
    },
    {
      "val": "Vegetable",
      "offset": 50
    },
    {
      "val": "45",
      "offset": 69
    }
  ],
  "location": "NewAccountSteps.user_fills_the_form_as_Title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 8595245100,
  "status": "passed"
});
formatter.after({
  "duration": 4134865900,
  "status": "passed"
});
formatter.before({
  "duration": 5626742200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create a new account",
  "description": "",
  "id": "new-account-page;create-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigates to New Account page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user fills the form as Title \"Choclate cake\" Description \"desert\" Amount \"20\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 4796688000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_page()"
});
formatter.result({
  "duration": 3199398200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Choclate cake",
      "offset": 30
    },
    {
      "val": "desert",
      "offset": 58
    },
    {
      "val": "20",
      "offset": 74
    }
  ],
  "location": "NewAccountSteps.user_fills_the_form_as_Title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 8220033600,
  "status": "passed"
});
formatter.after({
  "duration": 4028042800,
  "status": "passed"
});
});