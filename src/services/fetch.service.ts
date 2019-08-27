import { Asteroid } from '../models/asteroid.model';
import { NASAResponse } from '../models/nasa.response';

export async function fetchAsteroidsForDates(startDate: string, endDate: string): Promise<Asteroid[]> {
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=`);
        const nasaData = await response.json() as NASAResponse;

        const days = Object.keys(nasaData.near_earth_objects);

        return nasaData.near_earth_objects[days[0]].map(asteroid => ({
            ...asteroid,
            absolute_diameter: asteroid.estimated_diameter.kilometers.estimated_diameter_max
        }));

    } catch (ex) {
        throw ex;
    }
}