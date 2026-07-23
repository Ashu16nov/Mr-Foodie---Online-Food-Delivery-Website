// Mr. Foodie - Mock Database & App Initializer

// Global Databases
window.RESTAURANTS_DB = [
    {
        id: 1,
        name: "Punjabi Tadka",
        rating: 4.8,
        deliveryTime: "20-30 mins",
        cuisine: ["North Indian", "Punjabi", "Dal Makhani"],
        priceRange: "₹₹",
        offerBadge: "50% OFF upto ₹100",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
        tag: "Popular"
    },
    {
        id: 2,
        name: "Dosa Plaza",
        rating: 4.6,
        deliveryTime: "15-25 mins",
        cuisine: ["South Indian", "Dosa", "Idli"],
        priceRange: "₹",
        offerBadge: "Buy 1 Get 1 Free",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=600&q=80",
        tag: "Popular"
    },
    {
        id: 3,
        name: "Biryani House",
        rating: 4.9,
        deliveryTime: "30-40 mins",
        cuisine: ["Biryani", "Hyderabadi", "Mughlai"],
        priceRange: "₹₹",
        offerBadge: "Free Raita on Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        tag: "Popular"
    },
    {
        id: 4,
        name: "Chai & Snacks Corner",
        rating: 4.4,
        deliveryTime: "10-15 mins",
        cuisine: ["Snacks", "Street Food", "Beverages"],
        priceRange: "₹",
        offerBadge: "Chai Free above ₹150",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
        tag: "Newest"
    },
    {
        id: 5,
        name: "Rajasthani Rasoi",
        rating: 4.7,
        deliveryTime: "25-35 mins",
        cuisine: ["Rajasthani", "Dal Baati", "Thali"],
        priceRange: "₹₹",
        offerBadge: "10% OFF on Thali",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
        tag: "Popular"
    },
    {
        id: 6,
        name: "Mithai & More",
        rating: 4.8,
        deliveryTime: "10-20 mins",
        cuisine: ["Sweets", "Mithai", "Desserts"],
        priceRange: "₹",
        offerBadge: "20% OFF on Sweets",
        image: "https://images.unsplash.com/photo-1605197161470-5d49ca7ea0ad?auto=format&fit=crop&w=600&q=80",
        tag: "Popular"
    },
    {
        id: 7,
        name: "Kebab-E-Khas",
        rating: 4.5,
        deliveryTime: "20-30 mins",
        cuisine: ["Mughlai", "Kebab", "Tandoor"],
        priceRange: "₹₹",
        offerBadge: "Free Naan with Kebab",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
        tag: "Newest"
    },
    {
        id: 8,
        name: "Mumbai Street Bites",
        rating: 4.5,
        deliveryTime: "15-20 mins",
        cuisine: ["Street Food", "Chaat", "Vada Pav"],
        priceRange: "₹",
        offerBadge: "BOGO on Pav Bhaji",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
        tag: "Newest"
    }
];

