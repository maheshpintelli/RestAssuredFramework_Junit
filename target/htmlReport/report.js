$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/library.feature");
formatter.feature({
  "name": "Validating library API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if Book is being Successfully added using Addbook API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Addbook Payload with \"\u003cname\u003e\" \"\u003cisbn\u003e\" \"\u003caisle\u003e\" \"\u003cauthor\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User calls \"addBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.step({
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.step({
  "name": "\"Msg\" in response body is \"successfully added\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify ID created maps to \"\u003cname\u003e\" using \"getBookByID\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify ID created maps to \"\u003cname\u003e\" using \"getBookByAutorName\" API",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "isbn",
        "aisle",
        "author"
      ]
    },
    {
      "cells": [
        "Book1",
        "109836",
        "12034",
        "Mahesh1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if Book is being Successfully added using Addbook API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Addbook Payload with \"Book1\" \"109836\" \"12034\" \"Mahesh1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.addbook_Payload_with(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"addBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Msg\" in response body is \"successfully added\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify ID created maps to \"Book1\" using \"getBookByID\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.verify_ID_created_maps_to_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify ID created maps to \"Book1\" using \"getBookByAutorName\" API",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.verify_ID_created_maps_to_using_API(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Book is getting retrieved using valid getBookByAutorName API",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Valid Author Name is given",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.valid_Author_Name_is_given()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"getBookByAutorName\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Book is getting retrieved using invalid getBookByAutorName API",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Invalid Author Name is given",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.invalid_Author_Name_is_given()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"getBookByAutorName\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"msg\" in response body is \"The book by requested bookid / author name does not exists!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Book is getting retrieved using valid getBookByID API",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Valid BookID is given",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.valid_BookID_is_given()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"getBookByID\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Book is getting retrieved using invalid getBookByID API",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Invalid BookID is given",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.invalid_BookID_is_given()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"getBookByID\" API with \"GET\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"msg\" in response body is \"The book by requested bookid / author name does not exists!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if Delete Book functionality is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "DeleteBook Payload",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.deletebook_Payload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"deleteBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"msg\" in response body is \"book is successfully deleted\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Verify getting error message and 404 status if user trying to delete already deleted Book ",
  "keyword": "Scenario"
});
formatter.step({
  "name": "DeleteBook Payload with already deleted BookID",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.deletebook_Payload_with_already_deleted_BookID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"deleteBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"msg\" in response body is \"Delete Book operation failed, looks like the book doesnt exists\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Verify getting error message and 404 status if user trying to delete book by blank BookID ",
  "keyword": "Scenario"
});
formatter.step({
  "name": "DeleteBook Payload with blank BookID",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.AddBook.deletebook_Payload_with_blank_BookID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"deleteBook\" API with \"POST\" HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddBook.user_calls_API_with_HTTP_request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddBook.the_API_call_is_success_with_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"msg\" in response body is \"Delete Book operation failed, looks like the book doesnt exists\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddBook.in_response_body_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});