module.exports = {
  /**
   * define actions for the page object
   */

  iClickOnCreateNewBook: async () => {
    await browser.asControl({
    	selector: {
            id: "books::BooksList--fe::table::Books::LineItem::StandardAction::Create",
            interaction: {
                    idSuffix: "BDI-content"
            }
    }}).press();
  },

  /**
   * define assertions for the page object
   */

  theBookListContains: async (sTitle) => {
        await browser.asControl({
                selector: {
                controlType: "sap.m.Text",
                viewId: "books::BooksList",
                properties: {
                        text: sTitle
                }
        }});
    }
}