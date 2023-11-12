let map: google.maps.Map;

async function initMap(position:google.maps.LatLngLiteral, cityName:string = "default"): Promise<void> {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    map = new Map(document.getElementById("map") as HTMLElement, {
        center: position,
        zoom: 17
    });

    const marker = new google.maps.Marker({
        position: position,
        map: map,
    });

    const infowindow = new google.maps.InfoWindow({
        content: `<p>Location: ${cityName}</p>`,
    });

    google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
    });

}

const etsiiCoords:google.maps.LatLngLiteral = { lat: 28.482921928694683, lng: -16.322237460149434 };
initMap(etsiiCoords, "ETSII, Escuela Técnica Superior de Ingeriería Informática de la Universidad de La Laguna, Tenerife");