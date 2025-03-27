
describe('4 - Features Interactions', () => {
  describe('A - Sort after paginate', () => {
    before(()=>{
      cy.visit('http://localhost:8080/');
    });

    it('Should land on first page', ()=>{
      cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
    });

    it('Should go to page 2', ()=>{
      cy.get('[data-cy=go-to-page-2]').click();
      cy.get('[data-cy=cell-1-1]').contains('Adrian Burch');
    });

    it('Should sort by name descending', ()=>{
      cy.get('[data-cy=sort-by-name]').click();
      // First click sorts by ascending, second click sorts by descending.
      cy.get('[data-cy=sort-by-name]').click();
      cy.get('[data-cy=cell-1-1]').contains('Zimmerman Barry');
    });
  });

  describe('B - Search after paginate', () => {
    before(()=>{
      cy.visit('http://localhost:8080/');
    });

    it('Should land on first page', ()=>{
      cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
    });

    it('Should go to page 2', ()=>{
      cy.get('[data-cy=go-to-page-2]').click();
      cy.get('[data-cy=cell-1-1]').contains('Adrian Burch');
    });

    it('Should search for "Stephens Townsend"', ()=>{
      cy.get('[data-cy=search-input]').clear().type('Stephens Townsend');
      cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
    });
  });

  describe('C - Sort after search', () => {
    before(()=>{
      cy.visit('http://localhost:8080/');
    });

    // Verify that the page is loaded correctly by checking the first cell content
    it('Should land on first page', ()=>{
      cy.get('[data-cy=cell-1-1]').contains('Stephens Townsend');
    });

    // Perform a search for "20" and check if the correct results are displayed.
    it('Should search for "20"', ()=>{
      cy.get('[data-cy=search-input]').clear().type('20');
      cy.get('[data-cy=cell-1-1]').contains('Daphne Mcdowell');
      cy.get('[data-cy=cell-2-1]').contains('Gallegos Dillon');
      cy.get('[data-cy=cell-3-1]').contains('Barnes Leach');
    });

    // Click to sort by name in ascending order and verify the first result.
    it('Should sort by name ascending', ()=>{
      cy.get('[data-cy=sort-by-name]').click();
      cy.get('[data-cy=cell-1-1]').contains('Barnes Leach');
    });
  });
});
