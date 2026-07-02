let foodDatabase = [
    {
        id: 1,
        name: "pizza",
        cusine: "Italian",
        origin: "Italy",
        vegetarian: false,
        picture: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "sushi",
        cusine: "Japanese",
        origin: "Japan",
        vegetarian: true,
        picture: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "pad thai",
        cusine: "Thai",
        origin: "Thailand",
        vegetarian: true,
        picture: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "tacos",
        cusine: "Mexican",
        origin: "Mexico",
        vegetarian: false,
        picture: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "butter chicken",
        cusine: "Indian",
        origin: "India",
        vegetarian: false,
        picture: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "croissant",
        cusine: "French",
        origin: "France",
        vegetarian: true,
        picture: "https://plus.unsplash.com/premium_photo-1661743823829-326b78143b30?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: "ramen",
        cusine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        picture: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "paella",
        cusine: "Spanish",
        origin: "Spain",
        vegetarian: false,
        picture: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "falafel",
        cusine: "Middle Eastern",
        origin: "Lebanon",
        vegetarian: true,
        picture: "https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "kimchi",
        cusine: "Korean",
        origin: "Korea",
        vegetarian: true,
        picture: "https://images.unsplash.com/photo-1708388064278-707e85eaddc0?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "gelato",
        cusine: "Italian",
        origin: "Italy",
        vegetarian: true,
        picture: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: "pho",
        cusine: "Vietnamese",
        origin: "Vietnam",
        vegetarian: true,
        picture: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        name: "tempura",
        cusine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        picture: "https://images.unsplash.com/photo-1677743537607-f7fc9273ec4d?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        name: "pasta",
        cusine: "Italian",
        origin: "Italy",
        vegetarian: true,
        picture: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        name: "salad",
        cusine: "International",
        origin: "Global",
        vegetarian: true,
        picture: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
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
                    <span class="badge ${vegStatus}">${vegLabel}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

console.log(foodDatabase[0]);
