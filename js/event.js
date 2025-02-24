document.addEventListener('DOMContentLoaded', function() {
    // Day tabs functionality
    const dayTabs = document.querySelectorAll('.day-tab');
    const scheduleDays = document.querySelectorAll('.schedule-day');

    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and days
            dayTabs.forEach(t => t.classList.remove('active'));
            scheduleDays.forEach(day => day.classList.remove('active'));

            // Add active class to clicked tab and corresponding day
            tab.classList.add('active');
            const dayId = tab.getAttribute('data-day');
            document.getElementById(dayId).classList.add('active');
        });
    });

    // Event filters functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Show/hide events based on filter
            eventCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.classList.contains(filter) ? 'block' : 'none';
                }
            });
        });
    });
});