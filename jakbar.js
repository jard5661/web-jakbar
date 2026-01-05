/**
 * Jakarta Barat Monitoring System - JavaScript
 * Main functionality for maps, tables, and data visualization
 */

// ======================
// FPK Table Population
// ======================
function populateFPKTable() {
    const fpkTableBody = document.getElementById('fpkTableBody');
    if (!fpkTableBody) return; // Safety check - exit if element doesn't exist
    
    const fpkData = [
        { no: 1, nama: "Dr. Ahmad Suryanto", jabatan: "Ketua", wilayah: "Cengkareng", kontak: "081234567890" },
        { no: 2, nama: "Ir. Siti Nurhaliza", jabatan: "Wakil Ketua", wilayah: "Grogol Petamburan", kontak: "081234567891" },
        { no: 3, nama: "H. Budi Santoso", jabatan: "Sekretaris", wilayah: "Taman Sari", kontak: "081234567892" },
        { no: 4, nama: "Dra. Maria Christina", jabatan: "Bendahara", wilayah: "Tambora", kontak: "081234567893" },
        { no: 5, nama: "Hj. Fatimah Zahra", jabatan: "Anggota", wilayah: "Kebon Jeruk", kontak: "081234567894" }
    ];
    
    fpkTableBody.innerHTML = ''; // Clear existing content
    
    fpkData.forEach(item => {
        const row = `
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm text-gray-900">${item.no}</td>
                <td class="px-6 py-4 text-sm font-medium text-gray-900">${item.nama}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${item.jabatan}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${item.wilayah}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${item.kontak}</td>
            </tr>
        `;
        fpkTableBody.innerHTML += row;
    });
}

// ======================
// Crime Map
// ======================
function initCrimeMap() {
    const mapElement = document.getElementById('crime-map');
    if (!mapElement) return; // Safety check
    
    // Initialize map
    const crimeMap = L.map('crime-map').setView([-6.1683, 106.7583], 12);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(crimeMap);
    
    // Crime hotspots data
    const crimeHotspots = [
        { lat: -6.1615, lng: 106.7539, level: "Zona Merah", area: "Taman Sari", cases: 15 },
        { lat: -6.1744, lng: 106.7881, level: "Zona Merah", area: "Tambora", cases: 12 },
        { lat: -6.1889, lng: 106.7667, level: "Zona Merah", area: "Cengkareng", cases: 10 },
        { lat: -6.1556, lng: 106.7889, level: "Zona Kuning", area: "Grogol Petamburan", cases: 8 },
        { lat: -6.2000, lng: 106.7500, level: "Zona Kuning", area: "Kebon Jeruk", cases: 6 },
        { lat: -6.1450, lng: 106.8100, level: "Zona Kuning", area: "Palmerah", cases: 5 },
        { lat: -6.1700, lng: 106.8000, level: "Zona Hijau", area: "Kembangan", cases: 3 },
        { lat: -6.1900, lng: 106.7800, level: "Zona Hijau", area: "Kalideres", cases: 2 }
    ];
    
    // Add circles for each hotspot
    crimeHotspots.forEach(spot => {
        let color;
        if (spot.level === "Zona Merah") color = '#ef4444';
        else if (spot.level === "Zona Kuning") color = '#f59e0b';
        else color = '#10b981';
        
        L.circle([spot.lat, spot.lng], {
            color: color,
            fillColor: color,
            fillOpacity: 0.3,
            radius: 800
        }).addTo(crimeMap).bindPopup(`
            <strong>${spot.area}</strong><br>
            Level: ${spot.level}<br>
            Kasus: ${spot.cases}
        `);
    });
    
    // Add legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
            <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.2);">
                <strong>Tingkat Rawan</strong><br>
                <i style="background: #ef4444; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Zona Merah<br>
                <i style="background: #f59e0b; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Zona Kuning<br>
                <i style="background: #10b981; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Zona Hijau
            </div>
        `;
        return div;
    };
    legend.addTo(crimeMap);
}

// ======================
// Conflict Map
// ======================
function initConflictMap() {
    const mapElement = document.getElementById('conflict-map');
    if (!mapElement) return; // Safety check
    
    // Initialize map
    const conflictMap = L.map('conflict-map').setView([-6.1683, 106.7583], 12);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(conflictMap);
    
    // Conflict zones data
    const conflictZones = [
        { lat: -6.1650, lng: 106.7600, level: "Zona Merah", area: "Taman Sari", type: "Konflik Sosial", status: "Monitoring Aktif" },
        { lat: -6.1800, lng: 106.7700, level: "Zona Merah", area: "Tambora", type: "Konflik Antar Warga", status: "Penanganan" },
        { lat: -6.1600, lng: 106.7900, level: "Zona Kuning", area: "Grogol", type: "Potensi Konflik", status: "Pengawasan" },
        { lat: -6.1950, lng: 106.7550, level: "Zona Kuning", area: "Cengkareng", type: "Potensi Konflik", status: "Pengawasan" },
        { lat: -6.1500, lng: 106.8050, level: "Zona Hijau", area: "Palmerah", type: "Kondusif", status: "Aman" }
    ];
    
    // Add circles for each zone
    conflictZones.forEach(zone => {
        let color;
        if (zone.level === "Zona Merah") color = '#dc2626';
        else if (zone.level === "Zona Kuning") color = '#f59e0b';
        else color = '#059669';
        
        L.circle([zone.lat, zone.lng], {
            color: color,
            fillColor: color,
            fillOpacity: 0.3,
            radius: 1000
        }).addTo(conflictMap).bindPopup(`
            <strong>${zone.area}</strong><br>
            Level: ${zone.level}<br>
            Jenis: ${zone.type}<br>
            Status: ${zone.status}
        `);
    });
    
    // Add legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
            <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.2);">
                <strong>Status Konflik</strong><br>
                <i style="background: #dc2626; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Zona Merah<br>
                <i style="background: #f59e0b; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Zona Kuning<br>
                <i style="background: #059669; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Zona Hijau
            </div>
        `;
        return div;
    };
    legend.addTo(conflictMap);
}

