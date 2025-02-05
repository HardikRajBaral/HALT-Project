
function calculateCost() {
    let duration = document.getElementById('tripDuration').value;
    let costEstimate = document.getElementById('costEstimate');
    
    if(duration) {
        let cost = duration * 100; // Example cost calculation
        costEstimate.textContent = `Your estimated costing is NPR ${cost}`;
    } else {
        costEstimate.textContent = "Please enter trip duration";
    }
}


function submitPreferences() {
    let selectedPreferences = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        selectedPreferences.push(checkbox.parentElement.textContent.trim());
    });
    alert("Selected Preferences: " + selectedPreferences.join(", "));
}

document.addEventListener("DOMContentLoaded", function() {
    const bookings = [
        { startDate: "01/02/2024", endDate: "10/02/2024", food: "Vegetarian", guide: "Badri Nepal", contact: "+977 9876543210", cost: "$500" },
        { startDate: "05/03/2024", endDate: "15/03/2024", food: "Halal", guide: "Prabin B.K", contact: "+977 9812345678", cost: "$650" }
    ];
    
    const tableBody = document.getElementById("bookingTableBody");
    
    bookings.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booking.startDate}</td>
            <td>${booking.endDate}</td>
            <td>${booking.food}</td>
            <td>${booking.guide}</td>
            <td>${booking.contact}</td>
            <td>${booking.cost}</td>
        `;
        tableBody.appendChild(row);
    });
});