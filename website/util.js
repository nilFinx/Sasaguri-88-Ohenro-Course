function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ======= OpenFreeMap (OpenStreetMap) 表示 =======
function initOpenFreeMap() {
  if (!window.L || !document.getElementById('map')) return;
  mapInstance = L.map('map').setView([33.619846, 130.572904], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance);
  addOrUpdateMapMarker();
}

function addOrUpdateMapMarker() {
  if (!mapInstance) return;
  if (mapMarker) {
    mapMarker.setPopupContent(translations.mapPinText[currentLang]);
  } else {
    mapMarker = L.marker([33.619846, 130.572904])
      .addTo(mapInstance)
      .bindPopup(translations.mapPinText[currentLang])
      .openPopup();
  }
}