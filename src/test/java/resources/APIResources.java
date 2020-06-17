package resources;

public enum APIResources {
	addBook("/Library/Addbook.php"), 
	getBookByAutorName("/Library/GetBook.php"), 
	getBookByID("Library/GetBook.php"),
	deleteBook("/Library/DeleteBook.php");
	private String resource;

	APIResources(String resource) {
		this.resource = resource;
	}

	public String getResource() {
		return resource;
	}
}
