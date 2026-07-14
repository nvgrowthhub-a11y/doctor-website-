// Nav menu active link dynamic toggle
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu a.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Book appointment button click logic
const bookBtn = document.querySelector('.btn-book');
bookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Appointment Booking Form is coming soon!");
});
