// Form calculation logic
document.getElementById('diveForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const depth = parseFloat(document.getElementById('depth').value);
    const time = parseFloat(document.getElementById('time').value);
    const oxygen = parseFloat(document.getElementById('oxygen').value);

    const noDecompressionLimit = calculateNoDecompression(depth);
    const remainingOxygen = calculateOxygenRemaining(time, oxygen);
    const { safetyStatus, icon } = evaluateSafety(depth, time, remainingOxygen);

    document.getElementById('noDecompression').textContent = `${noDecompressionLimit}`;
    document.getElementById('remainingOxygen').textContent = `${remainingOxygen.toFixed(2)}`;
    document.getElementById('safetyStatus').textContent = safetyStatus;
    document.getElementById('statusIcon').textContent = icon;
});

function calculateNoDecompression(depth) {
    return Math.max(0, 60 - (depth - 10) * 2); // Placeholder formula
}

function calculateOxygenRemaining(time, oxygen) {
    const consumptionRate = 1.5; // Placeholder, % per minute
    return Math.max(0, oxygen - time * consumptionRate);
}

function evaluateSafety(depth, time, remainingOxygen) {
    if (depth > 40 || time > 60 || remainingOxygen < 5) {
        return { safetyStatus: "Unsafe", icon: "⚠️" };
    }
    return { safetyStatus: "Safe", icon: "✅" };
}

// Map integration
const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors',
}).addTo(map);
