describe('Movie creating', () => {
    const getButtonWithTitle = (title: string) => cy.contains('button', title).first();
    const setValueToTheInputWithTitle = (title: string, value: string) => cy.get('.titled-container').contains(title).siblings('input,textarea').type(value);
    const checkCheckBoxesInDropDownList = (checkboxes: string[]) => {
        cy.get(".drop-down-input__content-container").click();
        cy.get(".drop-down-input__content")
            .get('.checkbox-input__container').each((checkbox) => {
                cy.wrap(checkbox).find('.checkbox-input__input').then((checkbox) => {
                    const value = checkbox.attr('value');
                    if (checkboxes.includes(value)) {
                        checkbox.click();
                    }
                })
            });
        cy.get(".drop-down-input__content-container").click();
    }
    const getHeader = () => cy.get("header");
    const getMovieDetails = () => cy.get(".movie-details");
    const isCardExistWithTheTitle = (text : string) => cy.contains('.movie-card', text).should('exist');
    const getCardWithMovieTitle = (movieTitle : string) => cy.get(".movie-card").contains(movieTitle);
    const getCardMenuIcon = () => cy.get(".movie-card__context-menu");
    const getDropDownMenuButton = (buttonName : string) => cy.get("li").should("have.class", "drop-down-menu__item").contains(buttonName);

    beforeEach(() => {
        cy.visit("/");
        cy.wait(500);
    })

    it("", () => {
        getButtonWithTitle("+ADD MOVIE").click();
        cy.wait(500);
        checkCheckBoxesInDropDownList(["Comedy", "Crime"]);
        setValueToTheInputWithTitle("title", "Movie for automation testing");
        setValueToTheInputWithTitle("release date", "2023-04-21");
        setValueToTheInputWithTitle("movie url", "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg");
        setValueToTheInputWithTitle("rating", "5.6");
        setValueToTheInputWithTitle("runtime", "120");
        setValueToTheInputWithTitle("overview", "Movie for automation testing.");
        getButtonWithTitle("confirm").click();
        cy.wait(1000);
        getHeader().should("not.exist");
        getMovieDetails().should("exist");
        isCardExistWithTheTitle("Movie for automation testing");
    })

    afterEach(() => {
        getCardWithMovieTitle("Movie for automation testing").trigger('mouseover');
        getCardMenuIcon().click();
        getDropDownMenuButton("Delete").click();
        getButtonWithTitle("confirm").click();
    })
});