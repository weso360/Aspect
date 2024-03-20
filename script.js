// Set the launch date for your website (using UK date format: DD-MM-YYYY)
const launchDate = new Date('04-01-2024 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get the current time
    const now = new Date().getTime();
    
    // Calculate the time remaining until launch
    const distance = launchDate - now;

    // Check if launch date has passed
    if (distance <= 0) {
        clearInterval(countdown);
        document.getElementById('countdown-text').innerHTML = 'Website is live!';
        document.getElementById('countdown').innerHTML = '';
    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML elements with the countdown values
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);
