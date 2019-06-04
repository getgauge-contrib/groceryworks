context('test groceryWorks', () => {
    before(() => {
      cy.visit('/');
    });
  
     it('should have the right title', () => {
        cy.title().should('eq', 'GroceryWorks');
    });

    it('should add beans to order', () => {
        const items = ['Flax Seeds','French Green Lentils', 'Green Split Peas','Lentils','Pinto Beans','White Navy Beans','Yellow Split Peas']
        for(const index in items){
            cy.get(`img[alt='${items[index]}']`).click();
        }
        cy.get('.cart-total').should('have.text', '$5.13');
    });
  }); 

  