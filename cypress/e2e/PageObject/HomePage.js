


class Homepage{
    // Navigate to homepage
    navigate(){
        cy.visit('https://www.kidsboxwholesale.co.uk/')
    }
    // Verify user should be able to navigate given URL
    verifyURL(){
        cy.url().should("include","kidsbox");
    }
}
export default Homepage