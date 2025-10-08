import { responseTimeThreshold } from '../support/test-data';

export class WeatherApiAsserter {
    constructor() {}

    public verifyUnauthorizedResponse(
        response: Cypress.Response<any>, 
        errorMessage: string
    ) {
        // smoke
        expect(response.status).to.eq(401);
        // performance
        expect(response).to.have.property("duration").lessThan(responseTimeThreshold);
        // contract
        expect(response.body.message).to.be.a("string");
        // data
        expect(response.body.cod).to.equal(401);
        expect(response.body.message).to.equal(errorMessage);
    }

    public verifyBadRequestResponse(
        response: Cypress.Response<any>, 
        errorMessage: string
    ) {
        // smoke
        expect(response.status).to.eq(400);
        // performance
        expect(response).to.have.property("duration").lessThan(responseTimeThreshold);
        // contract
        expect(response.body.message).to.be.a("string");
        // data
        expect(response.body.cod).to.equal("400");
        expect(response.body.message).to.equal(errorMessage);
    }

    public verifyNotFoundResponse(
        response: Cypress.Response<any>, 
        errorMessage: string
    ) {
        // smoke
        expect(response.status).to.eq(404);
        // performance
        expect(response).to.have.property("duration").lessThan(responseTimeThreshold);
        // contract
        expect(response.body.message).to.be.a("string");
        // data
        expect(response.body.cod).to.equal("404");
        expect(response.body.message).to.equal(errorMessage);
        
    }

    public verifyValidResponse(
        response: Cypress.Response<any>,
        geoId: number = 2745909, 
        countryCode: string = "NL"
    ) {
        // smoke
        expect(response.status).to.eq(200);
        // performance
        expect(response).to.have.property("duration").lessThan(responseTimeThreshold);
        // contract
        expect(response.body.id).to.be.a("number");
        // data
        expect(response.body.cod).to.equal(200);
        expect(response.body.sys.country).to.equal(countryCode);
        expect(response.body.id).to.equal(geoId);
    }
}