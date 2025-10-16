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
  addOrUpdateMapMarker();
}