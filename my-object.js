let foodDatabase = [
    {
        id: 1,
        name: "pizza",
        cusine: "Italian",
        origin: "Italy",
        vegetarian: false,
        price: 14.99,
        picture: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
        emoji: "🍕",
        ingredients: ["Wheat flour", "Tomato sauce", "Mozzarella cheese", "Fresh basil", "Olive oil"],
        backstory: `Originating in Naples as a simple flatbread for the working class,
pizza was elevated when tomatoes were introduced from the Americas.
In 1889, Chef Raffaele Esposito created the classic Margherita pizza
to honor Queen Margherita of Savoy, mirroring the Italian flag.`
    },
    {
        id: 2,
        name: "sushi",
        cusine: "Japanese",
        origin: "Japan",
        vegetarian: true,
        price: 18.50,
        picture: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
        emoji: "🍣",
        ingredients: ["Sushi rice", "Nori (seaweed)", "Cucumber", "Avocado", "Rice vinegar"],
        backstory: `Sushi began as a preservation method where fish was fermented in rice.
Over centuries, the fermentation process was abandoned for fresh fish.
In the 1820s, Hanaya Yohei invented modern nigiri sushi in Edo (Tokyo).
It quickly evolved from a quick street food snack to a global delicacy.`
    },
    {
        id: 3,
        name: "pad thai",
        cusine: "Thai",
        origin: "Thailand",
        vegetarian: true,
        price: 12.99,
        picture: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
        emoji: "🥢",
        ingredients: ["Rice noodles", "Tofu", "Tamarind paste", "Bean sprouts", "Crushed peanuts"],
        backstory: `Pad Thai was introduced in the 1930s during a nationalistic campaign.
The government wanted to define a national identity and reduce rice imports.
It combined Chinese-style stir-fried noodles with unique Thai flavors.
Today, it represents the sweet, sour, and savory soul of Thai cuisine.`
    },
    {
        id: 4,
        name: "tacos",
        cusine: "Mexican",
        origin: "Mexico",
        vegetarian: false,
        price: 11.50,
        picture: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        emoji: "🌮",
        ingredients: ["Corn tortillas", "Grilled beef", "Onions", "Fresh cilantro", "Lime wedges"],
        backstory: `Tacos date back to ancient Mesoamerica, long before Spanish arrival.
Indigenous people filled corn tortillas with small fish and insects.
The word 'taco' may have originated from 18th-century Mexican silver mines.
Today, tacos are a vibrant, worldwide symbol of Mexican street food culture.`
    },
    {
        id: 5,
        name: "butter chicken",
        cusine: "Indian",
        origin: "India",
        vegetarian: false,
        price: 16.99,
        picture: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
        emoji: "🍛",
        ingredients: ["Chicken", "Butter", "Tomato puree", "Heavy cream", "Garam masala spice blend"],
        backstory: `Butter Chicken was invented by accident in the 1950s in Delhi, India.
Chefs at Moti Mahal restaurant wanted to save leftover dry tandoori chicken.
They simmered it in a rich tomato, butter, and cream-filled gravy.
The resulting dish became an instant hit and is now loved worldwide.`
    },
    {
        id: 6,
        name: "croissant",
        cusine: "French",
        origin: "France",
        vegetarian: true,
        price: 10.50,
        picture: "https://plus.unsplash.com/premium_photo-1661743823829-326b78143b30?w=400&h=300&fit=crop",
        emoji: "🥐",
        ingredients: ["Wheat flour", "Unsalted butter", "Yeast", "Milk", "Sugar"],
        backstory: `The croissant has its ancestry in the Austrian kipferl, dating back to 1683.
It was brought to France in 1770 when Marie Antoinette married Louis XVI.
French bakers adapted the recipe using laminated puff pastry dough.
It has since become the flaky, golden cornerstone of French breakfasts.`
    },
    {
        id: 7,
        name: "ramen",
        cusine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        price: 15.00,
        picture: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        emoji: "🍜",
        ingredients: ["Wheat noodles", "Pork broth", "Chashu pork slices", "Soft-boiled egg", "Green onions"],
        backstory: `Ramen was originally introduced to Japan by Chinese immigrants in the late 1800s.
It was cheap, filling, and gained massive popularity among working classes.
After WWII, wheat flour imports from the US spurred a ramen boom.
It has evolved into a highly specialized, region-specific culinary art form.`
    },
    {
        id: 8,
        name: "paella",
        cusine: "Spanish",
        origin: "Spain",
        vegetarian: false,
        price: 19.99,
        picture: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop",
        emoji: "🥘",
        ingredients: ["Bomba rice", "Saffron threads", "Chicken", "Rabbit", "Green beans"],
        backstory: `Paella originated in the mid-19th century near Albufera lagoon in Valencia.
Farmers and laborers cooked rice over an open fire with whatever was available.
Saffron was added to give the rice its signature golden hue and aroma.
It has become Spain's most iconic dish, representing community and sharing.`
    },
    {
        id: 9,
        name: "falafel",
        cusine: "Middle Eastern",
        origin: "Lebanon",
        vegetarian: true,
        price: 10.99,
        picture: "https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?w=400&h=300&fit=crop",
        emoji: "🧆",
        ingredients: ["Ground chickpeas", "Fresh parsley", "Garlic cloves", "Ground cumin", "Coriander"],
        backstory: `The exact origin of falafel is highly debated among historians.
Some believe it originated in Egypt, made with fava beans instead.
It migrated north, where chickpeas replaced the fava beans.
Today, falafel is a staple Middle Eastern street food enjoyed globally.`
    },
    {
        id: 10,
        name: "kimchi",
        cusine: "Korean",
        origin: "Korea",
        vegetarian: true,
        price: 12.00,
        picture: "https://images.unsplash.com/photo-1708388064278-707e85eaddc0?w=400&h=300&fit=crop",
        emoji: "🥬",
        ingredients: ["Napa cabbage", "Korean radish", "Red pepper flakes (Gochugaru)", "Garlic", "Ginger"],
        backstory: `Kimchi originated thousands of years ago as a way to preserve winter vegetables.
Early versions were simply salted vegetables without any chili peppers.
Chili peppers were introduced to Korea in the 17th century, changing it forever.
It is now South Korea's national dish, eaten with almost every meal.`
    },
    {
        id: 11,
        name: "gelato",
        cusine: "Italian",
        origin: "Italy",
        vegetarian: true,
        price: 10.25,
        picture: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop",
        emoji: "🍨",
        ingredients: ["Whole milk", "Granulated sugar", "Egg yolks", "Heavy cream", "Natural flavoring"],
        backstory: `Gelato traces its roots back to ancient frozen desserts in Sicily and Egypt.
During the Renaissance, Bernardo Buontalenti created the modern cream gelato.
It has less air and fat than regular ice cream, making it denser.
This dense texture allows gelato to offer a much richer flavor profile.`
    },
    {
        id: 12,
        name: "pho",
        cusine: "Vietnamese",
        origin: "Vietnam",
        vegetarian: true,
        price: 13.99,
        picture: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
        emoji: "🥣",
        ingredients: ["Rice noodles", "Vegetable broth", "Tofu slices", "Star anise", "Cinnamon sticks"],
        backstory: `Pho was born in northern Vietnam in the late 19th or early 20th century.
Its development was influenced by both Chinese noodles and French beef broth.
It became a popular street food, reflecting the country's complex history.
Today, Pho is celebrated globally for its fragrant and healing broth.`
    },
    {
        id: 13,
        name: "tempura",
        cusine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        price: 14.50,
        picture: "https://images.unsplash.com/photo-1677743537607-f7fc9273ec4d?w=400&h=300&fit=crop",
        emoji: "🍤",
        ingredients: ["Shrimp", "Mixed vegetables", "Tempura flour", "Ice-cold water", "Frying oil"],
        backstory: `Tempura was introduced to Japan by Portuguese missionaries in the 16th century.
The name comes from 'tempora,' referring to meat-free fasting periods.
Japanese chefs adapted it by thinning the batter and using fresh seafood.
It evolved into a light, crispy art form that highlights natural flavors.`
    },
    {
        id: 14,
        name: "pasta",
        cusine: "Italian",
        origin: "Italy",
        vegetarian: true,
        price: 13.50,
        picture: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        emoji: "🍝",
        ingredients: ["Semolina flour", "Eggs", "Water", "Salt", "Olive oil"],
        backstory: `Pasta has ancient origins, with evidence dating back to Etruscan times.
While legend says Marco Polo brought it from China, it was already present.
The dried pasta industry boomed in Italy due to its long shelf life.
It is now a global staple, served with countless sauces and variations.`
    },
    {
        id: 15,
        name: "salad",
        cusine: "International",
        origin: "Global",
        vegetarian: true,
        price: 11.99,
        picture: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        emoji: "🥗",
        ingredients: ["Mixed salad greens", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon juice"],
        backstory: `Salads were enjoyed by ancient Greeks and Romans with simple dressings.
The word 'salad' comes from Latin 'sal,' meaning salt, used in dressings.
Over centuries, it transitioned from raw greens to complex culinary creations.
It is now a versatile, global canvas for fresh and healthy ingredients.`
    }
];

function renderMenu(containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    foodDatabase.forEach(item => {
        const vegStatus = item.vegetarian ? 'veg' : 'nonveg';
        const vegLabel = item.vegetarian ? 'Vegetarian' : 'Non-Veg';
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.picture}" alt="${item.name}" loading="lazy">
            <div class="info">
                <h3>${item.name}</h3>
                <div class="meta">
                    <span>${item.cusine} · ${item.origin}</span>
                    <div class="right-meta">
                        <button class="order-btn-circle" data-id="${item.id}" aria-label="Add to Order">${item.emoji || '🍽️'}</button>
                        <span class="price">$${item.price.toFixed(2)}</span>
                        <span class="badge ${vegStatus}">${vegLabel}</span>
                    </div>
                </div>
                <div class="details">
                    <div class="ingredients-list">
                        <strong>Ingredients:</strong> ${item.ingredients.join(', ')}
                    </div>
                    <div class="backstory-text">
                        <strong>Backstory:</strong>
                        <p>${item.backstory.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="action-btn like-btn" aria-label="Like">
                        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <span>${Math.floor(Math.random() * 50) + 10}</span>
                    </button>
                    <button class="action-btn share-btn" aria-label="Share">
                        <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/></svg>
                        <span>Share</span>
                    </button>
                    <button class="action-btn bookmark-btn" aria-label="Bookmark">
                        <svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
                        <span>Save</span>
                    </button>
                </div>
            </div>
        `;

        // Interactivity
        const likeBtn = card.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('active');
            const countSpan = likeBtn.querySelector('span');
            let count = parseInt(countSpan.textContent);
            if (likeBtn.classList.contains('active')) {
                countSpan.textContent = count + 1;
            } else {
                countSpan.textContent = count - 1;
            }
        });

        const bookmarkBtn = card.querySelector('.bookmark-btn');
        bookmarkBtn.addEventListener('click', () => {
            bookmarkBtn.classList.toggle('active');
            const textSpan = bookmarkBtn.querySelector('span');
            textSpan.textContent = bookmarkBtn.classList.contains('active') ? 'Saved' : 'Save';
        });

        const shareBtn = card.querySelector('.share-btn');
        shareBtn.addEventListener('click', () => {
            shareBtn.style.color = '#3a7a3a';
            const textSpan = shareBtn.querySelector('span');
            const originalText = textSpan.textContent;
            textSpan.textContent = 'Copied!';
            
            // Generate simple hash URL for sharing
            const shareUrl = `${window.location.origin}${window.location.pathname}#${item.name.replace(/\s+/g, '-')}`;
            navigator.clipboard.writeText(shareUrl).catch(() => {});
            
            setTimeout(() => {
                shareBtn.style.color = '';
                textSpan.textContent = originalText;
            }, 1500);
        });

        grid.appendChild(card);
    });
}

