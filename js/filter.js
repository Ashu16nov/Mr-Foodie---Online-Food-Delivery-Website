// Mr. Foodie - Menu & Restaurant Filtering Logic

// State variables for filter selections
window.currentFilters = {
    category: "All",
    vegType: "All",      // "All", "Veg", "Non-Veg"
    cuisine: "All",      // "All", "Italian", "American", etc.
    rating: "All",       // "All", "4.5", "4.0"
    sortBy: "popular",   // "popular", "newest", "price-low", "price-high", "rating"
    restaurantId: "All"  // "All", or specific number
};

document.addEventListener("DOMContentLoaded", () => {
    setupFilterEvents();
});

// Setup Click listeners for all dynamic filters
function setupFilterEvents() {
    // 1. Category selector cards
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            categoryCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            
            const selectedCat = card.getAttribute("data-category");
            window.currentFilters.category = selectedCat;
            // When category changes, reset restaurant filter to show everything in that category
            window.currentFilters.restaurantId = "All";
            
            applyFilters();
        });
    });

    // 2. Veg / Non-Veg filters (Pill selectors)
    setupPillFilters(".filter-veg-pill", "vegType");

    // 3. Cuisine filters (Pill selectors)
    setupPillFilters(".filter-cuisine-pill", "cuisine");

    // 4. Rating filters (Select dropdown / Pills)
    const ratingSelect = document.getElementById("filter-rating");
    if (ratingSelect) {
        ratingSelect.addEventListener("change", (e) => {
            window.currentFilters.rating = e.target.value;
            applyFilters();
        });
    }

    // 5. Sort selection (Dropdown)
    const sortSelect = document.getElementById("filter-sort");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            window.currentFilters.sortBy = e.target.value;
            applyFilters();
        });
    }

    // Reset filters button
    const resetBtn = document.getElementById("btn-reset-filters");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            resetAllFilters();
        });
    }
}

// Helper to bind toggle actions to lists of pills
function setupPillFilters(selector, filterKey) {
    const pills = document.querySelectorAll(selector);
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            
            window.currentFilters[filterKey] = pill.getAttribute("data-value");
            applyFilters();
        });
    });
}

// Reset UI and state back to default
function resetAllFilters() {
    window.currentFilters = {
        category: "All",
        vegType: "All",
        cuisine: "All",
        rating: "All",
        sortBy: "popular",
        restaurantId: "All"
    };

    // Reset Category cards Active states
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach(c => c.classList.remove("active"));
    const allCatCard = document.querySelector(".category-card[data-category='All']");
    if (allCatCard) allCatCard.classList.add("active");

    // Reset Veg pills
    const vegPills = document.querySelectorAll(".filter-veg-pill");
    vegPills.forEach(p => p.classList.remove("active"));
    const allVegPill = document.querySelector(".filter-veg-pill[data-value='All']");
    if (allVegPill) allVegPill.classList.add("active");

    // Reset Cuisine pills
    const cuisinePills = document.querySelectorAll(".filter-cuisine-pill");
    cuisinePills.forEach(p => p.classList.remove("active"));
    const allCuisinePill = document.querySelector(".filter-cuisine-pill[data-value='All']");
    if (allCuisinePill) allCuisinePill.classList.add("active");

    // Reset Dropdowns
    const ratingSelect = document.getElementById("filter-rating");
    if (ratingSelect) ratingSelect.value = "All";

    const sortSelect = document.getElementById("filter-sort");
    if (sortSelect) sortSelect.value = "popular";

    // Clear alert banner if any
    const alertBanner = document.getElementById("restaurant-filter-alert");
    if (alertBanner) alertBanner.style.display = "none";

    applyFilters();
}

// Main logic that filters and sorts the foods database
function applyFilters() {
    let result = [...window.FOODS_DB];

    // Filter by Restaurant ID if specified
    if (window.currentFilters.restaurantId !== "All") {
        const rId = parseInt(window.currentFilters.restaurantId);
        result = result.filter(food => food.restaurantId === rId);
        
        // Show banner reminding user they are viewing a specific restaurant's menu
        const rest = window.RESTAURANTS_DB.find(r => r.id === rId);
        const alertBanner = document.getElementById("restaurant-filter-alert");
        if (alertBanner && rest) {
            alertBanner.style.display = "flex";
            alertBanner.innerHTML = `
                <div class="d-flex align-items-center justify-content-between w-100 px-3 py-2 bg-light border rounded">
                    <span class="small text-dark">Viewing menu items from <strong>${rest.name}</strong></span>
                    <button class="btn btn-sm btn-link text-danger text-decoration-none py-0 fs-7" onclick="resetRestaurantFilter()">Show All Restaurants</button>
                </div>
            `;
        }
    } else {
        const alertBanner = document.getElementById("restaurant-filter-alert");
        if (alertBanner) alertBanner.style.display = "none";
    }

    // Filter by Category
    if (window.currentFilters.category !== "All") {
        result = result.filter(food => food.category.toLowerCase() === window.currentFilters.category.toLowerCase());
    }

    // Filter by Veg / Non-Veg
    if (window.currentFilters.vegType !== "All") {
        const isVeg = window.currentFilters.vegType === "Veg";
        result = result.filter(food => food.veg === isVeg);
    }

    // Filter by Cuisine
    if (window.currentFilters.cuisine !== "All") {
        result = result.filter(food => food.cuisine.toLowerCase() === window.currentFilters.cuisine.toLowerCase());
    }

    // Filter by Rating
    if (window.currentFilters.rating !== "All") {
        const minRating = parseFloat(window.currentFilters.rating);
        result = result.filter(food => food.rating >= minRating);
    }

    // Sort items
    sortFoods(result);

    // Render resulting array
    if (typeof window.renderFoods === "function") {
        window.renderFoods(result);
    }
}

// Sort food items in place
function sortFoods(foodsArray) {
    switch (window.currentFilters.sortBy) {
        case "price-low":
            foodsArray.sort((a, b) => a.price - b.price);
            break;
        case "price-high":
            foodsArray.sort((a, b) => b.price - a.price);
            break;
        case "rating":
            foodsArray.sort((a, b) => b.rating - a.rating);
            break;
        case "newest":
            // Simulating newest by ID descending
            foodsArray.sort((a, b) => b.id - a.id);
            break;
        case "popular":
        default:
            // Simulating popular by default ratings (highest first)
            foodsArray.sort((a, b) => b.rating - a.rating);
            break;
    }
}

// Triggered when restaurant views are isolated
window.applyRestaurantFilter = function(restaurantId) {
    window.currentFilters.restaurantId = restaurantId;
    // Highlight category 'All' card for ease of search
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach(c => c.classList.remove("active"));
    const allCatCard = document.querySelector(".category-card[data-category='All']");
    if (allCatCard) allCatCard.classList.add("active");
    window.currentFilters.category = "All";
    
    applyFilters();
};

window.resetRestaurantFilter = function() {
    window.currentFilters.restaurantId = "All";
    const alertBanner = document.getElementById("restaurant-filter-alert");
    if (alertBanner) alertBanner.style.display = "none";
    applyFilters();
};
