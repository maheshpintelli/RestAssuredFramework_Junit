package resources;

import org.apache.commons.lang3.RandomStringUtils;

import pojo.PojoLibrary;

public class TestData {
	public PojoLibrary addBookPayload(String name, String isbn, String aisle, String author) {
		PojoLibrary pojo = new PojoLibrary();
		pojo.setName(name);
		pojo.setIsbn(isbn);
		pojo.setAisle(aisle);
		pojo.setAuthor(author);
		return pojo;
	}

	public String aisleNumber() {
		String aisle = RandomStringUtils.randomNumeric(4);
		return aisle;
	}

	public String deleteBookPayload(String ID) {
		return "{\r\n" + "\"ID\" : \"" + ID + "\"\r\n" + "}";
	}

}
