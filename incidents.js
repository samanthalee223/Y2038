// LIVE UTC CLOCK + COUNTDOWN
const x = setInterval(function() {
    const now = new Date();

    // Format the time string
    const timeString = now.toUTCString();
    const timeLocalString = now.toLocaleString();
    const decimal = Date.now();

    //set countdown date to Jan 19, 2038 03:14:07 UTC / 2038-01-19T03:14:07
    const end = new Date('2038-01-19T03:14:07').getTime();
    const distance = end - new Date();

    // Update the HTML element
    document.getElementById('liveDecimal').textContent = Math.floor(distance / 1000) + ' seconds to Y2K38';

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('liveDecimal').textContent = "THE WORLD HAS ENDED";
    }
  }, -1000);

// SHUFFLE INCIDENTS GRID ON RELOAD

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById('incidents');
  // Convert HTML elements to array
  const events = Array.from(grid.children);

  // Fisher-Yates shuffle
  for (let i = events.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [events[i], events[j]] = [events[j], events[i]];
  }

  // Remove all items
  grid.innerHTML = "";

  // Re-add in shuffled order
  events.forEach(item => grid.appendChild(item));
});
