const weatherApiBaseUrl = Cypress.env("weatherApiUrl");
const weatherAppId = Cypress.env("weatherAppId");
const tvMazeApiBaseUrl = Cypress.env("tvApiUrl");
export const responseTimeThreshold = 5000;

export const weatherApiErrorMessages = {
    400: "Nothing to geocode",
    401: "Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.",
    404: "city not found"
};

export const weatherApiUrls = {
    noAppId: weatherApiBaseUrl + "?appid=",
    invalidAppId: weatherApiBaseUrl + "?appid=blablabla",
    badRequest: weatherApiBaseUrl + "?appid=" + weatherAppId,
    validRequest: weatherApiBaseUrl + "?appid=" + weatherAppId + "&q=",
    notFoundRequest: weatherApiBaseUrl + "?appid=" + weatherAppId + "&q=bubububub"
};

export const tvMazeApiUrls = {
    searchShows: tvMazeApiBaseUrl + "/search/shows?q=",
    shows: tvMazeApiBaseUrl + "/shows/"
};