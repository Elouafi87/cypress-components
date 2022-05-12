

describe('smart-tag', () => {
    beforeEach(() => {
        cy.visit('../../smart-tag.html')
    })
    // IV. LE SMART TAG
    it('2. Tester l’apparition du tag au survol du bouton "See more".', () => {
        cy.dataCy('seeMoreButton').trigger('mouseover');
        cy.dataCy('tagText').should('be.visible')
    });
    it('3. Tester la disparition du tag à la sortie du survol du bouton "See more".', () => {
        cy.dataCy('seeMoreButton').trigger('mouseover');
        cy.dataCy('tagText').should('be.visible')
        cy.get('body').trigger('mouseover', 0, 0)
        cy.dataCy('tagText').should('be.not.visible')
    });
})