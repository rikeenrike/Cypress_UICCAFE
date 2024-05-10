describe('User Routes Test', () => {
    it('GET users route', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:5173/cashier/menu/drinks')
        cy.request('GET','http://localhost:5173/cashier/menu/drinks').then((response)=>{
            
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length.above(0)
            cy.get('.email').type('ADMINTEST', { delay: 200 }) 
      cy.get('.password').type('1234', { delay: 200 })
      cy.get('#loginbtn').click()
      cy.wait(5000)
  
       cy.get(':nth-child(3) > :nth-child(1) > .h-full > .w-16').click()
       cy.get(':nth-child(4) > :nth-child(1) > .h-full > .w-16').click()
        cy.wait(2000)
         cy.get('#pv_id_3_2_header_action').click()
         cy.get('#pv_id_3_2_content > .p-5 > .-space-x-5 > .cursor-pointer > :nth-child(1) > .h-full > .w-16').click()
      
//dine in
         cy.get('.pb-5 > .bg-white > .my-5 > :nth-child(3) > .gap-3 > :nth-child(1)').should('be.visible')
         //take out
         cy.get('.pb-5 > .bg-white > .my-5 > :nth-child(3) > .gap-3 > :nth-child(2)').should('be.visible')
         //gcash
         cy.get('.pb-5 > .bg-white > .my-5 > :nth-child(4) > .justify-between > .flex > :nth-child(1)').should('be.visible')
         //cash
         cy.get('.pb-5 > .bg-white > .my-5 > :nth-child(4) > .justify-between > .flex > :nth-child(2)').should('be.visible')

         cy.get('.pb-5 > .bg-white > .my-5 > :nth-child(3) > .gap-3 > :nth-child(1)').click()
         cy.get('.pb-5 > .bg-white > .my-5 > :nth-child(4) > .justify-between > .flex > :nth-child(1)').click()
         cy.get('.pb-5 > .bg-white > .my-5 > :nth-child(5) > .font-sora').type('priority', { delay: 200 })
         
        cy.get('.pb-5 > .bg-white > .my-5 > .h-fit').click()
        cy.wait(2000)
        cy.get('#pv_id_3_2_content > .p-5 > .-space-x-5 > .cursor-pointer > :nth-child(1) > .h-full > .w-16').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(1) > .h-full > .w-16').click()
        cy.wait(2000)
       cy.get('.py-5 > .group').click()
        

    })
    })
})