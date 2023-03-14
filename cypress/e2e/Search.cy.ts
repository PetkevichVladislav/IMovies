describe('Search', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search by clicking on search button", () => {
    cy.get("input").should("have.class", "search__input").clear().type("test");
    cy.get("button").contains("SEARCH").click();
  });

  it("Search by pressing enter", () => {
    cy.get("input").should("have.class", "search__input").clear().type("Drama").type("{enter}");
  });
})