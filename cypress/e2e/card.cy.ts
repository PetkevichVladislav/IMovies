describe('Card movie', () => {
    const getCardContainer = () => cy.get("div").should("have.class", "movie-cards-container");
    const getCardMenuIcon = () => cy.get("span").should("have.class", "movie-card__context-menu");
    const getMenu = () => cy.get("div").should("have.class", "movie-card__popupmenu_container");

    beforeEach(() => {
        cy.visit("/");
    })

    it("When hover on card should display cardmenu icon", () => {
        getCardContainer().children().first().trigger('mouseover');
        getCardMenuIcon().should('be.visible');
    })

    it("When click on card menu icon popup menu should display", () => {
        getCardContainer().children().first().trigger('mouseover');
        getCardMenuIcon().last().click();
        const menu = getMenu();
        menu.should('be.visible');
        const menuItems = cy.get(".drop-down-menu__item-container").children(".drop-down-menu__item");
        menuItems.should('have.length', 2);
        menuItems.contains("Edit");
        menu.next().contains("Delete");
    })
})