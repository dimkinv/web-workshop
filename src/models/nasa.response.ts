import { Asteroid } from './asteroid.model';

export interface NASAResponse {
    near_earth_objects: {
        [index: string]: Asteroid[];
    }
}