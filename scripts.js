const countdown = document.querySelector('.countdown')
const message = document.querySelector('.message')

// Set wedding date in milliseconds
const weddingDate = new Date('June 19, 2021 15:00:00').getTime();

// Update every second
const interval = setInterval(() => {
    // Get today's date and time in milliseconds
    const now = new Date().getTime();

    // Distance from now to wedding date
    const distance = weddingDate - now

    // Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const sec = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${min}<span>Minutes</span></div>
        <div>${sec}<span>Seconds</span></div>
    `

    // On launch date
    if (distance < 0) {
        // Stop countdown
        clearInterval(interval)
        // Output text
        message.innerHTML = 'YUP!'
        countdown.style.display = 'none'
    } else {
        message.innerHTML = 'NOPE :('
    }
}, 1000);