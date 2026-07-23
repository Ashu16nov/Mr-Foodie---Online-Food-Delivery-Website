// Mr. Foodie - Shopping Cart Controller

window.cart = [];

// Initialize Cart event listeners
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
    setupCheckoutForm();
});

// Toast notification helper
function showToast(message, type = "success") {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer) return;
    
    const toastId = "toast_" + Date.now();
    const iconClass = type === "success" ? "bi-check-circle-fill text-success" : "bi-exclamation-circle-fill text-danger";
    
    const toastHTML = `
        <div id="${toastId}" class="toast toast-premium align-items-center" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000">
            <div class="d-flex">
                <div class="toast-body d-flex align-items-center gap-2">
                    <i class="bi ${iconClass}"></i>
                    <span>${message}</span>
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML("beforeend", toastHTML);
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
    
    // Remove from DOM after hidden
    toastElement.addEventListener("hidden.bs.toast", () => {
        toastElement.remove();
    });
}

// Add Item to Cart
window.addToCart = function(foodId) {
    const foodItem = window.FOODS_DB.find(f => f.id === foodId);
    if (!foodItem) return;
    
    const existingItem = window.cart.find(item => item.foodId === foodId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        window.cart.push({
            foodId: foodId,
            quantity: 1,
            price: foodItem.price
        });
    }
    
    showToast(`Added ${foodItem.name} to cart!`);
    updateCartUI();
};

// Remove Item from Cart
window.removeFromCart = function(foodId) {
    const foodItem = window.FOODS_DB.find(f => f.id === foodId);
    window.cart = window.cart.filter(item => item.foodId !== foodId);
    
    if (foodItem) {
        showToast(`Removed ${foodItem.name} from cart!`, "danger");
    }
    updateCartUI();
};

// Update quantity of an item
window.updateQuantity = function(foodId, change) {
    const item = window.cart.find(item => item.foodId === foodId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        window.removeFromCart(foodId);
    } else {
        updateCartUI();
    }
};

// Calculate and render cart lists
function updateCartUI() {
    const cartItemsList = document.getElementById("cart-items-list");
    const cartBadge = document.getElementById("cart-count-badge");
    const cartBadgeMobile = document.getElementById("cart-count-badge-mobile");
    const subtotalEl = document.getElementById("cart-subtotal");
    const taxEl = document.getElementById("cart-tax");
    const deliveryEl = document.getElementById("cart-delivery");
    const totalEl = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    
    if (!cartItemsList) return;
    
    // Total count of items
    const totalCount = window.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update Badges
    if (cartBadge) {
        cartBadge.innerText = totalCount;
        cartBadge.style.display = totalCount > 0 ? "block" : "none";
    }
    if (cartBadgeMobile) {
        cartBadgeMobile.innerText = totalCount;
        cartBadgeMobile.style.display = totalCount > 0 ? "block" : "none";
    }
    
    // Render list
    cartItemsList.innerHTML = "";
    
    if (window.cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart-state">
                <i class="bi bi-cart3 empty-cart-icon"></i>
                <h5>Your cart is empty</h5>
                <p class="text-muted small">Add items from our premium menu to start your order.</p>
                <button class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" data-bs-dismiss="offcanvas" onclick="scrollToMenu()">Explore Menu</button>
            </div>
        `;
        
        if (subtotalEl) subtotalEl.innerText = "Rs. 0";
        if (taxEl) taxEl.innerText = "Rs. 0";
        if (deliveryEl) deliveryEl.innerText = "Rs. 0";
        if (totalEl) totalEl.innerText = "Rs. 0";
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    
    let subtotal = 0;
    
    window.cart.forEach(cartItem => {
        const food = window.FOODS_DB.find(f => f.id === cartItem.foodId);
        if (!food) return;
        
        const itemTotal = food.price * cartItem.quantity;
        subtotal += itemTotal;
        
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <img src="${food.image}" class="cart-item-img" alt="${food.name}">
            <div class="cart-item-details">
                <h6 class="cart-item-name">${food.name}</h6>
                <div class="cart-item-price">Rs.${food.price.toFixed(0)}</div>
            </div>
            <div class="d-flex align-items-center">
                <div class="cart-item-qty-control">
                    <button class="btn-qty" onclick="updateQuantity(${food.id}, -1)"><i class="bi bi-minus"></i></button>
                    <span class="qty-val">${cartItem.quantity}</span>
                    <button class="btn-qty" onclick="updateQuantity(${food.id}, 1)"><i class="bi bi-plus"></i></button>
                </div>
                <button class="btn-cart-remove" onclick="removeFromCart(${food.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
        cartItemsList.appendChild(row);
    });
    
    // Tax / GST (5%)
    const tax = subtotal * 0.05;
    // Delivery fee (Rs.40, waived if subtotal is over Rs.299)
    const deliveryFee = subtotal >= 299.0 ? 0.0 : 40.0;
    // Grand Total
    const total = subtotal + tax + deliveryFee;
    
    if (subtotalEl) subtotalEl.innerText = `Rs.${subtotal.toFixed(0)}`;
    if (taxEl) taxEl.innerText = `Rs.${tax.toFixed(0)}`;
    if (deliveryEl) {
        deliveryEl.innerText = deliveryFee === 0 ? "FREE" : `Rs.${deliveryFee.toFixed(0)}`;
        if (deliveryFee === 0) {
            deliveryEl.classList.add("text-success");
            deliveryEl.classList.remove("text-dark");
        } else {
            deliveryEl.classList.remove("text-success");
            deliveryEl.classList.add("text-dark");
        }
    }
    if (totalEl) totalEl.innerText = `Rs.${total.toFixed(0)}`;
    if (checkoutBtn) checkoutBtn.disabled = false;
}

// Checkout button handler
window.simulateCheckout = function() {
    if (window.cart.length === 0) return;
    
    // Close the Offcanvas Cart drawer
    const offcanvasEl = document.getElementById("cartOffcanvas");
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) offcanvas.hide();
    
    // Clear Cart
    window.cart = [];
    updateCartUI();
    
    // Show success alert/toast
    showToast("Order placed successfully! Delivery partner arriving soon.", "success");
};

// Form validations helper
function setupCheckoutForm() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!contactForm.checkValidity()) {
                e.stopPropagation();
                contactForm.classList.add("was-validated");
            } else {
                showToast("Form submitted! We will contact you soon.", "success");
                contactForm.reset();
                contactForm.classList.remove("was-validated");
            }
        });
    }
}
