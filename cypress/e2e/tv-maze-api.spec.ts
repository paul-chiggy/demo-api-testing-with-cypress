import { Asserter } from "../stepper-asserter/asserter";
import { Stepper } from "../stepper-asserter/stepper";
import { tvMazeApiUrls } from "../support/test-data";

describe("TV Maze API tests", () => {

  const stepper: Stepper = new Stepper();
  const asserter: Asserter = new Asserter();
  const id = 169; // Example show ID for testing

  it("should return 200 for valid request (breaking bad)", () => {
    stepper.request(tvMazeApiUrls.searchShows + "breaking+bad")
      .then((response) => {
        asserter.tvMaze.verifyValidSearchShowResponse(response, id);
      });
  });

  it("should get show by ID and validate the show ID in URL", () => {
    stepper.request(tvMazeApiUrls.shows + id)
      .then((response) => {
        asserter.tvMaze.verifyValidGetShowByIdResponse(response, id);
      });
  });
});