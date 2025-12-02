    var map = L.map('map').setView([51.175270, 4.31527], 10

    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([51.175270, 4.31527]).addTo(map)
      .openPopup();
