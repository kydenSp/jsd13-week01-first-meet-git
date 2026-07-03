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
        card.dataset.id = item.id;
        card.innerHTML = `
            <img src="${item.picture}" alt="${item.name}" loading="lazy">
            <div class="info">
                <h3>${item.name} ${item.emoji || ''}</h3>
                <div class="meta">
                    <div class="left-meta">
                        <span>${item.cusine} · ${item.origin}</span>
                        <span class="badge ${vegStatus}">${vegLabel}</span>
                    </div>
                    <div class="right-meta">
                        <button class="order-btn-circle" data-id="${item.id}" aria-label="Add to Order">${item.emoji || '🍽️'}</button>
                        <span class="price">$${item.price.toFixed(2)}</span>
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
            
            const shareUrl = `${window.location.origin}${window.location.pathname}#${item.name.replace(/\s+/g, '-')}`;
            navigator.clipboard.writeText(shareUrl).catch(() => {});
            
            setTimeout(() => {
                shareBtn.style.color = '';
                textSpan.textContent = originalText;
            }, 1500);
        });

        // Click card to show detail
        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            showDetail(item);
        });

        grid.appendChild(card);
    });
}

function setupOrderSystem() {
    const orderToggle = document.getElementById('orderToggle');
    const cartBadge = document.getElementById('cartBadge');
    const summaryModal = document.getElementById('summaryModal');
    const closeSummaryModal = document.getElementById('closeSummaryModal');
    const proceedToPaymentBtn = document.getElementById('proceedToPaymentBtn');

    // Payment Modal Elements
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentModal = document.getElementById('closePaymentModal');
    const reserveName = document.getElementById('reserveName');
    const depositTotal = document.getElementById('depositTotal');
    const depositAmount = document.getElementById('depositAmount');
    const completePaymentBtn = document.getElementById('completePaymentBtn');

    const thankYouModal = document.getElementById('thankYouModal');
    const closeThankYouModal = document.getElementById('closeThankYouModal');
    const finishThankYouBtn = document.getElementById('finishThankYouBtn');

    if (!orderToggle || !summaryModal || !paymentModal || !thankYouModal) return;

    // Track quantities per item
    const orderQuantities = {};
    foodDatabase.forEach(item => { orderQuantities[item.id] = 0; });

    function updateBadge() {
        const total = Object.values(orderQuantities).reduce((s, v) => s + v, 0);
        cartBadge.textContent = total;
        cartBadge.style.display = total > 0 ? 'flex' : 'none';
    }

    function updateSummaryModal() {
        let currentTotal = 0;
        const reviewItemsList = document.getElementById('reviewItemsList');
        const reviewTotal = document.getElementById('reviewTotal');
        const reviewDeposit = document.getElementById('reviewDeposit');

        if (reviewItemsList) {
            reviewItemsList.innerHTML = '';
            foodDatabase.forEach(item => {
                const qty = orderQuantities[item.id] || 0;
                if (qty > 0) {
                    currentTotal += qty * item.price;
                    const row = document.createElement('div');
                    row.className = 'review-item-row';
                    row.innerHTML = `
                        <span class="review-item-name">${item.emoji || '🍽️'} ${item.name} <span style="color:#888;">x${qty}</span></span>
                        <span>$${(item.price * qty).toFixed(2)}</span>
                    `;
                    reviewItemsList.appendChild(row);
                }
            });
        }
        if (reviewTotal) reviewTotal.textContent = `$${currentTotal.toFixed(2)}`;
        if (reviewDeposit) reviewDeposit.textContent = `$${(currentTotal * 0.5).toFixed(2)}`;
    }

    // Listen for yellow order button clicks on menu cards
    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.order-btn-circle');
            if (btn) {
                const id = btn.getAttribute('data-id');
                orderQuantities[id] = (orderQuantities[id] || 0) + 1;
                updateBadge();

                const rect = btn.getBoundingClientRect();
                const floating = document.createElement('div');
                floating.textContent = '+1';
                Object.assign(floating.style, {
                    position:'fixed', left:rect.left+rect.width/2-12+'px',
                    top:rect.top-10+'px', fontSize:'18px', fontWeight:'700',
                    color:'#3a7a3a', pointerEvents:'none', zIndex:'9999',
                    transition:'all 0.8s ease-out', opacity:'1'
                });
                document.body.appendChild(floating);
                requestAnimationFrame(() => {
                    floating.style.transform = 'translateY(-40px)';
                    floating.style.opacity = '0';
                });
                setTimeout(() => floating.remove(), 900);

                const orderToggle = document.getElementById('orderToggle');
                if (orderToggle) {
                    orderToggle.style.transform = 'scale(1.2)';
                    setTimeout(() => { orderToggle.style.transform = ''; }, 200);
                }
            }
        });
    }

    // Cart FAB → Summary Modal
    orderToggle.addEventListener('click', () => {
        const total = Object.values(orderQuantities).reduce((s, v) => s + v, 0);
        if (total === 0) {
            const overlay = document.createElement('div');
            overlay.className = 'empty-cart-overlay';
            overlay.innerHTML = `
                <div class="empty-cart-box">
                    <h2 style="font-size:2rem;color:#e05060;margin:0 0 0.5rem;">NO NO NO NO NO NO!</h2>
                    <img src="https://pbs.twimg.com/media/FPRWH78aMAMISPq?format=jpg&name=900x900" alt="no no no" style="display:block;max-width:100%;max-height:220px;border-radius:12px;object-fit:contain;margin:0 auto;">
                    <button class="surprise-btn" style="margin-top:1rem;">OK</button>
                </div>
            `;
            Object.assign(overlay.style, {
                position:'fixed', inset:'0', background:'rgba(0,0,0,0.4)', backdropFilter:'blur(4px)',
                zIndex:'3000', display:'flex', alignItems:'center', justifyContent:'center',
                opacity:'0', transition:'opacity 0.3s'
            });
            const box = overlay.querySelector('.empty-cart-box');
            Object.assign(box.style, {
                background:'#fff', borderRadius:'20px', padding:'2rem', maxWidth:'400px',
                width:'90%', textAlign:'center', boxShadow:'0 12px 40px rgba(0,0,0,0.15)',
                transform:'scale(0.9)', transition:'transform 0.3s'
            });
            document.body.appendChild(overlay);
            requestAnimationFrame(() => {
                overlay.style.opacity = '1';
                box.style.transform = 'scale(1)';
            });
            overlay.querySelector('button').addEventListener('click', () => {
                overlay.style.opacity = '0';
                box.style.transform = 'scale(0.9)';
                setTimeout(() => overlay.remove(), 300);
            });
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.style.opacity = '0';
                    box.style.transform = 'scale(0.9)';
                    setTimeout(() => overlay.remove(), 300);
                }
            });
            // Dark mode support
            if (document.body.classList.contains('dark-mode')) {
                box.style.background = '#161b36';
                box.style.color = '#b8c4d8';
                const h2 = box.querySelector('h2');
                if (h2) h2.style.color = '#e8849a';
            }
            return;
        }
        updateSummaryModal();
        summaryModal.classList.add('open');
    });

    if (closeSummaryModal) {
        closeSummaryModal.addEventListener('click', () => summaryModal.classList.remove('open'));
    }
    summaryModal.addEventListener('click', (e) => {
        if (e.target === summaryModal) summaryModal.classList.remove('open');
    });

    // Proceed to Payment
    if (proceedToPaymentBtn) {
        proceedToPaymentBtn.addEventListener('click', () => {
            let currentTotal = 0;
            foodDatabase.forEach(item => {
                currentTotal += (orderQuantities[item.id] || 0) * item.price;
            });
            depositTotal.textContent = `$${currentTotal.toFixed(2)}`;
            depositAmount.textContent = `$${(currentTotal * 0.5).toFixed(2)}`;
            reserveName.value = '';
            summaryModal.classList.remove('open');
            paymentModal.classList.add('open');
        });
    }

    if (closePaymentModal) {
        closePaymentModal.addEventListener('click', () => paymentModal.classList.remove('open'));
    }
    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) paymentModal.classList.remove('open');
    });

    // Seat counter (1-20)
    let seatCount = 1;
    const seatNum = document.getElementById('seatNum');
    const seatDec = document.getElementById('seatDec');
    const seatInc = document.getElementById('seatInc');
    if (seatDec && seatInc && seatNum) {
        function updateSeat() {
            seatNum.textContent = seatCount;
        }
        seatDec.addEventListener('click', () => {
            if (seatCount > 1) { seatCount--; updateSeat(); }
        });
        seatInc.addEventListener('click', () => {
            if (seatCount < 20) { seatCount++; updateSeat(); }
        });
    }

    // Complete Payment
    if (completePaymentBtn) {
        completePaymentBtn.addEventListener('click', () => {
            if (!reserveName.value.trim()) {
                alert('Please enter a reservation name!');
                return;
            }
            const reviewReserveName = document.getElementById('reviewReserveName');
            if (reviewReserveName) reviewReserveName.textContent = reserveName.value.trim();
            const reviewSeats = document.getElementById('reviewSeats');
            if (reviewSeats) reviewSeats.textContent = seatCount;

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
                img.style.cssText = 'max-width:100%;max-height:250px;border-radius:12px;object-fit:contain;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
                container.appendChild(img);
            }

            paymentModal.classList.remove('open');
            thankYouModal.classList.add('open');
            orderToggle.innerHTML = '<span style="font-size:26px;line-height:1;display:inline-block;">🙏</span>';
            orderToggle.style.background = '#c1f0c1';
            orderToggle.style.boxShadow = '0 4px 12px rgba(193,240,193,0.4)';
        });
    }

    function finishOrder() {
        thankYouModal.classList.remove('open');
        const summaryModal = document.getElementById('summaryModal');
        if (summaryModal) summaryModal.classList.remove('open');

        foodDatabase.forEach(item => {
            orderQuantities[item.id] = 0;
        });
        updateBadge();
        const sn = document.getElementById('seatNum');
        if (sn) sn.textContent = '1';

        orderToggle.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>`;
        orderToggle.style.background = '';
        orderToggle.style.boxShadow = '';
    }

    if (closeThankYouModal) closeThankYouModal.addEventListener('click', finishOrder);
    if (finishThankYouBtn) finishThankYouBtn.addEventListener('click', finishOrder);
    thankYouModal.addEventListener('click', (e) => {
        if (e.target === thankYouModal) finishOrder();
    });

    updateBadge();
}

function showDetail(item) {
    const modal = document.getElementById('detailModal');
    const content = document.getElementById('detailContent');
    if (!modal || !content) return;

    const vegStatus = item.vegetarian ? 'veg' : 'nonveg';
    const vegLabel = item.vegetarian ? 'Vegetarian' : 'Non-Veg';

    content.innerHTML = `
        <img src="${item.picture}" alt="${item.name}">
        <div class="detail-body">
            <h2>${item.name} ${item.emoji || ''}</h2>
            <div class="detail-cuisine">${item.cusine} · ${item.origin} · <span class="badge ${vegStatus}" style="font-size:0.7rem;">${vegLabel}</span></div>
            <div class="detail-price">$${item.price.toFixed(2)}</div>
            <div class="detail-section">
                <strong>Ingredients</strong>
                <p>${item.ingredients.join(', ')}</p>
            </div>
            <div class="detail-section">
                <strong>Backstory</strong>
                <p>${item.backstory.replace(/\n/g, '<br>')}</p>
            </div>
        </div>
        <button class="detail-close">Close</button>
    `;

    modal.classList.add('open');

    content.querySelector('.detail-close').addEventListener('click', () => {
        modal.classList.remove('open');
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
}

function buildSummaryModal() {
    if (document.getElementById('summaryModal')) return;
    const html = `
    <div class="order-modal" id="summaryModal">
        <div class="order-modal-content" style="max-height:520px;">
            <div class="order-modal-header" style="background:linear-gradient(135deg,#c1f0c1,#a8e6a8);">
                <h2>&#128203; Your Confirmed Order Review</h2>
                <button class="close-btn" id="closeSummaryModal">&times;</button>
            </div>
            <div class="order-modal-body">
                <p class="reservation-info">Reserved under: <strong id="reviewReserveName"></strong> &middot; <span id="reviewSeats">1</span> seat(s)</p>
                <div class="review-items-list" id="reviewItemsList"></div>
                <div class="review-total-row">
                    <span>Total Price:</span>
                    <strong id="reviewTotal"></strong>
                </div>
                <div class="review-deposit-row">
                    <span>50% Deposit Due:</span>
                    <strong id="reviewDeposit"></strong>
                </div>
            </div>
            <div class="order-modal-footer">
                <button class="confirm-order-btn" id="proceedToPaymentBtn" style="width:100%;background:#3a7a3a;">Proceed to Payment</button>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
}

