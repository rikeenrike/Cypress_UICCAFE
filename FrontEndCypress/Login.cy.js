describe('User Routes Test', () => {
    it('GET users route', () => {
      cy.visit('http://localhost:5173/')
      cy.request('GET','http://localhost:5173/').then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
      cy.viewport(1920, 1080)
      cy.get('.email').type('ADMINTEST', { delay: 100 }) 
      cy.get('.password').type('1234', { delay: 100 })
      cy.get('#loginbtn').click()
      cy.wait(2000)
      // logout and dosnt go to the dashboard
      cy.get('.space-x-2 > p').click()
      cy.wait(2000)
     cy.get('.rounded-none > .relative > .leading-none').click()
     cy.wait(2000)
     cy.get('.email').type('sada', { delay: 100 }) 
     cy.get('.password').type('asdas', { delay: 100 })
     cy.get('#loginbtn').click()
      })
    })
  })