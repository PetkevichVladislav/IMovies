describe('Search parameters', () => {
    it("Url with home page", () => {
        cy.visit("/");
        cy.get("input").should("have.class", "search__input").should("be.empty");
        cy.get("select[class=\"sort-control__select\"]").should('have.value',"RELEASE DATE");
        cy.get(".list__item").contains("ALL").should('have.class', "list__item--selected");
    });
    	
    it("Url contains search parameters", () => {
        cy.visit("/?query=rocco&genre=all&sorting=title");
        cy.get("input").should("have.class", "search__input").should('have.value',"rocco");

        cy.visit("/?&genre=all");
        cy.get(".list__item").contains("ALL").should('have.class', "list__item--selected");

        cy.visit("/?sorting=title");
        cy.get("select[class=\"sort-control__select\"]").should('have.value',"TITLE");
    })

    it("Url contains search parameters combination", () => {
        cy.visit("/?query=rocco&genre=all&sorting=title");
        cy.get("input").should("have.class", "search__input").should('have.value',"rocco");
        cy.get("select[class=\"sort-control__select\"]").should('have.value',"TITLE");
        cy.get(".list__item").contains("ALL").should('have.class', "list__item--selected");

        cy.get(".list__item").contains("DOCUMENTARY").click();
        cy.url().should('include', '/?genre=documentary&sorting=title');
        cy.get("input").should("have.class", "search__input").should("be.empty");
        cy.get("select[class=\"sort-control__select\"]").should('have.value',"TITLE");
        cy.get(".list__item").contains("DOCUMENTARY").should('have.class', "list__item--selected");
    })

    it("url contains search parameters and movie id", () => {
        cy.visit("/?genre=all&sorting=title");
        cy.get("input").should("have.class", "search__input").clear().type("rocco").type("{enter}");
        cy.wait(500).get(".movie-card").first().click();
        cy.get("header").should("not.exist");
        cy.get(".movie-details").should("exist");
        cy.url().should('include', '416148?query=rocco&genre=all&sorting=title');

        cy.get("span[class=\"icon-search\"]").click();
        cy.url().should('include', '/?query=rocco&genre=all&sorting=title');
        cy.get("header").should("exist");
        cy.get(".movie-details").should("not.exist");
    })
})