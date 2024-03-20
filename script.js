        // Set the launch date for your website
        const launchDate = new Date('2024-04-1 00:00:00').getTime();

        // Update the countdown every second
        const countdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = launchDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the launch date has passed, display a message
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById('countdown-text').innerHTML = 'Website is live!';
                document.getElementById('countdown').innerHTML = '';
            }
        }, 1000);