window.FOODS_DB = [
    {
        id: 1,
        restaurantId: 3,
        name: "Hyderabadi Dum Biryani",
        price: 280,
        category: "Biryani",
        cuisine: "Hyderabadi",
        rating: 4.9,
        state: "Telangana",
        veg: false,
        description: "Slow-cooked fragrant basmati rice layered with marinated tender chicken, whole spices, saffron, caramelised onions, and fresh mint — sealed and dum-cooked to aromatic perfection.",
        ingredients: ["Basmati Rice", "Chicken", "Saffron", "Fried Onions", "Whole Spices", "Mint", "Rose Water"],
        prepTime: "40 mins",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        restaurantId: 3,
        name: "Mutton Dum Biryani",
        price: 340,
        category: "Biryani",
        cuisine: "Hyderabadi",
        rating: 4.8,
        state: "Telangana",
        veg: false,
        description: "Succulent slow-cooked mutton pieces marinated in yogurt and spices, layered with fragrant dum-cooked basmati, saffron, crispy onions and fresh mint.",
        ingredients: ["Mutton", "Basmati Rice", "Yogurt Marinade", "Saffron", "Crispy Onions", "Mint", "Whole Spices"],
        prepTime: "50 mins",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        restaurantId: 1,
        name: "Butter Chicken",
        price: 260,
        category: "North Indian",
        cuisine: "Punjabi",
        rating: 4.9,
        state: "Punjab",
        veg: false,
        description: "Tender pieces of tandoori chicken simmered in a silky, mildly spiced tomato-cashew gravy with butter, fresh cream, and fragrant kasuri methi leaves.",
        ingredients: ["Tandoori Chicken", "Tomatoes", "Cashew Paste", "Butter", "Cream", "Kasuri Methi", "Garam Masala"],
        prepTime: "25 mins",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        restaurantId: 1,
        name: "Dal Makhani",
        price: 180,
        category: "North Indian",
        cuisine: "Punjabi",
        rating: 4.8,
        state: "Punjab",
        veg: true,
        description: "Slow-cooked whole black lentils and kidney beans simmered overnight with butter, tomatoes, and aromatic spices, finished with a generous splash of cream.",
        ingredients: ["Black Urad Dal", "Kidney Beans", "Butter", "Tomatoes", "Cream", "Ginger-Garlic", "Garam Masala"],
        prepTime: "30 mins",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        restaurantId: 1,
        name: "Paneer Butter Masala",
        price: 230,
        category: "North Indian",
        cuisine: "Punjabi",
        rating: 4.7,
        state: "Punjab",
        veg: true,
        description: "Soft cubes of fresh cottage cheese cooked in a rich, velvety tomato-onion-cashew gravy with warming spices, butter, and a swirl of cream.",
        ingredients: ["Fresh Paneer", "Tomato-Onion Gravy", "Cashews", "Butter", "Cream", "Cardamom", "Coriander"],
        prepTime: "20 mins",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        restaurantId: 1,
        name: "Sarson da Saag & Makki Roti",
        price: 160,
        category: "North Indian",
        cuisine: "Punjabi",
        rating: 4.8,
        state: "Punjab",
        veg: true,
        description: "Winter special slow-cooked mustard and spinach greens smothered with makhan (white butter), served with golden cornmeal flatbread — a quintessential Punjabi delight.",
        ingredients: ["Mustard Greens", "Spinach", "White Butter", "Corn Flour Roti", "Garlic", "Ginger", "Green Chilies"],
        prepTime: "35 mins",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        restaurantId: 2,
        name: "Masala Dosa",
        price: 120,
        category: "South Indian",
        cuisine: "South Indian",
        rating: 4.8,
        state: "Tamil Nadu",
        veg: true,
        description: "Thin, crispy golden rice crepe filled with a perfectly spiced potato masala, served with coconut chutney, tomato chutney, and piping hot lentil sambar.",
        ingredients: ["Fermented Rice-Lentil Batter", "Potato Masala", "Mustard Seeds", "Curry Leaves", "Turmeric", "Ghee"],
        prepTime: "15 mins",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        restaurantId: 2,
        name: "Idli Sambar Combo",
        price: 80,
        category: "South Indian",
        cuisine: "South Indian",
        rating: 4.6,
        state: "Tamil Nadu",
        veg: true,
        description: "Three soft, pillowy steamed rice-lentil cakes served with a piping hot, tangy vegetable sambar and two varieties of coconut chutney.",
        ingredients: ["Steamed Rice Cakes", "Vegetable Sambar", "Coconut Chutney", "Tamarind", "Toor Dal"],
        prepTime: "10 mins",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        restaurantId: 2,
        name: "Appam with Stew",
        price: 130,
        category: "South Indian",
        cuisine: "South Indian",
        rating: 4.7,
        state: "Kerala",
        veg: true,
        description: "Lacy, soft-centered fermented rice hoppers served with a mild and creamy coconut milk stew loaded with vegetables and subtle spices.",
        ingredients: ["Fermented Rice Batter", "Coconut Milk Stew", "Mixed Vegetables", "Cardamom", "Curry Leaves"],
        prepTime: "18 mins",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        restaurantId: 7,
        name: "Seekh Kebab",
        price: 240,
        category: "Mughlai",
        cuisine: "Mughlai",
        rating: 4.7,
        state: "Uttar Pradesh",
        veg: false,
        description: "Minced spiced lamb skewers chargrilled on a live tandoor, served with mint-coriander chutney, sliced onions, and a wedge of lemon.",
        ingredients: ["Minced Lamb", "Onions", "Green Chilies", "Garam Masala", "Coriander", "Charcoal-grilled"],
        prepTime: "20 mins",
        image: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        restaurantId: 7,
        name: "Paneer Tikka",
        price: 200,
        category: "Mughlai",
        cuisine: "Mughlai",
        rating: 4.6,
        state: "Delhi",
        veg: true,
        description: "Marinated paneer cubes and bell peppers charred to smoky perfection in a tandoor, served with mint chutney and onion rings.",
        ingredients: ["Fresh Paneer", "Bell Peppers", "Yogurt Marinade", "Tandoori Masala", "Chaat Masala", "Lemon"],
        prepTime: "18 mins",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        restaurantId: 8,
        name: "Pav Bhaji",
        price: 100,
        category: "Street Food",
        cuisine: "Maharashtrian",
        rating: 4.7,
        state: "Maharashtra",
        veg: true,
        description: "Mumbai's iconic spiced mashed vegetable curry cooked with a generous knob of butter, served with toasted, buttered pav buns and raw onion.",
        ingredients: ["Mixed Vegetables", "Pav Bhaji Masala", "Butter", "Pav Buns", "Onion", "Lemon", "Coriander"],
        prepTime: "15 mins",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        restaurantId: 8,
        name: "Vada Pav",
        price: 35,
        category: "Street Food",
        cuisine: "Maharashtrian",
        rating: 4.8,
        state: "Maharashtra",
        veg: true,
        description: "Mumbai's original burger — a spiced potato vada dipped in chickpea batter, deep-fried golden, stuffed in a soft pav with dry garlic and green chutneys.",
        ingredients: ["Potato Vada", "Pav Bun", "Chickpea Batter", "Garlic Chutney", "Green Chutney", "Mustard Seeds"],
        prepTime: "8 mins",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        restaurantId: 5,
        name: "Dal Baati Churma",
        price: 210,
        category: "Rajasthani",
        cuisine: "Rajasthani",
        rating: 4.8,
        state: "Rajasthan",
        veg: true,
        description: "Rajasthan's iconic trifecta — crispy baked wheat baatis dunked in spiced five-lentil dal, paired with sweet, crumbly churma and plenty of ghee.",
        ingredients: ["Wheat Flour Baati", "Five-Lentil Dal", "Churma (Wheat+Ghee+Sugar)", "Lots of Ghee"],
        prepTime: "35 mins",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        restaurantId: 5,
        name: "Rajasthani Thali",
        price: 320,
        category: "Rajasthani",
        cuisine: "Rajasthani",
        rating: 4.7,
        state: "Rajasthan",
        veg: true,
        description: "A royal Rajasthani spread — ker sangri sabzi, gatte ki sabzi, bajra roti, dal, rice, papad, pickle, churma ladoo, and chaas — all in one grand platter.",
        ingredients: ["Ker Sangri", "Gatte ki Sabzi", "Bajra Roti", "Lentil Dal", "Rice", "Churma Ladoo", "Chaas"],
        prepTime: "30 mins",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        restaurantId: 6,
        name: "Gulab Jamun",
        price: 60,
        category: "Desserts",
        cuisine: "North Indian",
        rating: 4.9,
        state: "Uttar Pradesh",
        veg: true,
        description: "Soft, pillowy khoya dumplings fried golden and soaked in warm rose-cardamom sugar syrup — India's most beloved festive sweet.",
        ingredients: ["Khoya", "Maida", "Baking Soda", "Rose Water Sugar Syrup", "Cardamom", "Saffron"],
        prepTime: "10 mins",
        image: "https://images.unsplash.com/photo-1605197161470-5d49ca7ea0ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        restaurantId: 6,
        name: "Rasgulla",
        price: 50,
        category: "Desserts",
        cuisine: "Bengali",
        rating: 4.8,
        state: "West Bengal",
        veg: true,
        description: "Soft, spongy chenna-based white balls simmered in light sugar syrup — the iconic Bengali mithai with a mild sweetness and melt-in-mouth texture.",
        ingredients: ["Fresh Chenna", "Sugar Syrup", "Cardamom", "Rose Water"],
        prepTime: "15 mins",
        image: "https://images.unsplash.com/photo-1605197161470-5d49ca7ea0ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        restaurantId: 4,
        name: "Samosa (2 pcs)",
        price: 40,
        category: "Fast Food",
        cuisine: "North Indian",
        rating: 4.6,
        state: "Delhi",
        veg: true,
        description: "Crispy triangular golden pastry shells stuffed with spiced potato-pea filling, fried to perfection and served with tangy tamarind and green chutneys.",
        ingredients: ["Maida Shell", "Potato", "Green Peas", "Cumin", "Coriander", "Amchur", "Tamarind Chutney"],
        prepTime: "5 mins",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 19,
        restaurantId: 4,
        name: "Dhokla",
        price: 80,
        category: "Gujarati",
        cuisine: "Gujarati",
        rating: 4.5,
        state: "Gujarat",
        veg: true,
        description: "Soft, fluffy steamed chickpea flour cakes tempered with mustard seeds, curry leaves, and green chilies — a light, tangy, and healthy Gujarati snack.",
        ingredients: ["Chickpea Flour", "Yogurt", "Mustard Seeds", "Curry Leaves", "Green Chilies", "Lemon"],
        prepTime: "20 mins",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        restaurantId: 4,
        name: "Cutting Chai",
        price: 20,
        category: "Beverages",
        cuisine: "North Indian",
        rating: 4.9,
        state: "Maharashtra",
        veg: true,
        description: "India's beloved half-cup strong masala tea brewed with ginger, cardamom, cloves, and tea leaves with full-fat milk — the real Indian chai experience.",
        ingredients: ["Strong Tea Leaves", "Full-Fat Milk", "Ginger", "Cardamom", "Cloves", "Sugar"],
        prepTime: "5 mins",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 21,
        restaurantId: 1,
        name: "Mango Lassi",
        price: 90,
        category: "Beverages",
        cuisine: "Punjabi",
        rating: 4.8,
        state: "Punjab",
        veg: true,
        description: "Chilled, frothy blended drink of sweet Alphonso mango pulp, fresh homemade curd, milk, sugar, and a whisper of cardamom powder.",
        ingredients: ["Alphonso Mango Pulp", "Fresh Curd", "Milk", "Cardamom Powder", "Pistachio Garnish"],
        prepTime: "5 mins",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 22,
        restaurantId: 1,
        name: "Garlic Naan",
        price: 60,
        category: "North Indian",
        cuisine: "Punjabi",
        rating: 4.6,
        state: "Punjab",
        veg: true,
        description: "Soft, fluffy leavened flatbread baked in a tandoor oven, generously brushed with garlic-infused butter and fresh coriander — best with any North Indian curry.",
        ingredients: ["Maida", "Yeast", "Yogurt", "Garlic Butter", "Fresh Coriander", "Ghee Finish"],
        prepTime: "10 mins",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
    }
];

