////////////////////////////////////////****Js for Google-Map****/////////////////////////////////////////

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 22.5636406, lng: 76.9613985 },
        // 22.5636406,76.9613985
        // lat: 22.562245, lng: 76.959112
        zoom: 8,
    });
    console.log(map);
}
