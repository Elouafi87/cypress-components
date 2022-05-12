

describe('scroll to top', () => {
    beforeEach(() => {
        cy.visit('../../scroll-to-top.html')
    })
    // III -LE SCROLL TO TOP 
    // 2 solution
    it('2 Tester l’apparition du bouton "scroll-to-top" en bas à droite lorsqu’on scroll vers le bas.', () => {
        cy.scrollTo('bottom');
        cy.dataCy('scrollTopButton').should('be.visible')

    });
    // 3 solution
    it('3 - Tester le retour en haut de la page et la disparition du bouton "scroll-to-top" lors du clique sur le bas', () => {
        cy.scrollTo('bottom');
        cy.dataCy('scrollTopButton').should('be.visible')
        cy.dataCy('scrollTopButton').click()
        cy.dataCy('scrollTopButton').should('be.not.visible')
        cy.scrollTo('top').window().its('scrollY').should('equal', 0); 
    });
})