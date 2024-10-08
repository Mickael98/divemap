// Initialisation de la carte Leaflet
//var map = L.map('map').setView([20, 0], 2); // Vue initiale sur le monde
// Initialisation de la carte Leaflet avec focus sur la Polynésie française
var map = L.map('map').setView([-17.6509, -149.4260], 8);  // Coordonnées de la Polynésie avec un zoom ajusté

// Chargement des tuiles de la carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Chargement des sites de plongée
fetch('sites.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(site => {
            L.marker([site.lat, site.lng]).addTo(map)
                .bindPopup(`<b>${site.name}</b><br>Localisation: ${site.location}<br><br>Profondeur min: ${site.min_depth}m<br>Profondeur max: ${site.max_depth}m`);
        });
    });
