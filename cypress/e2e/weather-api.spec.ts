import { Asserter } from "../stepper-asserter/asserter";
import { Stepper } from "../stepper-asserter/stepper";
import { weatherApiErrorMessages, weatherApiUrls } from "../support/test-data";

describe("API Tests", () => {

  const stepper: Stepper = new Stepper();
  const asserter: Asserter = new Asserter();

  it("should return 401 Unauthorized when no appid provided", () => {
    stepper.request(weatherApiUrls.noAppId)
      .then((response) => {
        asserter.weatherApi.verifyUnauthorizedResponse(
          response, weatherApiErrorMessages[401]
        );
      });
  });

  it("should return 401 Unauthorized when invalid appid provided", () => {
    stepper.request(weatherApiUrls.invalidAppId)
      .then((response) => {
        asserter.weatherApi.verifyUnauthorizedResponse(
          response, weatherApiErrorMessages[401]
        );
      });
  });

  it("should return 400 for bad request", () => {
    stepper.request(weatherApiUrls.badRequest)
      .then((response) => {
        asserter.weatherApi.verifyBadRequestResponse(
          response, weatherApiErrorMessages[400]
        );
      });
  });

  it("should return 200 for valid request (Utrecht)", () => {
    stepper.request(weatherApiUrls.validRequest + "Utrecht")
      .then((response) => {
        asserter.weatherApi.verifyValidResponse(response);
      });
  });

  it("should return 404 Not found for inexistent location", () => {
    stepper.request(weatherApiUrls.notFoundRequest)
      .then((response) => {
        asserter.weatherApi.verifyNotFoundResponse(
          response, weatherApiErrorMessages[404]
        );
      });
  });

  describe("Parametrized tests", () => {

    it("should match IDs for requested cities", function () {
      cy.fixture("cities").then((cities) => {
        for (const city of cities) {
          stepper.request(weatherApiUrls.validRequest + city.name)
            .then((response) => {
              asserter.weatherApi.verifyValidResponse(response, city.id);
            });
        }
      });
    });

  });

});