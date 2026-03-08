// LIVE UTC CLOCK + COUNTDOWN
const x = setInterval(function() {
    const now = new Date();

    // Format the time string
    const timeString = now.toUTCString();
    const timeLocalString = now.toLocaleString();
    const decimal = Date.now();

    //set countdown date to Jan 19, 2038 03:14:07 UTC / 2038-01-19T03:14:07
    const end = new Date('2038-01-19T03:14:07Z').getTime();
    const distance = end - new Date();

    // Time calculations for years, days, hours, minutes and seconds
    const years = Math.floor(distance / (365 * 1000 * 60 * 60 * 24));
    const days = Math.floor((distance % (365 * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML element
    document.getElementById('liveClock').textContent = timeString;
    document.getElementById('liveLocalClock').textContent = 'Local Time: ' + timeLocalString;
    document.getElementById('liveDecimal').textContent = Math.floor(decimal / 1000) + ' / 2147483647 seconds since January 1, 1970 00:00:00 UTC';
    document.getElementById('liveDecimal2').textContent = Math.floor(distance / 1000) + ' seconds to Y2K38';
    document.getElementById('countdown').textContent = years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('countdown').textContent = "THE WORLD HAS ENDED";
      document.getElementById('liveDecimal2').textContent = "THE WORLD HAS ENDED";
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
