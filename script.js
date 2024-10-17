// Simulate login functionality
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        document.getElementById("loginModal").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        displayPerformanceMetrics(); // Display the chart after login
    } else {
        alert("Invalid credentials! Please try again.");
    }
});

// Fetch Device Data (Simulated)
function fetchDeviceData() {
    let device = document.getElementById("deviceSelect").value;

    if (device === "Device 1") {
        updateDeviceData("UID-001", 22, 45, "Normal");
    } else if (device === "Device 2") {
        updateDeviceData("UID-002", 28, 50, "High");
    } else if (device === "Device 3") {
        updateDeviceData("UID-003", 20, 40, "Normal");
    }
}

function updateDeviceData(uid, temp, humidity, smoke) {
    document.getElementById("deviceUID").innerText = uid;
    document.getElementById("temperature").innerText = temp;
    document.getElementById("humidity").innerText = humidity;
    document.getElementById("smokeLevel").innerText = smoke;
}

// Initialize Performance Chart (Using Chart.js)
function displayPerformanceMetrics() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function startSurveillance() {
    alert("Surveillance mode activated! Monitoring live footage...");
    // Add code to start video surveillance here.
}
