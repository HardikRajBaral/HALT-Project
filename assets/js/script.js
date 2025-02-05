
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