window.OFFERS_DB = [
    {
        id: 1,
        title: "50% OFF upto Rs.100 on your first order",
        code: "MRFOODIE50",
        discount: "50% OFF",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
        cta: "Order Now"
    },
    {
        id: 2,
        title: "Buy 1 Get 1 Free on all Biryani orders today",
        code: "BIRYANI1",
        discount: "Buy 1 Get 1",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        cta: "Get Biryani"
    },
    {
        id: 3,
        title: "Free Delivery on all orders above Rs.299",
        code: "FREEDEL",
        discount: "Free Delivery",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
        cta: "Explore Menu"
    },
    {
        id: 4,
        title: "Weekend Special: Thali at just Rs.199",
        code: "THALI199",
        discount: "Rs.199 Thali",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
        cta: "Order Thali"
    },
    {
        id: 5,
        title: "20% OFF on all Indian Sweets and Mithai",
        code: "MITHAI20",
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1605197161470-5d49ca7ea0ad?auto=format&fit=crop&w=800&q=80",
        cta: "Browse Sweets"
    }
];

// Document Ready Setup
document.addEventListener("DOMContentLoaded", () => {
    // Render all items
    renderOffers();
    renderRestaurants(window.RESTAURANTS_DB);
    renderFoods(window.FOODS_DB);
    setupScrollEffects();
    setupActiveNavOnScroll();
});

