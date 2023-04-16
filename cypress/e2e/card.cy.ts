describe('Card movie', () => {
    const getCard = () => cy.get(".movie-card").first();
    const getCardMenuIcon = () => cy.get(".movie-card__context-menu");
    const getMenu = () => cy.get("div").should("have.class", "movie-card__popupmenu_container");

    beforeEach(() => {
        cy.visit("/");
        cy.wait(500);
    })

    it("When hover on card should display cardmenu icon", () => {
        getCard().trigger('mouseover');
        getCardMenuIcon().should('be.visible');
    })

    it("When click on card menu icon popup menu should display", () => {
        getCard().trigger('mouseover');
        getCardMenuIcon().last().click();
        const menu = getMenu();
        menu.should('be.visible');
        const menuItems = cy.get(".drop-down-menu__item-container").children(".drop-down-menu__item");
        menuItems.should('have.length', 2);
        menuItems.contains("Edit");
        menu.next().contains("Delete");
    })
})