import Homepage from "../PageObject/HomePage"
import Loginpage from "../PageObject/LoginPage"
import SignUpPage from "../PageObject/SignUpPage"

describe("Cypress Pom Test Suite",function(){
   //User should be able to navigate to homepage by given URL
    it("Open home page and verify the url and title", function(){
        const homepage = new Homepage();
        homepage.navigate();
        homepage.verifyURL();
    })
  //user should not be able to sing upwith invalid credential
    it("Verify user should not be able to SignUp with invalid credential and empty passward",function(){
    const signup = new SignUpPage();
        signup.clickOnsignUP();
        signup.verifyUserIsOnSignUP();
        signup.firstName('john');
        signup.lastName('smith');
        signup.email('xyz123###gmaill.com');
        signup.clickOncreate();
    })
    // User should not be able to login with in valid credential
    it("verify login with invalid credential",function(){
        const login = new Loginpage();
        const homepage = new Homepage();
        homepage.navigate();
        login.clickOnLogin();
        login.enterEmail('abcd123@gmail.com');
        login.clickOnsignIn();
        login.verifyUesrIsNotLogIn();
        })
})