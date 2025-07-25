import { TvMazeAsserter } from './tv-maze-asserter';
import { WeatherApiAsserter } from './weather-api-asserter';

export class Asserter {
    private _weatherApi: WeatherApiAsserter = new WeatherApiAsserter();
    private _tvMaze: TvMazeAsserter = new TvMazeAsserter();
    
    public get tvMaze(): TvMazeAsserter {
        return this._tvMaze;
    }
    public get weatherApi(): WeatherApiAsserter {
        return this._weatherApi;
    }

    constructor() {}

}