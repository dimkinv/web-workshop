import {fetchAsteroidsForDates} from './services/fetch.service';
import { buildTableWithData } from './services/table-builder.service';

export async function onSearchButtonClick(){
    const startDateEl = document.querySelector('#startDate') as HTMLInputElement;
    const endDateEl = document.querySelector('#endDate') as HTMLInputElement;

    if(!startDateEl || !endDateEl){
        return;
    }

    const asteroids = await fetchAsteroidsForDates(startDateEl.value, endDateEl.value);
    buildTableWithData(asteroids);
    console.log(asteroids);
}