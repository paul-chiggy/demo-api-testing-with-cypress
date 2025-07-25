export class Stepper {

    constructor() {}

    public request(
        url: string, 
        method: string = 'GET', 
        failOnStatusCode: boolean = false
    ): Cypress.Chainable {
        return cy.request({
            method: method,
            url: url,
            headers: {
                "Content-Type": "application/json"
            },
            failOnStatusCode: failOnStatusCode
        });
    }

}