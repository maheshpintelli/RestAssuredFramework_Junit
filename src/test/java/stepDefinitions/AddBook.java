package stepDefinitions;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.io.IOException;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import resources.APIResources;
import resources.TestData;
import resources.Utils;

public class AddBook extends Utils {
	Response response;
	RequestSpecification request;
	ResponseSpecification respBuilder;
	TestData testdata = new TestData();
	static String ID;
	static String author;
	String responseBody;

	@Given("Addbook Payload with {string} {string} {string} {string}")
	public void addbook_Payload_with(String name, String isbn, String aisle, String author) throws IOException {

		request = given().spec(requestSpecification()).body(testdata.addBookPayload(name, isbn, aisle, author));
	}

	@When("User calls {string} API with {string} HTTP request")
	public void user_calls_API_with_HTTP_request(String resource, String method) {
		APIResources resourceAPI = APIResources.valueOf(resource);
		System.out.println("API Resource : " + resourceAPI.getResource());
		respBuilder = new ResponseSpecBuilder().expectContentType(ContentType.JSON).build();
		if (method.equalsIgnoreCase("POST"))
			response = request.when().post(resourceAPI.getResource());
		else if (method.equalsIgnoreCase("GET"))
			response = request.when().get(resourceAPI.getResource());
		responseBody = response.asString();
		System.out.println("Response : " + responseBody);
	}

	@Then("The API call is success with status {int}")
	public void the_API_call_is_success_with_status(int expectedstatuscode) {
		assertEquals(response.getStatusCode(), expectedstatuscode);
	}

	@And("{string} in response body is {string}")
	public void in_response_body_is(String keyValue, String expectedValue) {
		assertEquals(getJSONPath(response, keyValue), expectedValue);
	}

	@And("verify ID created maps to {string} using {string}")
	public void verify_ID_created_maps_to_using(String actualName, String resource) throws IOException {
		ID = getJSONPath(response, "ID");
		request = given().spec(requestSpecification()).queryParam("ID", ID);
		user_calls_API_with_HTTP_request(resource, "GET");
		String expectedName = getJSONPath(response, "[0].book_name");
		assertEquals(actualName, expectedName);
	}

	@And("verify ID created maps to {string} using {string} API")
	public void verify_ID_created_maps_to_using_API(String actualName, String resource) throws IOException {
		author = getJSONPath(response, "[0].author");
		request = given().spec(requestSpecification()).queryParam("AuthorName", author);
		user_calls_API_with_HTTP_request(resource, "GET");
		String expectedName = getJSONPath(response, "[0].book_name");
		assertEquals(actualName, expectedName);
	}

	// ---------------------------------
	@Given("Valid Author Name is given")
	public void valid_Author_Name_is_given() throws IOException {
		request = given().spec(requestSpecification()).queryParam("AuthorName", author);
	}

	@Given("Invalid Author Name is given")
	public void invalid_Author_Name_is_given() throws IOException {
		request = given().spec(requestSpecification()).queryParam("AuthorName", "Invalid Author Name");
	}

	@Given("Valid BookID is given")
	public void valid_BookID_is_given() throws IOException {
		request = given().spec(requestSpecification()).queryParam("ID", ID);
	}

	@Given("Invalid BookID is given")
	public void invalid_BookID_is_given() throws IOException {
		request = given().spec(requestSpecification()).queryParam("ID", "0987IVID");
	}

	@Given("DeleteBook Payload")
	public void deletebook_Payload() throws IOException {
		request = given().spec(requestSpecification()).body(testdata.deleteBookPayload(ID));
	}

	@Given("DeleteBook Payload with already deleted BookID")
	public void deletebook_Payload_with_already_deleted_BookID() throws IOException {
		request = given().spec(requestSpecification()).body(testdata.deleteBookPayload(ID));
	}

	@Given("DeleteBook Payload with blank BookID")
	public void deletebook_Payload_with_blank_BookID() throws IOException {
		request = given().spec(requestSpecification()).body(testdata.deleteBookPayload(""));
	}
}
