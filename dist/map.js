"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let map;
function initMap(position) {
    return __awaiter(this, void 0, void 0, function* () {
        const { Map } = yield google.maps.importLibrary("maps");
        map = new Map(document.getElementById("map"), {
            center: position,
            zoom: 17
        });
        const marker = new google.maps.Marker({
            position: position,
            map: map,
        });
    });
}
const etsiiCoords = { lat: 28.482921928694683, lng: -16.322237460149434 };
initMap(etsiiCoords);
//# sourceMappingURL=map.js.map