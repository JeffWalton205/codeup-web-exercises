

mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 5,
    center: [-77.091, 38.8620]
});



var marker1 = new mapboxgl.Marker()
    .setLngLat([-77.091, 38.8620])
    .setPopup(popup1)
    .addTo(map);



var popup1 = new mapboxgl.Popup()
    .setLngLat([-77.091, 38.8620])
    .setText("The Original Five Guys Burgers and Fries!")
    .addTo(map);


var marker2 = new mapboxgl.Marker()
    .setLngLat([-118.6025, 34.1681])
    .setPopup(popup2)
    .addTo(map);

var popup2 = new mapboxgl.Popup()
    .setLngLat([-118.6025, 34.1681])
    .setText("Spicy scallop rolls from heaven!")
    .addTo(map);

var marker3 = new mapboxgl.Marker()
    .setLngLat([-118.5971, 34.1844])
    .setPopup(popup3)
    .addTo(Map);

var popup3 = new mapboxgl.Popup()
    .setLngLat([-118.5971, 34.1844])
    .setText("Surf 'n' turf!")
    .addTo(Map);



var restaurants = [
    {
        name: "Five Guys Burgers and Fries",
        address: "3235 Columbia Pike, Arlington, Va",
        coordinates: [-77.091, 38.8620],
        description: "The original Five Guys Burgers and Fries!"
    },
    {
        name: "Something's Fishy",
        address: "21812 Ventura Blvd, Woodland Hills, CA 91364",
        coordinates: [-118.6025, 34.1681],
        description: "Spicy scallop rolls from heaven!"
    },
    {
        name: "Arnie Morton's Steakhouse",
        address: "6250 Canoga Ave Suite 111, Woodland Hills, CA 91367"
        coordinates: [-118.5971, 34.1844],
        description: "Surf and turf!"
    },
];




geocode(restaurant.address, mapboxToken).then(function(){

});
// var markerOptions = {
//     color: "#ff0000",
//
//
// }

// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-77.091, 38.8620])
//     .addTo(map)
//     .setPopup(popup)
//     popup.addTo(map);


// var popup = new mapboxgl.Popup()
//     .setLngLat([-77.091, 38.8620])
//     // .setHTML("<p>The Original Five Guys Burgers and Fries!</p>")
//     .addTo(map)
//
//     .setText(
//         'The original Five Guys Burger and Fries.'

    // );
//
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember the Alamo!</p>")
//     .addTo(map)







//     console.log(result);
//     map.setCenter(result)
// });




