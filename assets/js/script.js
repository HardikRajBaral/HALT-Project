
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


const events = {
    "2025-02-19": "Maha Shivaratri",
    "2025-03-08": "Holi",
    "2025-04-14": "Nepali New Year",
    "2025-05-01": "May Day",
    "2025-08-19": "Raksha Bandhan",
    "2025-09-06": "Krishna Janmashtami",
    "2025-10-02": "Ghatasthapana",
    "2025-10-10": "Dashain (Phulpati)",
    "2025-10-11": "Dashain (Maha Ashtami)",
    "2025-10-12": "Dashain (Maha Navami)",
    "2025-10-13": "Dashain (Bijaya Dashami)",
    "2025-10-15": "Kojagrat Purnima",
    "2025-11-01": "Laxmi Puja",
    "2025-11-02": "Bhai Tika",
    "2025-11-15": "Chhath Puja"
};

let currentDate = new Date();

function generateCalendar(date) {
    const calendarDiv = document.getElementById("calendar");
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Update month label
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("monthLabel").textContent = `${monthNames[month]} ${year}`;

    // Clear previous calendar
    calendarDiv.innerHTML = "";

    // Create empty cells for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        calendarDiv.appendChild(emptyDiv);
    }

    // Get today's date
    const todayStr = new Date().toISOString().split('T')[0];

    // Create the day cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;

        // Check if the day is today
        if (dateStr === todayStr) {
            dayDiv.classList.add("today");
        }

        // Check if the day has an event
        if (events[dateStr]) {
            dayDiv.classList.add("event");
            dayDiv.onclick = () => showPopup(events[dateStr]);
        }

        // Add the day to the calendar
        calendarDiv.appendChild(dayDiv);
    }

    checkUpcomingEvents();
}

function showPopup(eventName) {
    const popup = document.getElementById("popup");
    popup.textContent = `Event: ${eventName}`;
    popup.style.display = "block";
    setTimeout(() => { popup.style.display = "none"; }, 3000);
}

function checkUpcomingEvents() {
    const todayStr = new Date().toISOString().split('T')[0];
    if (events[todayStr]) {
        showPopup(events[todayStr]);
    }
}

// Event listeners for next and previous month buttons
document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
});

// Generate calendar for the current month on page load
generateCalendar(currentDate);