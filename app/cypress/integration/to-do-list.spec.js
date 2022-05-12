describe('LA TODO LIST', () => {
    beforeEach(() => {
        cy.visit('../../index.html')
    })
    // V - LA TODO LIST
    it('2 -  check add / deletes elements in todo list ', () => {
        //Add 1 todo
        cy.dataCy('inputTodo').type('todo_1').should('have.value','todo_1')
        cy.dataCy('submit').click()
        cy.dataCy('todo-content-0').should('have.text', 'todo_1');
         
        //Ajouter 2eme todo 
        cy.dataCy('inputTodo').type('todo_2').should('have.value','todo_2')
        cy.dataCy('submit').click()
        cy.dataCy('todo-content-1').should('have.text', 'todo_2');
        
        //Ajouter 3eme todo 
        cy.dataCy('inputTodo').type('todo_3').should('have.value','todo_3')
        cy.dataCy('submit').click()
        cy.dataCy('todo-content-2').should('have.text', 'todo_3');
        //Ajouter 4eme todo 
        cy.dataCy('inputTodo').type('todo_4').should('have.value','todo_4')
        cy.dataCy('submit').click()
        // Verify counter
        cy.dataCy('counter').should('have.text', '4');
        // supprimer le 2eme todo
        cy.dataCy('todo-delete-1').click()
        // vérifier qu'il reste que 3 elements dans la liste
        cy.dataCy('counter').should('have.text', '3');
    });
})