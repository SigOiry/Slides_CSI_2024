// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 5);

// Add a tile layer to the map, using Esri World Imagery tiles
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ'
}).addTo(map);

// Array of locations to fly to, with multiple points for each location
var locations = [
    {
        coords: [51.505, -0.09],
        zoom: 10,
        points: [
            {coords: [51.5074, -0.1278], message: "Hello Big Ben!"},
            {coords: [51.5033, -0.1196], message: "Hello London Eye!"},
            {coords: [51.5081, -0.0759], message: "Hello Tower Bridge!"}
        ]
    },
    {
        coords: [48.8566, 2.3522],
        zoom: 10,
        points: [
            {coords: [48.8584, 2.2945], message: "Hello Eiffel Tower!"},
            {coords: [48.8606, 2.3376], message: "Hello Louvre!"},
            {coords: [48.8529, 2.3508], message: "Hello Notre-Dame!"}
        ]
    },
    {
        coords: [40.7128, -74.0060],
        zoom: 10,
        points: [
            {coords: [40.6892, -74.0445], message: "Hello Statue of Liberty!"},
            {coords: [40.7580, -73.9855], message: "Hello Times Square!"},
            {coords: [40.7308, -73.9973], message: "Hello Washington Square Park!"}
        ]
    },
    {
        coords: [35.6895, 139.6917],
        zoom: 10,
        points: [
            {coords: [35.6586, 139.7454], message: "Hello Tokyo Tower!"},
            {coords: [35.6764, 139.6993], message: "Hello Shibuya Crossing!"},
            {coords: [35.6895, 139.6920], message: "Hello Imperial Palace!"}
        ]
    }
];

// Variable to store all markers
var allMarkers = [];

// Add markers for each point in all locations and store them in allMarkers array
locations.forEach(function(location) {
    location.points.forEach(function(point) {
        var marker = L.marker(point.coords).addTo(map);
        marker.bindPopup(point.message).openPopup();
        allMarkers.push(marker);
    });
});

// Listen for the fragment shown event to animate map
Reveal.addEventListener('fragmentshown', function(event) {
    var fragmentIndex = event.fragment.getAttribute('data-fragment-index');
    var location = locations[fragmentIndex];

    // Fly to the main coordinates of the location
    map.flyTo(location.coords, location.zoom);
});
