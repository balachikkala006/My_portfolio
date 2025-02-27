document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    var luckyButton = document.getElementById('lucky-button');
    var searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', function() {
        var query = searchBar.value.trim().toLowerCase(); // Convert input to lowercase
        var expectedQuery = 'bala narayana subbarao chikkala'; // Corrected spelling & lowercase

        if (query === expectedQuery) {
            window.location.href = 'search-results.html';
        } else {
            alert("Please type 'Bala Narayana Subbarao Chikkala' to see the portfolio.");
        }
    });

    luckyButton.addEventListener('click', function() {
        alert("Redirecting to a featured project!");
    });
});
