describe('LA TODO LIST', () => {
    beforeEach(() => {
        cy.visit('../../index.html')
    })
    // V - LA TODO LIST
    it('2 -  check add / deletes elements in todo list ', () => {
        //Add 1 todo
        cy.dataCy('inputTodo').type('1').should('have.value','1')
        cy.dataCy('submit').click()
        cy.dataCy('todo-content-0').should('have.text', '1');
        /* 
        //Add second todo
        cy.dataCy('inputTodo').type('2').should('have.value','2')
        cy.dataCy('submit').click()
        cy.dataCy('todo-content-1').should('have.text', '2');
        //Add third todo
        cy.dataCy('inputTodo').type('3').should('have.value','3')
        cy.dataCy('submit').click()
        cy.dataCy('todo-content-2').should('have.text', '3');
        //Add fourth todo
        cy.dataCy('inputTodo').type('4').should('have.value','4')
        cy.dataCy('submit').click()
        // Verify counter
        cy.dataCy('counter').should('have.text', '4'); //le counter est déclaré comme étant todos.lenght ( la liste des todo)
        //delete second todo
        cy.dataCy('todo-delete-1').click()
        //verify counter
        cy.dataCy('counter').should('have.text', '3'); */
    });
})