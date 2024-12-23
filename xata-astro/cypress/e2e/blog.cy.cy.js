describe('blog.cy', () => {
    it('visit jetbrains.com', () => {
        cy.visit("https://xata-astro-beige.vercel.app/blog")
        cy.get('button').contains('Read more').click()
        cy.get('a').contains('Back to blog').click()
        cy.get('a').contains('Get started with Xata and Astro').click()
    })
})