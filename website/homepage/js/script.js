// script.js
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    const listViewLink = document.getElementById('listViewLink');
    const timelineViewLink = document.getElementById('timelineViewLink');
    const mapViewLink = document.getElementById('mapViewLink');
    const views = document.querySelectorAll('.view');

    function showView(viewId) {
        views.forEach(view => {
            view.style.display = view.id === viewId ? 'block' : 'none';
        });
    }

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showView('homePage');
    });

    listViewLink.addEventListener('click', (e) => {
        e.preventDefault();
        showView('listView');
    });

    timelineViewLink.addEventListener('click', (e) => {
        e.preventDefault();
        showView('timelineView');
    });

    // Mock implementation for mapViewLink
    mapViewLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Code for mapView will be added when it's implemented
        alert('Map view will be implemented soon.');
    });

    // Add more JavaScript for interactive features and API integration
});

