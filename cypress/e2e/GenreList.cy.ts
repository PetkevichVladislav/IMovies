describe('GenreList', () => {
  const getListElementWithName = (elementName: string) => cy.get("li").contains(elementName);

  beforeEach(() => {
    cy.visit("/");
  });

  it("When clicks on not selected item it should changes to selected", () => {
    const listElementName = 'Adventure';
    getListElementWithName(listElementName).click();
    getListElementWithName(listElementName).should("have.class", "list__item--selected");
  });
})