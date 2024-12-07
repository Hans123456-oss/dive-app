# dive-app
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Dive App</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🌊 Advanced Dive Safety App</h1>
        </header>
        <main>
            <section class="calculator">
                <form id="diveForm">
                    <label for="depth">Depth (m):</label>
                    <input type="number" id="depth" placeholder="e.g., 20" required>

                    <label for="time">Dive Time (min):</label>
                    <input type="number" id="time" placeholder="e.g., 30" required>

                    <label for="oxygen">Oxygen Level (%):</label>
                    <input type="number" id="oxygen" placeholder="e.g., 32" required>

                    <button type="submit">Calculate</button>
                </form>
                <div id="results">
                    <h2>Results</h2>
                    <p>No-Decompression Time: <span id="noDecompression">-</span> minutes</p>
                    <p>Remaining Oxygen: <span id="remainingOxygen">-</span>%</p>
                    <p>
                        Safety Status: 
                        <span id="safetyStatus">-</span>
                        <span id="statusIcon">❓</span>
                    </p>
                </div>
            </section>

            <section class="map">
                <h2>🌍 Dive Map</h2>
                <div id="map"></div>
            </section>
        </main>
    </div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>