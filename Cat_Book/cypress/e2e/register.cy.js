describe('Register a new user',  () => {
    it('Should register a new user', () => {
        cy.visit('http://localhost:3000/register')
        cy.get('input[type="text"]').type('testing2')
        cy.get('input[type="password"]').type('test321')
        cy.get('button').contains('Submit').click()
    })
})