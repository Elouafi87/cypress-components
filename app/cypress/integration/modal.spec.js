/// <reference types="cypress" />

describe('modal', () => {
    beforeEach(() => {
        cy.visit('../../modal.html')
    })
    // II - II. LA FENÊTRE MODALE 
    // 2 solution 
    it('2 - Tester l’ouverture de la fênetre modale au clique sur display', () => {
        cy.dataCy('displayButton').click();
        cy.dataCy('modalWindow').should('be.visible');
    });
    // 3 solution 
    it('3 - Tester la fermeture de la fênetre modale au clique en dehors de la modale', () => {
        cy.dataCy('displayButton').click();
        cy.dataCy('modalWindow').should('be.visible');
        cy.get('body').click(0, 0);
        cy.dataCy('modalWindow').should('be.not.visible');
    });
    // 4 solution 
    it('4 - Tester que la fênetre modale contient un <h2></h2> contenant Lorem Ipsum.', () => {
        cy.dataCy('displayButton').click();
        cy.dataCy('modalWindow').should('be.visible');
        cy.dataCy('TitreH2').should('exist').should('have.text','Lorem Ipsum')        
    }); 
})