function setupOrderSystem() {
    const orderToggle = document.getElementById('orderToggle');
    const orderModal = document.getElementById('orderModal');
    const closeOrderModal = document.getElementById('closeOrderModal');
    const orderItemsList = document.getElementById('orderItemsList');
    const orderTotalPrice = document.getElementById('orderTotalPrice');
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');

    // New Modal Elements
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentModal = document.getElementById('closePaymentModal');
    const reserveName = document.getElementById('reserveName');
    const depositTotal = document.getElementById('depositTotal');
    const depositAmount = document.getElementById('depositAmount');
    const completePaymentBtn = document.getElementById('completePaymentBtn');

    const thankYouModal = document.getElementById('thankYouModal');
    const closeThankYouModal = document.getElementById('closeThankYouModal');
    const finishThankYouBtn = document.getElementById('finishThankYouBtn');

    if (!orderToggle || !orderModal || !closeOrderModal || !orderItemsList || !orderTotalPrice || !confirmOrderBtn ||
        !paymentModal || !closePaymentModal || !reserveName || !depositTotal || !depositAmount || !completePaymentBtn ||
        !thankYouModal || !closeThankYouModal || !finishThankYouBtn) return;

    // Track quantities: id -> quantity
    const orderQuantities = {};
    foodDatabase.forEach(item => {
        orderQuantities[item.id] = 0;
    });

    // Populate order item list
    orderItemsList.innerHTML = '';
    foodDatabase.forEach(item => {
        const row = document.createElement('div');
        row.className = 'order-item-row';
        row.innerHTML = `
            <div class="order-item-left">
                <img src="${item.picture}" alt="${item.name}" loading="lazy">
                <div class="item-name-price">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                </div>
            </div>
            <div class="order-item-right">
                <button class="qty-btn dec-btn" data-id="${item.id}">-</button>
                <span class="qty-val" id="qty-${item.id}">0</span>
                <button class="qty-btn inc-btn" data-id="${item.id}">+</button>
            </div>
        `;
        orderItemsList.appendChild(row);
    });

    // Update summary function
    let currentTotal = 0;
    function updateOrderSummary() {
        currentTotal = 0;
        foodDatabase.forEach(item => {
            const qty = orderQuantities[item.id] || 0;
            currentTotal += qty * item.price;
        });
        orderTotalPrice.textContent = `$${currentTotal.toFixed(2)}`;
    }

    // Event delegation for quantity buttons
    orderItemsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('qty-btn')) {
            const id = e.target.getAttribute('data-id');
            const qtyValElement = document.getElementById(`qty-${id}`);
            
            if (e.target.classList.contains('inc-btn')) {
                orderQuantities[id] = (orderQuantities[id] || 0) + 1;
            } else if (e.target.classList.contains('dec-btn')) {
                orderQuantities[id] = Math.max(0, (orderQuantities[id] || 0) - 1);
            }
            
            qtyValElement.textContent = orderQuantities[id];
            updateOrderSummary();
        }
    });

    // Listen for yellow order button clicks from menu cards
    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.order-btn-circle');
            if (btn) {
                const id = btn.getAttribute('data-id');
                orderQuantities[id] = (orderQuantities[id] || 0) + 1;
                
                // Update quantity visual element in cart
                const qtyValElement = document.getElementById(`qty-${id}`);
                if (qtyValElement) {
                    qtyValElement.textContent = orderQuantities[id];
                }
                
                updateOrderSummary();
                
                // Animate the cart button briefly to show item was added
                const orderToggle = document.getElementById('orderToggle');
                if (orderToggle) {
                    orderToggle.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        orderToggle.style.transform = '';
                    }, 200);
                }
            }
        });
    }

    // Toggle Modal
    orderToggle.addEventListener('click', () => {
        orderModal.classList.add('open');
    });

    closeOrderModal.addEventListener('click', () => {
        orderModal.classList.remove('open');
    });

    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            orderModal.classList.remove('open');
        }
    });

    // Confirm Order (Goes to Reservation Summary)
    confirmOrderBtn.addEventListener('click', () => {
        let totalQty = 0;
        foodDatabase.forEach(item => {
            totalQty += orderQuantities[item.id] || 0;
        });

        if (totalQty === 0) {
            alert('Please select at least one item to order in advance!');
            return;
        }

        // Populate reservation summary section
        const reviewItemsList = document.getElementById('reviewItemsList');
        const reviewTotal = document.getElementById('reviewTotal');
        const reviewDeposit = document.getElementById('reviewDeposit');
        const reviewReserveName = document.getElementById('reviewReserveName');

        if (reviewItemsList) {
            reviewItemsList.innerHTML = '';
            foodDatabase.forEach(item => {
                const qty = orderQuantities[item.id] || 0;
                if (qty > 0) {
                    const row = document.createElement('div');
                    row.className = 'review-item-row';
                    row.innerHTML = `
                        <span class="review-item-name">${item.emoji || '🍽️'} ${item.name} <span style="color: #888;">x${qty}</span></span>
                        <span>$${(item.price * qty).toFixed(2)}</span>
                    `;
                    reviewItemsList.appendChild(row);
                }
            });
        }

        if (reviewTotal) reviewTotal.textContent = `$${currentTotal.toFixed(2)}`;
        if (reviewDeposit) reviewDeposit.textContent = `$${(currentTotal * 0.5).toFixed(2)}`;
        if (reviewReserveName) reviewReserveName.textContent = '-';

        // Close order modal and show summary modal
        orderModal.classList.remove('open');
        summaryModal.classList.add('open');
    });

    // Close Summary Modal
    const summaryModal = document.getElementById('summaryModal');
    const closeSummaryModal = document.getElementById('closeSummaryModal');
    if (closeSummaryModal) {
        closeSummaryModal.addEventListener('click', () => {
            summaryModal.classList.remove('open');
        });
    }
    if (summaryModal) {
        summaryModal.addEventListener('click', (e) => {
            if (e.target === summaryModal) {
                summaryModal.classList.remove('open');
            }
        });
    }

    // Proceed to Payment (from Reservation Summary)
    const proceedToPaymentBtn = document.getElementById('proceedToPaymentBtn');
    if (proceedToPaymentBtn) {
        proceedToPaymentBtn.addEventListener('click', () => {
            // Set deposit amounts in payment modal
            depositTotal.textContent = `$${currentTotal.toFixed(2)}`;
            depositAmount.textContent = `$${(currentTotal * 0.5).toFixed(2)}`;

            // Clear previous input
            reserveName.value = '';

            // Close summary modal and open payment modal
            summaryModal.classList.remove('open');
            paymentModal.classList.add('open');
        });
    }

    // Close Payment Modal
    closePaymentModal.addEventListener('click', () => {
        paymentModal.classList.remove('open');
    });

    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            paymentModal.classList.remove('open');
        }
    });

    // Complete Deposit & Order (Goes to Thank You Modal)
    completePaymentBtn.addEventListener('click', () => {
        if (!reserveName.value.trim()) {
            alert('Please enter a reservation name!');
            return;
        }

        // Update reservation name in summary
        const reviewReserveName = document.getElementById('reviewReserveName');
        if (reviewReserveName) reviewReserveName.textContent = reserveName.value.trim();

        // Random 5 pics for thank you page
        const picUrls = [
            'thank_you_meme.jpg',
            'https://scontent.fbkk29-2.fna.fbcdn.net/v/t39.30808-6/710613597_1472662064600914_7560306286395228899_n.jpg?stp=dst-jpg_tt6&cstp=mx720x720&ctp=s720x720&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Aa_0htwpdVcQ7kNvwHP_Ddf&_nc_oc=AdrjLZV-19SXHclYSeNHv4X84Je63xNyELZIz6iaQZ37e1lT5GAR_LNkP05i02aSUmI&_nc_zt=23&_nc_ht=scontent.fbkk29-2.fna&_nc_gid=TlavjR8ivtCbl4SY0s2KKQ&_nc_ss=7b289&oh=00_AQAP6A36NxeQ2v8sM7YbBtufV6E3wbw_UUFRu4D7_0E1Zw&oe=6A4D6842',
            'https://pbs.twimg.com/media/HLS5MyzWsAAD5a0?format=jpg&name=900x900',
            'https://instagram.fbkk29-6.fna.fbcdn.net/v/t51.82787-15/711965744_18042462017595253_9198837664940339946_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=101&_nc_map=urlgen_bucketless&ig_cache_key=MzkwNDg2NDMzMzI5MTQ4MDA5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuODc4LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=bXYdlAjE1m0Q7kNvwH_MZYb&_nc_oc=AdpFfdyksbwIQw8LCYkahHGfg--oMmtoNKxs8wCLdMjhTRKZViYrc940WAS57DuV4bQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbkk29-6.fna&_nc_gid=azlUOYG7M7fJ0w3cdeARoA&_nc_ss=7a22e&oh=00_AQAk-p2TduEp5_3W7T6_yd9-imkbp_EbIWIADcw7MdRHPw&oe=6A4D69BD',
            'https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/730487506_820471187669936_292541833177796004_n.jpg?stp=dst-jpg_tt6&cstp=mx736x762&ctp=s736x762&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=EJ0LI904eEgQ7kNvwEETf_B&_nc_oc=AdqfSuFs05HQAjeFYmIi985uGxfq5qU-w6-L9QK2b6kp47DD-FqiDxc0Ycf89CXNqXw&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=DiR-IxJDSTRiumfr0hFzrA&_nc_ss=7b289&oh=00_AQDZByPj-GvzCggWS8ZvkvniUi9qm5lFSVk86b5CcfFJGA&oe=6A4D507C'
        ];
        const randomUrl = picUrls[Math.floor(Math.random() * picUrls.length)];
        const container = document.getElementById('thankYouImages');
        if (container) {
            container.innerHTML = '';
            const img = document.createElement('img');
            img.src = randomUrl;
            img.alt = 'Thank You';
            img.style.cssText = 'max-width: 100%; max-height: 250px; border-radius: 12px; object-fit: contain; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
            container.appendChild(img);
        }

        // Close Payment Modal and Open Thank You Modal
        paymentModal.classList.remove('open');
        thankYouModal.classList.add('open');

        // Change Cart Icon in Order Toggle Button to Praying Icon (🙏)
        orderToggle.innerHTML = '<span style="font-size: 26px; line-height: 1; display: inline-block;">🙏</span>';
        orderToggle.style.background = '#c1f0c1';
        orderToggle.style.boxShadow = '0 4px 12px rgba(193, 240, 193, 0.4)';
    });

    // Close Thank You Modal & Reset Order
    function finishOrder() {
        thankYouModal.classList.remove('open');
        
        // Close summary modal
        const summaryModal = document.getElementById('summaryModal');
        if (summaryModal) summaryModal.classList.remove('open');

        // Reset quantities
        foodDatabase.forEach(item => {
            orderQuantities[item.id] = 0;
            const qtyValElement = document.getElementById(`qty-${item.id}`);
            if (qtyValElement) qtyValElement.textContent = 0;
        });
        updateOrderSummary();
    }

    closeThankYouModal.addEventListener('click', finishOrder);
    finishThankYouBtn.addEventListener('click', finishOrder);

    thankYouModal.addEventListener('click', (e) => {
        if (e.target === thankYouModal) {
            finishOrder();
        }
    });
}

console.log(foodDatabase[0]);
setupOrderSystem();
