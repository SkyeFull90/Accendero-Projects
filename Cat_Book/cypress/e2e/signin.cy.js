describe('Sign in a user',  () => {
    it('Should sign in a user', () => {
        cy.visit('/login')
        cy.get('input[type="text"]').type('testing')
        cy.get('input[type="password"]').type('test321')
        cy.get('button').contains('Submit').click()
    })
})