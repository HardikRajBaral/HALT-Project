
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

const datesContainer = document.getElementById('dates');
const currentMonthYear = document.getElementById('currentMonthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const closeNotification = document.getElementById('closeNotification');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Nepali Events (Example: Event Name -> English Date)
const nepaliEvents = {
  '2025-01-15': 'Maghe Sankranti',
  '2025-02-19': 'Sonam Lhosar',
  '2025-03-08': 'International Women\'s Day',
  '2025-04-14': 'Nepali New Year',
  '2025-05-01': 'Labour Day',
  '2025-09-28': 'Indra Jatra',
  '2025-10-17': 'Dashain',
  '2025-11-12': 'Tihar',
};

// Render Calendar
function renderCalendar(month, year) {
  datesContainer.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  currentMonthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

  // Fill empty days
  for (let i = 0; i < firstDay; i++) {
    datesContainer.appendChild(document.createElement('div'));
  }

  // Fill days
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const dateString = date.toISOString().split('T')[0];
    const dayElement = document.createElement('div');
    dayElement.textContent = i;

    if (nepaliEvents[dateString]) {
      dayElement.classList.add('event');
      dayElement.title = nepaliEvents[dateString];
      dayElement.addEventListener('click', () => showNotification(nepaliEvents[dateString]));
    }

    datesContainer.appendChild(dayElement);
  }
}

// Show Notification
function showNotification(eventName) {
  notificationText.textContent = `Today's Event: ${eventName}`;
  notification.style.display = 'block';
}

// Close Notification
closeNotification.addEventListener('click', () => {
  notification.style.display = 'none';
});

// Previous Month
prevMonthButton.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

// Next Month
nextMonthButton.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Initial Render
renderCalendar(currentMonth, currentYear);