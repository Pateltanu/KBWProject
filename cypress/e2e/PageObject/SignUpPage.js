
class SignUpPage{
// Click on SignUp button
clickOnsignUP(){
    cy.get('a:contains("Sign up")').click()
    }
// User should able to navitage signup page
verifyUserIsOnSignUP(){
    cy.url().should("include","account/register")
    }
// Enter Firstname
firstName(firstname){
     cy.get('#first_name').clear().type(firstname)
    return this
    }
// Enter Lastname 
lastName(lastname){
    cy.get('#last_name').clear().type(lastname)
    return this
    }
// Enter invalid email
email(invalidemail){
    cy.get('#email').clear().type(invalidemail)
    return this
    }
// Click on create button
clickOncreate(){
    cy.get('input[value*="Create"]').click()
    }
}
export default SignUpPage