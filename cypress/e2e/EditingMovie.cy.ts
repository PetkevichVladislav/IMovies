describe('Editing movie', () => {
    const getCardWithMovieTitle = (movieTitle : string) => cy.get(".movie-card").contains(movieTitle);
    const getCardMenuIcon = () => cy.get(".movie-card__context-menu");
    const getDropDownMenuButton = (buttonName : string) => cy.get("li").should("have.class", "drop-down-menu__item").contains(buttonName);
    const getModalWindowWithTitle = (title: string) => cy.get("div").should("have.class", "modal-base__window").contains(title);
    const verifyIsInputWithDateExist = (data : string) => cy.get(".modal-base__window").within(() => {
        cy.get("input").each((input) => {
          const value = input.val();
          if (value.includes(data)) {
            expect(value).to.include(data);
          }
        });
      });

    beforeEach(() => {
        cy.visit("/");
        cy.wait(500);
    })

    it("When click edit on popup menu then modal window with preselected data should open.", () => {
        getCardWithMovieTitle("Transformers 7").trigger('mouseover');
        getCardMenuIcon().click();
        getDropDownMenuButton("Edit").click();
        cy.wait(500);
        cy.url().should('include', '/edit');
        getModalWindowWithTitle("edit movie");
        verifyIsInputWithDateExist("Transformers 7");
        verifyIsInputWithDateExist("https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg");
        verifyIsInputWithDateExist("10");
        verifyIsInputWithDateExist("51");
        verifyIsInputWithDateExist("Plot unknown.");
        verifyIsInputWithDateExist("26/06/2019");
    })
});