// ======================
// Foreign Nationals Map
// ======================
function initForeignMap() {
    const mapElement = document.getElementById('foreign-map');
    if (!mapElement) return; // Safety check
    
    // Initialize map
    const foreignMap = L.map('foreign-map').setView([-6.1683, 106.7583], 12);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(foreignMap);
    
    // Foreign nationals concentration data
    const foreignLocations = [
        { lat: -6.1700, lng: 106.7600, area: "Taman Sari", count: 245, status: "Legal", countries: "China, India, Thailand" },
        { lat: -6.1800, lng: 106.7800, area: "Tambora", count: 189, status: "Legal", countries: "Bangladesh, Myanmar" },
        { lat: -6.1600, lng: 106.8000, area: "Grogol", count: 156, status: "Legal", countries: "Philippines, Vietnam" },
        { lat: -6.1900, lng: 106.7500, area: "Cengkareng", count: 134, status: "Legal", countries: "Malaysia, Singapore" },
        { lat: -6.2000, lng: 106.7600, area: "Kebon Jeruk", count: 98, status: "Legal", countries: "Korea, Japan" },
        { lat: -6.1750, lng: 106.7450, area: "Tambora Selatan", count: 45, status: "Pengawasan", countries: "Various" }
    ];
    
    // Add markers for each location
    foreignLocations.forEach(location => {
        let color = location.status === "Legal" ? '#3b82f6' : '#f59e0b';
        
        L.circleMarker([location.lat, location.lng], {
            radius: Math.sqrt(location.count) / 2,
            fillColor: color,
            color: color,
            weight: 1,
            opacity: 1,
            fillOpacity: 0.5
        }).addTo(foreignMap).bindPopup(`
            <strong>${location.area}</strong><br>
            Jumlah: ${location.count} orang<br>
            Status: ${location.status}<br>
            Negara Asal: ${location.countries}
        `);
    });
    
    // Add legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
            <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.2);">
                <strong>Status</strong><br>
                <i style="background: #3b82f6; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Legal<br>
                <i style="background: #f59e0b; width: 18px; height: 18px; display: inline-block; opacity: 0.5;"></i> Dalam Pengawasan<br>
                <small>Ukuran lingkaran = jumlah orang</small>
            </div>
        `;
        return div;
    };
    legend.addTo(foreignMap);
}

// ======================
// Auto-Initialize
// ======================
// Run all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Tables
    populateFPKTable();
    
    // Maps
    initCrimeMap();
    initConflictMap();
    initForeignMap();
});

// Export functions for manual initialization if needed
window.JakbarMonitoring = {
    populateFPKTable,
    initCrimeMap,
    initConflictMap,
    initForeignMap
};