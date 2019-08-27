export interface Asteroid {
    [index: string]: unknown;
    links: {
        self: string;
    },
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    absolute_diameter: number;
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        meters: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        miles: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        },
        feet: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        }
    },
    is_potentially_hazardous_asteroid: boolean;
    is_sentry_object: boolean;
}