// Render Offer Carousel Slides
function renderOffers() {
    const innerContainer = document.getElementById("offers-carousel-inner");
    if (!innerContainer) return;
    
    innerContainer.innerHTML = "";
    window.OFFERS_DB.forEach((offer, index) => {
        const slide = document.createElement("div");
        slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
        slide.innerHTML = `
            <div class="carousel-offer-card">
                <div class="offer-content">
                    <span class="offer-badge">${offer.discount}</span>
                    <h3 class="offer-title">${offer.title}</h3>
                    <p class="offer-code mb-4">Use Code: <strong>${offer.code}</strong></p>
                    <button class="btn btn-search text-white border-0" onclick="scrollToMenu()">${offer.cta}</button>
                </div>
                <div class="offer-image-wrapper">
                    <img src="${offer.image}" class="offer-image" alt="Special Offer">
                </div>
            </div>
        `;
        innerContainer.appendChild(slide);
    });
}

// Render Restaurants Grid
function renderRestaurants(restaurants) {
    const container = document.getElementById("restaurants-grid");
    if (!container) return;
    
    container.innerHTML = "";
    if (restaurants.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-shop fs-1 text-muted d-block mb-3"></i>
                <p class="text-muted">No restaurants match your search.</p>
            </div>
        `;
        return;
    }
    
    restaurants.forEach(rest => {
        const cuisinesBadges = rest.cuisine.map(c => `<span class="badge-cuisine">${c}</span>`).join("");
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-6 col-sm-12 card-anim-wrapper";
        col.innerHTML = `
            <div class="restaurant-card">
                <div class="restaurant-img-wrapper">
                    <img src="${rest.image}" class="restaurant-img" alt="${rest.name}">
                    <span class="restaurant-offer-tag">${rest.offerBadge}</span>
                </div>
                <div class="restaurant-info">
                    <div class="restaurant-meta">
                        <span class="restaurant-rating-badge"><i class="bi bi-star-fill"></i> ${rest.rating}</span>
                        <span class="restaurant-price-range">${rest.priceRange}</span>
                    </div>
                    <h4 class="restaurant-name" onclick="filterByRestaurant(${rest.id})">${rest.name}</h4>
                    <div class="restaurant-cuisine">
                        ${cuisinesBadges}
                    </div>
                    <div class="restaurant-footer">
                        <span class="restaurant-delivery-time"><i class="bi bi-clock"></i> ${rest.deliveryTime}</span>
                        <button class="btn btn-sm btn-outline-danger rounded-pill px-3 fw-bold" onclick="filterByRestaurant(${rest.id})">View Menu</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Render Food Items Menu
function renderFoods(foods) {
    const container = document.getElementById("menu-grid");
    if (!container) return;
    
    container.innerHTML = "";
    if (foods.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search fs-1 text-muted d-block mb-3"></i>
                <p class="text-muted">No food items found matching your filters.</p>
            </div>
        `;
        return;
    }
    
    foods.forEach(food => {
        const isVeg = food.veg;
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 col-sm-12 mb-4 card-anim-wrapper";
        col.innerHTML = `
            <div class="food-card">
                <div class="food-img-wrapper">
                    <img src="${food.image}" class="food-img" alt="${food.name}">
                    <div class="food-type-badge">
                        <span class="food-type-indicator ${isVeg ? 'veg' : 'non-veg'}"></span>
                    </div>
                    <span class="food-rating-badge"><i class="bi bi-star-fill"></i> ${food.rating}</span>
                </div>
                <div class="food-info">
                    <div>
                        <h5 class="food-name">${food.name}</h5>
                        <p class="food-cuisine-cat mb-2">
                            <span class="badge badge-category">${food.category}</span>
                            <span class="ms-1 text-muted">${food.cuisine}</span>
                        </p>
                        <p class="food-desc">${food.description}</p>
                    </div>
                    <div class="food-action-row">
                        <span class="food-price">Rs.${food.price.toFixed(0)}</span>
                        <div>
                            <button class="btn btn-food-action btn-food-quickview px-2 me-1" onclick="openQuickView(${food.id})">
                                <i class="bi bi-eye"></i> Quick View
                            </button>
                            <button class="btn btn-food-action btn-food-add px-3" onclick="addToCart(${food.id})">
                                <i class="bi bi-plus-lg"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Navigation Helper to scroll to menu
function scrollToMenu() {
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function filterByRestaurant(restaurantId) {
    // Scroll to menu
    scrollToMenu();
    // Filter items in filter.js if defined
    if (typeof window.applyRestaurantFilter === "function") {
        window.applyRestaurantFilter(restaurantId);
    }
}

// Quick View Modal Opener
function openQuickView(foodId) {
    const food = window.FOODS_DB.find(f => f.id === foodId);
    if (!food) return;
    
    // Set content in Modal
    document.getElementById("modal-food-img").src = food.image;
    document.getElementById("modal-food-name").innerText = food.name;
    document.getElementById("modal-food-type").innerHTML = `
        <span class="food-type-indicator ${food.veg ? 'veg' : 'non-veg'} me-2"></span>
        ${food.veg ? 'Pure Veg' : 'Non-Veg'}
    `;
    document.getElementById("modal-food-rating").innerHTML = `<i class="bi bi-star-fill text-warning me-1"></i> ${food.rating} / 5`;
    document.getElementById("modal-food-category").innerText = food.category;
    document.getElementById("modal-food-cuisine").innerText = food.cuisine;
    document.getElementById("modal-food-desc").innerText = food.description;
    
    // Render ingredients list
    const ingContainer = document.getElementById("modal-food-ingredients");
    ingContainer.innerHTML = "";
    food.ingredients.forEach(ing => {
        const badge = document.createElement("span");
        badge.className = "badge bg-light text-dark border me-2 mb-2 px-3 py-2 rounded-pill";
        badge.innerText = ing;
        ingContainer.appendChild(badge);
    });
    
    document.getElementById("modal-food-time").innerText = food.prepTime;
    document.getElementById("modal-food-price").innerText = `Rs.${food.price.toFixed(0)}`;
    
    // Setup add to cart button in modal
    const modalAddBtn = document.getElementById("modal-add-to-cart-btn");
    modalAddBtn.onclick = () => {
        if (typeof window.addToCart === "function") {
            window.addToCart(food.id);
        }
        // Hide Modal
        const modalEl = document.getElementById("quickViewModal");
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    };
    
    // Open Modal
    const modalEl = document.getElementById("quickViewModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

// Scroll and sticky nav enhancements
function setupScrollEffects() {
    const navbar = document.querySelector(".navbar-premium");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
        
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });
    
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Active Nav highlight based on scroll position
function setupActiveNavOnScroll() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link-premium");
    
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 120; // offset navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                currentSectionId = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}
