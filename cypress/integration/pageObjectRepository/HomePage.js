class HomePage{
    getSignIn(){
        return cy.contains('Hello')
    }
}
//! we have to export our class for it to be accessible 
export default HomePage