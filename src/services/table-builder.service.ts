import { Asteroid } from "../models/asteroid.model";

const TABLE_COLUMNS = ['id', 'name', 'absolute_diameter', 'is_potentially_hazardous_asteroid'];

export function buildTableWithData(asteroids: Asteroid[]) {
    const tableBody = document.querySelector('.table>tbody') as HTMLTableElement;
    if (!tableBody) {
        return;
    }

    const header = tableBody.firstChild;
    tableBody.innerHTML = '';
    tableBody.append(header!);

    const asteroidTRs = asteroids.map(asteroid => {
        const asteroidTR = document.createElement('tr');
        TABLE_COLUMNS.forEach(column => asteroidTR.append(buildTD(asteroid[column])))

        return asteroidTR;
    });

    tableBody.append(...asteroidTRs);
}

function buildTD(value: any){
    const td = document.createElement('td');
    td.innerHTML = value;

    return td;
}