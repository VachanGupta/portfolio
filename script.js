document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// The wheels will spin automatically due to the CSS animations,
// but if you want to control them dynamically, here is a simple JavaScript snippet.

const wheels = document.querySelectorAll('.wheel');

// Example function to start spinning all wheels
function startSpinning() {
    wheels.forEach(wheel => {
        wheel.style.animationPlayState = 'running';
    });
}

// Example function to stop spinning all wheels
function stopSpinning() {
    wheels.forEach(wheel => {
        wheel.style.animationPlayState = 'paused';
    });
}

// Optionally, you can start/stop spinning on button click or other event
startSpinning();  // This starts the spin by default
// stopSpinning();  // Uncomment this line to stop the spin


