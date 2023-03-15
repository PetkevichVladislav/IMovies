describe('Counter', () => {
    const getCounter = () => cy.get("p").should("have.class", "counter__count");
    const getIncrementButton = () => cy.get("button").contains('increment');
    const getDecrementButton = () => cy.get("button").contains('decrement');

    beforeEach(() => {
        cy.visit("/");
    })

    it("When clicks on increment button counter should increase value", () => {
        getCounter().contains("0");
        getIncrementButton().click();
        getCounter().contains("1");
    })

    it("When clicks on decrement button counter should decrease value", () => {
        getCounter().contains("0");
        getDecrementButton().click();
        getCounter().contains("-1");
    })
})