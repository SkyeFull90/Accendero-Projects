describe('Login a user', () => {
    it('Should login a user', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('input[type="text"]').type('testing2')
        cy.get('input[type="password"]').type('test321')
        cy.get('button').contains('Submit').click()
    })
})