function buildPaymentModal() {
    if (document.getElementById('paymentModal')) return;
    const html = `
    <div class="order-modal" id="paymentModal">
        <div class="order-modal-content" style="max-height:520px;">
            <div class="order-modal-header">
                <h2>Reservation Deposit</h2>
                <button class="close-btn" id="closePaymentModal">&times;</button>
            </div>
            <div class="order-modal-body" style="padding:1.5rem;">
                <div class="input-group" style="margin-bottom:1.2rem;">
                    <label for="reserveName" style="display:block;font-weight:600;margin-bottom:0.5rem;color:#555;">Reserved Name:</label>
                    <input type="text" id="reserveName" placeholder="Enter your name" style="width:100%;padding:10px;border:1px solid #f0d0e0;border-radius:8px;font-family:inherit;font-size:14px;color:#555;">
                </div>
                <div class="input-group" style="margin-bottom:1.2rem;">
                    <label style="display:block;font-weight:600;margin-bottom:0.5rem;color:#555;">Reserved Seats:</label>
                    <div class="seat-counter">
                        <button class="seat-btn" id="seatDec">&minus;</button>
                        <span class="seat-num" id="seatNum">1</span>
                        <button class="seat-btn" id="seatInc">+</button>
                    </div>
                </div>
                <div class="deposit-summary" style="background:#fdf2f6;border-radius:12px;padding:1rem;margin-bottom:1.2rem;border:1px solid #f8c8dc;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;font-size:0.9rem;">
                        <span>Total Amount:</span>
                        <strong id="depositTotal">$0.00</strong>
                    </div>
                    <div style="display:flex;justify-content:space-between;color:#3a7a3a;font-weight:700;font-size:1.1rem;">
                        <span>50% Deposit Due:</span>
                        <strong id="depositAmount">$0.00</strong>
                    </div>
                </div>
                <div class="fake-bank-details" style="border:1px dashed #c1f0c1;background:#fcfbfd;padding:1rem;border-radius:12px;font-size:0.85rem;text-align:center;color:#666;">
                    <p style="font-weight:600;color:#3a7a3a;margin-bottom:0.5rem;">&#128184; Payment Deposit &#128184;</p>
                    <p>Bank: <strong>Kydeniel restulre</strong></p>
                    <p>Account Number: <strong>000-000-000-000</strong></p>
                    <p style="margin-top:0.5rem;font-size:0.75rem;color:#999;">Scan or transfer exactly 50% to reserve your dishes!</p>
                </div>
            </div>
            <div class="order-modal-footer">
                <button class="confirm-order-btn" id="completePaymentBtn" style="width:100%;background:#3a7a3a;">Complete Deposit &amp; Order</button>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
}

function buildThankYouModal() {
    if (document.getElementById('thankYouModal')) return;
    const html = `
    <div class="order-modal" id="thankYouModal">
        <div class="order-modal-content" style="max-height:480px;text-align:center;">
            <div class="order-modal-header" style="background:linear-gradient(135deg,#c1f0c1,#a8e6a8);">
                <h2>Order Confirmed!</h2>
                <button class="close-btn" id="closeThankYouModal">&times;</button>
            </div>
            <div class="order-modal-body" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem;">
                <h3 style="color:#3a7a3a;margin-bottom:1rem;font-size:1.3rem;">Thank you for paying for me ka eiei &#128536;</h3>
                <div id="thankYouImages" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:100%;"></div>
            </div>
            <div class="order-modal-footer" style="justify-content:center;">
                <button class="confirm-order-btn" id="finishThankYouBtn" style="background:#3a7a3a;padding:10px 40px;">Close</button>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
}

function setupShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.order-modal.open, .surprise-overlay.open, .detail-overlay.open').forEach(el => el.classList.remove('open'));
            const emptyOverlay = document.querySelector('.empty-cart-overlay');
            if (emptyOverlay) emptyOverlay.remove();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && !e.target.closest('input,textarea')) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const instruct = document.querySelector('.hero-instruct');
            if (instruct) {
                instruct.style.transform = 'scale(1.05)';
                setTimeout(() => instruct.style.transform = '', 300);
            }
        }
    });
}

function buildScrollTop() {
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.innerHTML = '&#9650;';
    btn.setAttribute('aria-label', 'Scroll to top');
    Object.assign(btn.style, {
        position:'fixed', bottom:'90px', right:'24px', zIndex:'999',
        width:'44px', height:'44px', borderRadius:'50%',
        background:'#f8c8dc', color:'#a05060', border:'none',
        fontSize:'20px', cursor:'pointer', display:'none',
        boxShadow:'0 2px 8px rgba(0,0,0,0.15)',
        transition:'opacity 0.3s'
    });
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function buildFooter() {
    if (document.querySelector('footer')) return;
    const footer = document.createElement('footer');
    footer.innerHTML = '&copy; 2026 Kyden\'s Kitchen. Taste the world.';
    document.body.appendChild(footer);
}

function injectDarkCSS() {
    if (document.getElementById('dynamicDarkCSS')) return;
    const css = document.createElement('style');
    css.id = 'dynamicDarkCSS';
    css.textContent = `
body.dark-mode { background:#0a0e27; color:#b8c4d8; }
body.dark-mode header { background:linear-gradient(135deg,#1a1f3a,#121638); border-bottom-color:#2a2f4a; }
body.dark-mode header h1 { color:#a8b8e0; text-shadow:2px 2px 4px rgba(0,0,0,0.4); }
body.dark-mode header p { color:#7a8aaa; }
body.dark-mode header .hero-instruct { color:#a8b8e0; border-color:#a8b8e0; background:rgba(26,31,58,0.6); box-shadow:0 0 0 3px rgba(168,184,224,0.2); }
body.dark-mode .hero-surprise { border-color:#a8b8e0; background:#1a2f4a; color:#a8b8e0; }
body.dark-mode .hero-surprise:hover { background:#2a3f5a; }
body.dark-mode .menu-card { background:#161b36; box-shadow:0 4px 16px rgba(0,0,0,0.3); }
body.dark-mode .menu-card .info h3 { color:#c8d4e8; }
body.dark-mode .menu-card .info .meta span { color:#7a8aaa; }
body.dark-mode .price { color:#e8849a; }
body.dark-mode .badge.veg { background:#1a3a2a; color:#6ac48a; }
body.dark-mode .badge.nonveg { background:#3a1a2a; color:#e8849a; }
body.dark-mode .details { border-top-color:#2a2f4a; }
body.dark-mode .ingredients-list { color:#7a8aaa; }
body.dark-mode .ingredients-list strong { color:#e8849a; }
body.dark-mode .backstory-text { color:#7a8aaa; }
body.dark-mode .backstory-text strong { color:#6ac48a; }
body.dark-mode .backstory-text p { color:#6a7a9a; }
body.dark-mode .card-footer { border-top-color:#2a2f4a; }
body.dark-mode .action-btn { color:#7a8aaa; }
body.dark-mode .action-btn:hover { color:#e8849a; background:#1e2340; }
body.dark-mode .action-btn.like-btn.active { color:#ff6b7a; background:#2a1a2a; }
body.dark-mode .action-btn.bookmark-btn.active { color:#ffb840; background:#2a2a1a; }
body.dark-mode .order-fab-toggle { background:#1a2f4a; color:#7ab8e0; box-shadow:0 4px 12px rgba(0,0,0,0.4); }
body.dark-mode .order-fab-toggle:hover { background:#1a3f5a; }
body.dark-mode .q-fab-toggle { background:#1e2340; color:#a8b8e0; box-shadow:0 4px 12px rgba(0,0,0,0.4); }
body.dark-mode .q-fab-toggle:hover { background:#2a2f4a; }
body.dark-mode .order-modal-content { background:#161b36; box-shadow:0 12px 40px rgba(0,0,0,0.5); }
body.dark-mode .order-modal-header { background:linear-gradient(135deg,#1a1f3a,#2a1a2a); }
body.dark-mode .order-modal-header h2 { color:#a8b8e0; }
body.dark-mode .close-btn { color:#7a8aaa; }
body.dark-mode .close-btn:hover { color:#e8849a; }
body.dark-mode .order-modal-footer { background:#121638; border-top-color:#2a2f4a; }
body.dark-mode .total-section span { color:#7a8aaa; }
body.dark-mode .total-section .total-price { color:#6ac48a; }
body.dark-mode .dark-toggle { border-color:#a8b8e0; background:#1a1f3a; color:#a8b8e0; }
body.dark-mode .dark-toggle:hover { background:#a8b8e0; color:#0a0e27; }
body.dark-mode footer { color:#4a5a7a; }
body.dark-mode .surprise-btn { border-color:#a8b8e0; background:#1a1f3a; color:#a8b8e0; }
body.dark-mode .surprise-btn:hover { background:#a8b8e0; color:#0a0e27; }
body.dark-mode .surprise-content { background:#161b36; }
body.dark-mode .surprise-content h2 { color:#c8d4e8; }
body.dark-mode .surprise-content p { color:#7a8aaa; }
body.dark-mode .surprise-input { background:#0a0e27; border-color:#2a2f4a; color:#b8c4d8; }
body.dark-mode .surprise-input:focus { border-color:#a8b8e0; }
body.dark-mode .surprise-submit { background:#a8b8e0; color:#0a0e27; }
body.dark-mode .detail-content { background:#161b36; }
body.dark-mode .detail-body h2 { color:#c8d4e8; }
body.dark-mode .detail-cuisine { color:#7a8aaa; }
body.dark-mode .detail-price { color:#e8849a; }
body.dark-mode .detail-section strong { color:#e8849a; }
body.dark-mode .detail-section p { color:#7a8aaa; }
body.dark-mode .detail-close { background:rgba(22,27,54,0.9); color:#7a8aaa; }
body.dark-mode .detail-close:hover { background:#1a1f3a; color:#e8849a; }
body.dark-mode .empty-cart-box { background:#161b36; color:#b8c4d8; }
body.dark-mode .empty-cart-box h2 { color:#e8849a; }
body.dark-mode #scrollTopBtn { background:#2a2f4a; color:#c8c8e0; }
body.dark-mode .seat-btn { background:#0a0e27; border-color:#6ac48a; color:#6ac48a; }
body.dark-mode .seat-btn:hover { background:#6ac48a; color:#0a0e27; }
body.dark-mode .seat-num { color:#c8d4e8; }
body.dark-mode #menuSearch { background:#161b36; border-color:#2a2f4a; color:#b8c4d8; }
body.dark-mode #menuSearch:focus { border-color:#5060a0; box-shadow:0 0 0 3px rgba(80,96,160,0.3) !important; }
body.dark-mode #bookmarkContent > div > div { background:#1a1f3a !important; border-color:#2a2f4a !important; }
body.dark-mode #bookmarkContent > div > div strong { color:#c8d4e8; }
body.dark-mode #bookmarkContent > div > div span { color:#7a8aaa !important; }
body.dark-mode #viewSavedBtn:hover { background:#2a2f4a !important; }
`;
    document.head.appendChild(css);
}

function injectLightCSS() {
    if (document.getElementById('lightCSS')) return;
    const css = document.createElement('style');
    css.id = 'lightCSS';
    css.textContent = `
    .badge {
      display: inline-block;
      padding: 2px 10px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .badge.veg {
      background: #c1f0c1;
      color: #3a7a3a;
    }
    .badge.nonveg {
      background: #f8c8dc;
      color: #a05060;
    }
    `;
    document.head.insertBefore(css, document.head.firstChild);
}

function setupSurprise() {
    const modal = document.getElementById('surpriseModal');
    const stage = document.getElementById('surpriseStage');
    if (!modal || !stage) return;

    function showStage(html) {
        stage.innerHTML = html;
    }

    function openModal() {
        showStage(`
            <h2>MEMBERSHIP</h2>
            <p>Are you a member?</p>
            <div class="surprise-btn-group">
                <button class="surprise-btn" id="sYeah">yeaaa</button>
                <button class="surprise-btn" id="sNah">narrr</button>
            </div>
        `);
        modal.classList.add('open');

        document.getElementById('sYeah').addEventListener('click', () => {
            showStage(`
                <h2>I DONT BELIEVE U &#128545;</h2>
                <img class="surprise-img" src="https://pbs.twimg.com/profile_images/1939971089599176704/ERGX8hwn.jpg" alt="angry">
                <button class="surprise-btn" id="sClose" style="margin-top:1rem;">Close</button>
            `);
            document.getElementById('sClose').addEventListener('click', () => modal.classList.remove('open'));
        });

        document.getElementById('sNah').addEventListener('click', () => {
            showStage(`
                <h2>REGISTRATION</h2>
                <p>Enter your phone number to register</p>
                <input class="surprise-input" id="sPhone" type="text" placeholder="Type your number..." maxlength="10">
                <button class="surprise-submit" id="sSubmit">Register</button>
            `);
            document.getElementById('sSubmit').addEventListener('click', () => {
                const phone = document.getElementById('sPhone').value.trim();
                if (!phone) { alert('Please enter your number!'); return; }
                showStage(`
                    <h2>SURPRISEEEE &#129321;</h2>
                    <img class="surprise-img" src="https://pbs.twimg.com/media/HL691HdWgAEiPfh?format=jpg&name=900x900" alt="surprise">
                    <p>Thank you for playing with me &#128525;</p>
                    <p>ORDER OUR RESTAURANT???? &#128299;</p>
                    <button class="surprise-btn" id="sClose2" style="margin-top:1rem;">Close</button>
                `);
                document.getElementById('sClose2').addEventListener('click', () => modal.classList.remove('open'));
            });
        });
    }

    // Wire header surprise button
    const heroBtn = document.getElementById('heroSurprise');
    if (heroBtn) heroBtn.addEventListener('click', openModal);
}

function buildSearchInput() {
    const container = document.querySelector('.container');
    const grid = document.getElementById('menuGrid');
    if (!container || !grid) return;
    if (document.getElementById('menuSearch')) return;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:relative;margin-bottom:1.5rem;animation:fadeIn 0.3s ease;';
    const input = document.createElement('input');
    input.id = 'menuSearch';
    input.type = 'text';
    input.placeholder = '🔍 Search dishes, cuisines...';
    Object.assign(input.style, {
        width:'100%', padding:'12px 44px 12px 16px', border:'2px solid #f8c8dc',
        borderRadius:'12px', fontFamily:'inherit', fontSize:'15px',
        outline:'none', color:'#555', background:'#fff',
        transition:'border-color 0.3s, box-shadow 0.3s'
    });
    wrap.appendChild(input);

    const savedBtn = document.createElement('button');
    savedBtn.id = 'viewSavedBtn';
    savedBtn.textContent = '📁';
    savedBtn.title = 'View saved items';
    Object.assign(savedBtn.style, {
        position:'absolute', right:'6px', top:'50%', transform:'translateY(-50%)',
        border:'none', background:'transparent', cursor:'pointer',
        fontSize:'20px', padding:'6px 8px', borderRadius:'8px', lineHeight:'1'
    });
    savedBtn.addEventListener('mouseenter', () => { savedBtn.style.background = '#f8c8dc'; });
    savedBtn.addEventListener('mouseleave', () => { savedBtn.style.background = 'transparent'; });
    wrap.appendChild(savedBtn);
    container.insertBefore(wrap, grid);

    input.addEventListener('input', function() {
        const q = this.value.toLowerCase().trim();
        document.querySelectorAll('.menu-card').forEach(card => {
            const name = card.querySelector('h3')?.textContent?.toLowerCase() || '';
            const meta = card.querySelector('.left-meta span')?.textContent?.toLowerCase() || '';
            card.style.display = (!q || name.includes(q) || meta.includes(q)) ? '' : 'none';
        });
    });
    input.addEventListener('focus', () => { input.style.borderColor = '#f0a0b8'; input.style.boxShadow = '0 0 0 3px rgba(248,200,220,0.3)'; });
    input.addEventListener('blur', () => { input.style.borderColor = '#f8c8dc'; input.style.boxShadow = 'none'; });

    return savedBtn;
}

function buildBookmarkViewer(savedBtn) {
    if (document.getElementById('bookmarkModal')) return;
    if (!savedBtn) return;

    const modal = document.createElement('div');
    modal.className = 'detail-overlay';
    modal.id = 'bookmarkModal';
    modal.innerHTML = '<div class="detail-content" id="bookmarkContent"></div>';
    document.body.appendChild(modal);

    savedBtn.addEventListener('click', () => {
        const saved = document.querySelectorAll('.bookmark-btn.active');
        const content = document.getElementById('bookmarkContent');
        if (saved.length === 0) {
            content.innerHTML = '<h2 style="text-align:center;margin:2rem 0 3rem;">📁 No saved items yet</h2><button class="detail-close">Close</button>';
        } else {
            let html = '<h2 style="text-align:center;margin-bottom:1.5rem;">📁 Saved Items</h2><div style="display:grid;gap:1rem;">';
            saved.forEach(el => {
                const card = el.closest('.menu-card');
                if (!card) return;
                const img = card.querySelector('img');
                const title = card.querySelector('h3');
                const price = card.querySelector('.price');
                html += `<div style="display:flex;align-items:center;gap:1rem;background:#fcf0f5;border-radius:12px;padding:0.8rem;border:1px solid #f8c8dc;">
                    <img src="${img?.src || ''}" alt="" style="width:60px;height:60px;border-radius:8px;object-fit:cover;">
                    <div style="flex:1;"><strong>${title?.textContent || ''}</strong><br><span style="color:#888;">${price?.textContent || ''}</span></div>
                </div>`;
            });
            html += '</div><button class="detail-close">Close</button>';
            content.innerHTML = html;
        }
        modal.classList.add('open');
        content.querySelector('.detail-close').addEventListener('click', () => modal.classList.remove('open'));
        modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
    });
}
