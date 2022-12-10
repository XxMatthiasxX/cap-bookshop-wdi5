const ManageBooksPage = require("../pageobjects/manageBooks.page");
const NewBookPage = require("../pageobjects/newBook.page");
const bookTitle = "How to Cook Pancakes";

describe("Manage bookshop", () => {
    it("create a new book", async () => {
        await ManageBooksPage.iClickOnCreateNewBook();
        await NewBookPage.iEnterTitle(bookTitle);
        await NewBookPage.iSelectGenre();
        await NewBookPage.iSelectAuthor();
        await NewBookPage.iPressCreate();
        await NewBookPage.iSeeEditButton();
        await NewBookPage.iNavigateBack();
    });

    it("should check book is added", async () => {
        await ManageBooksPage.theBookListContains(bookTitle);
    });
});