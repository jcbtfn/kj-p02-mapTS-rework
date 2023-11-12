const endpoint: string = 'https://gist.githubusercontent.com/jcbtfn/688cb35c398469b682168b5bd2513007/raw/61b087a27d8030ba78fdb615fdff04b42d69ee12/testcities.json';

const citiesList = document.querySelector('.cities-list');

interface City {
    country: string;
    name: string;
    lat: string;
    lng: string;
}

const cities: City[] = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...(data as City[])))
    .then(showCities)

function showCities() {

    const html: string = cities.map(city => {
        return `
                <li>
                    <span class="name">${city.name}</span>
                </li>
                `;
    }).join('');

    citiesList!.innerHTML = html;

    const allCitiesList = document.querySelectorAll('.name');
    allCitiesList.forEach(cityInTheList => {
        cityInTheList.addEventListener('click', showInfo);
    });

}

const citiesinfo = document.querySelector('.cities-info');

function showInfo(e:any) {

    const cityToShow = cities.find(cityInArray => cityInArray.name === e.target.textContent);
    citiesinfo!.innerHTML = `
                            <li>
                                <span><b>Name:</b> ${cityToShow!.name}</span>
                            </li>
                            <li>
                                <span><b>Country code:</b> ${cityToShow!.country}</span>
                            </li>
                            <li>
                                <span><b>Lat:</b> ${cityToShow!.lat}</span>
                            </li>
                            <li>
                                <span><b>Lng:</b> ${cityToShow!.lng}</span>
                            </li>
                            `;

    let position:google.maps.LatLngLiteral = { lat: parseFloat(cityToShow!.lat), lng: parseFloat(cityToShow!.lng) };
    initMap(position, cityToShow!.name);

};