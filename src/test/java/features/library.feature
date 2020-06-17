Feature: Validating library API 

Scenario Outline: Verify if Book is being Successfully added using Addbook API 
	Given Addbook Payload with "<name>" "<isbn>" "<aisle>" "<author>" 
	When User calls "addBook" API with "POST" HTTP request 
	Then  The API call is success with status 200 
	And "Msg" in response body is "successfully added" 
	And verify ID created maps to "<name>" using "getBookByID" 
	And verify ID created maps to "<name>" using "getBookByAutorName" API 
	
	Examples: 
		|name |isbn  |aisle|author|
		|Book1|109836 |12034|Mahesh1|
		
Scenario: Verify Book is getting retrieved using valid getBookByAutorName API 
	Given Valid Author Name is given 
	When User calls "getBookByAutorName" API with "GET" HTTP request 
	Then  The API call is success with status 200 
	
Scenario: Verify Book is getting retrieved using invalid getBookByAutorName API 
	Given Invalid Author Name is given 
	When User calls "getBookByAutorName" API with "GET" HTTP request 
	Then  The API call is success with status 404 
	And "msg" in response body is "The book by requested bookid / author name does not exists!" 
	
Scenario: Verify Book is getting retrieved using valid getBookByID API 
	Given Valid BookID is given 
	When User calls "getBookByID" API with "GET" HTTP request 
	Then  The API call is success with status 200 
	
Scenario: Verify Book is getting retrieved using invalid getBookByID API 
	Given Invalid BookID is given 
	When User calls "getBookByID" API with "GET" HTTP request 
	Then  The API call is success with status 404 
	And "msg" in response body is "The book by requested bookid / author name does not exists!" 
	
Scenario: Verify if Delete Book functionality is working 
	Given DeleteBook Payload 
	When User calls "deleteBook" API with "POST" HTTP request 
	Then  The API call is success with status 200 
	And "msg" in response body is "book is successfully deleted" 
	
Scenario:
Verify getting error message and 404 status if user trying to delete already deleted Book 
	Given DeleteBook Payload with already deleted BookID 
	When User calls "deleteBook" API with "POST" HTTP request 
	Then  The API call is success with status 404 
	And "msg" in response body is "Delete Book operation failed, looks like the book doesnt exists" 
	
Scenario:
Verify getting error message and 404 status if user trying to delete book by blank BookID 
	Given DeleteBook Payload with blank BookID 
	When User calls "deleteBook" API with "POST" HTTP request 
	Then  The API call is success with status 404 
	And "msg" in response body is "Delete Book operation failed, looks like the book doesnt exists"