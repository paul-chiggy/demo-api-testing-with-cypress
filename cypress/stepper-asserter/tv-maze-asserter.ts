export class TvMazeAsserter {

    constructor() {}

    
    public verifyValidSearchShowResponse(
        response: Cypress.Response<any>, 
        showId: number = 169
    ) {
        // smoke
        expect(response.status).to.eq(200);
        // performance
        expect(response).to.have.property("duration").lessThan(1000);
        // contract
        expect(response.body).to.be.an("array");
        expect(response.body[0].show).to.be.an("object");
        expect(response.body[0].show.id).to.be.a("number");
        // data        
        expect(response.body[0].show.id).to.eql(showId);
        expect(response.body.length).to.be.greaterThan(0);
    }

    public verifyValidGetShowByIdResponse(response: Cypress.Response<any>, showId: number) {
        // smoke
        expect(response.status).to.eq(200);
        // performance
        expect(response).to.have.property("duration").lessThan(1000);
        // contract
        expect(response.body).to.be.an("object");
        expect(response.body.url).to.be.a("string");
        expect(response.body.id).to.be.a("number");
        // data
        expect(response.body.id).to.eql(showId);
        expect(response.body.url).to.include(showId.toString());
    }
}