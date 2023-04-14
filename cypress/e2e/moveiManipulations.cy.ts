describe('Movie', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search by clicking on search button", () => {
    cy.get("input").should("have.class", "search__input").clear().type("transformer");
    cy.get("button").contains("SEARCH").click();
    cy.wait(500);
    cy.get(".movie-cards-container").children().should("have.length", 4);
    cy.get(".movie-cards-container").children().should("contain", "Transformers 7");
    cy.get(".movie-cards-container").children().should("contain", "Transformers: The Last Knigh");
    cy.get(".movie-cards-container").children().should("contain", "Transformers: Age of Extinction");
    cy.get(".movie-cards-container").children().should("contain", "Transformers 7");
  });

  it("Search by pressing enter", () => {
    cy.get("input").should("have.class", "search__input").clear().type("transformer").type("{enter}");
    cy.wait(500);
    cy.get(".movie-cards-container").children().should("have.length", 4);
    cy.get(".movie-cards-container").children().should("contain", "Transformers 7");
    cy.get(".movie-cards-container").children().should("contain", "Transformers: The Last Knigh");
    cy.get(".movie-cards-container").children().should("contain", "Transformers: Age of Extinction");
    cy.get(".movie-cards-container").children().should("contain", "Transformers 7");
  });

  it("Sort movies by sorting options", () => {
    cy.wait(500);
    cy.get("select[class=\"sort-control__select\"]").select("RELEASE DATE");
    cy.wait(500);
    cy.get(".movie-card").first().should("contain", "2020")
    .next().should("contain", "2019")
    .next().should("contain", "2019")
    .next().should("contain", "2019")

    cy.get("select[class=\"sort-control__select\"]").select("TITLE");
    cy.wait(500);
    cy.get(".movie-card").first().should("contain", "2013").and("contain", "Zulu")
    .next().should("contain", "2016").and("contain", "Zootopia")
    .next().should("contain", "2009").and("contain", "Zombieland")
    .next().should("contain", "2007").and("contain", "Zodiac")
  });

  it("Switching genres", () => {
    cy.wait(500);
    cy.get(".list__item").contains("DOCUMENTARY").click();
    cy.wait(500);
    cy.get(".movie-card").each(($card) => {
      console.log($card);
      cy.wrap($card).should("contain","Documentary");
    });

    cy.get(".list__item").contains("CRIME").click();
    cy.wait(500);
    cy.get(".movie-card").each(($card) => {
      console.log($card);
      cy.wrap($card).should("contain","Crime");
    });
  });

  it("Selecting movie", () => {
    cy.wait(1000);
    cy.get("header").should("exist");
    cy.get(".movie-details").should("not.exist");
    cy.get(".movie-card").first().click();
    cy.get(".banner").should("not.exist");
    cy.get(".movie-details").should("exist");

    cy.get("span[class=\"icon-search\"]").click();
    cy.get("header").should("exist");
    cy.get(".movie-details").should("not.exist");
  })
})