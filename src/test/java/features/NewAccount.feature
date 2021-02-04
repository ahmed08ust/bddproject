Feature: New Account Page
	As a user i want a New Account Page so the accounts can be created
	
Scenario: Add New Account
Given a user with username "techfiosdemo@gmail.com" and password "abc123" 
When user navigates to New Account page 
Then New Account Page should display

Scenario Outline: Create a new account 
	Given a user with username "<username>" and password "<password>"
	When user navigates to New Account page
	When user fills the form as Title "<Title>" Description "<Description>" Amount "<Amount>" 
	Examples:
	|username              |password|Title        |Description|Amount|
	|techfiosdemo@gmail.com|abc123  |Pizza        |Vegetable  |45    |
	|techfiosdemo@gmail.com|abc123  |Choclate cake|desert     |20    |
	|techfiosdemo@gmail.com|abc123  |Samosa       |Vegetable  |10    |