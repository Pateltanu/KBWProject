

class Loginpage{
   
   // Click on LogIn button
    clickOnLogin(){
        cy.get('a:contains("Log in")').click()
    }
    //  Type email
    enterEmail(enteremail){
        cy.get('#customer_email').clear().type(enteremail)
        return this
     }
      // click on signin button
    clickOnsignIn(){
            cy.contains('Sign In').click()
        }
    // Verify user is notable to login 
    verifyUesrIsNotLogIn(){
        cy.contains('Incorrect email or password.').should('be.visible')
    }
     }
   
export default Loginpage