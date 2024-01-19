// script.js
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', function() {
        sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex';
    });

    var searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        // Implement the search functionality
        // Fetch and display articles based on the search criteria
    });

    // Additional JavaScript for interactive features
});


document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    var mapViewLink = document.querySelector('.vertical-nav ul li:nth-child(4) a'); // Selecting the 'Map view' link

    searchButton.addEventListener('click', function() {
        // Placeholder: Implement the search and filter functionality
        console.log('Search functionality to be implemented');
    });

    mapViewLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        alert('Map view will be implemented soon.'); // Display the message
    });

    // Additional code to build the timeline based on search results will go here
});