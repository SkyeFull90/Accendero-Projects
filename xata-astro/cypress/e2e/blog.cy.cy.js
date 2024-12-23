describe('blog.cy', () => {
    it('visit jetbrains.com', () => {
        cy.visit("https://xata-astro-beige.vercel.app/blog")
        cy.get('button').contains('Read more &rarr').click()
    })
})