// Initialisation de la carte Leaflet
var map = L.map('map').setView([20, 0], 2); // Vue initiale sur le monde

// Chargement des tuiles de la carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Fonction pour ajouter des marqueurs à partir du fichier JSON
function addDiveSites() {
    fetch('sites.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(site => {
                // Ajout des marqueurs sur la carte
                var marker = L.marker([site.lat, site.lng]).addTo(map);
                
                // Ajout d'un popup avec les informations du site
                marker.bindPopup(`<b>${site.name}</b><br>Profondeur min: ${site.min_depth}m<br>Profondeur max: ${site.max_depth}m`);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des sites:', error));
}

// Appel de la fonction pour charger les sites de plongée
addDiveSites();
