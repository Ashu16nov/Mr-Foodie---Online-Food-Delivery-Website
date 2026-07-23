// Mr. Foodie - Live Search Controller

document.addEventListener("DOMContentLoaded", () => {
    setupSearchEvents();
});

function setupSearchEvents() {
    const navSearch = document.getElementById("nav-search");
    const heroSearch = document.getElementById("hero-search");
    const heroSearchBtn = document.getElementById("hero-search-btn");

    if (navSearch) {
        navSearch.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            // Sync with hero search input if visible
            if (heroSearch) heroSearch.value = e.target.value;
            
            executeSearch(query);
        });
    }

    if (heroSearch) {
        heroSearch.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            // Sync with nav search input
            if (navSearch) navSearch.value = e.target.value;
            
            executeSearch(query);
        });
        
        // Listen for enter key
        heroSearch.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                scrollToSection("menu");
            }
        });
    }

    if (heroSearchBtn) {
        heroSearchBtn.addEventListener("click", () => {
            scrollToSection("menu");
        });
    }
}

// Global search executor
function executeSearch(query) {
    // If query is empty, render the original datasets (honoring active filters)
    if (query === "") {
        // If there's an active filtering system, use its applyFilters
        if (typeof window.applyFilters === "function") {
            window.applyFilters();
        } else {
            if (typeof window.renderRestaurants === "function") window.renderRestaurants(window.RESTAURANTS_DB);
            if (typeof window.renderFoods === "function") window.renderFoods(window.FOODS_DB);
        }
        return;
    }

    // 1. Filter Restaurants
    const filteredRestaurants = window.RESTAURANTS_DB.filter(rest => {
        const matchesName = rest.name.toLowerCase().includes(query);
        const matchesCuisine = rest.cuisine.some(c => c.toLowerCase().includes(query));
        const matchesTag = rest.tag.toLowerCase().includes(query);
        return matchesName || matchesCuisine || matchesTag;
    });

    // 2. Filter Food Items
    const filteredFoods = window.FOODS_DB.filter(food => {
        const matchesName = food.name.toLowerCase().includes(query);
        const matchesCategory = food.category.toLowerCase().includes(query);
        const matchesCuisine = food.cuisine.toLowerCase().includes(query);
        const matchesDesc = food.description.toLowerCase().includes(query);
        return matchesName || matchesCategory || matchesCuisine || matchesDesc;
    });

    // Render results
    if (typeof window.renderRestaurants === "function") {
        window.renderRestaurants(filteredRestaurants);
    }
    
    if (typeof window.renderFoods === "function") {
        window.renderFoods(filteredFoods);
    }
}

// Navigation Helper
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
