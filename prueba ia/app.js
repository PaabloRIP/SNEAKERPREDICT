const sneakers = [
    {
        id: 1,
        brand: "Nike",
        model: "Kobe Bryant x Air Force 1 Low",
        colorway: "City Of Champions",
        date: "2026-01-21",
        price: 150,
        resale: "High",
        image: "https://images.stockx.com/360/Nike-Air-Force-1-Low-Kobe-Bryant-City-of-Champions/Images/Nike-Air-Force-1-Low-Kobe-Bryant-City-of-Champions/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "Una colaboración legendaria que celebra el legado de Kobe Bryant en la clásica silueta Air Force 1. El valor de reventa se espera que sea significativamente alto debido a su carácter conmemorativo."
    },
    {
        id: 2,
        brand: "Adidas",
        model: "Anthony Edwards 2",
        colorway: "White / Lucid Red",
        date: "2026-01-07",
        price: 130,
        resale: "High",
        image: "https://images.stockx.com/360/adidas-AE-1-With-Love/Images/adidas-AE-1-With-Love/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "La segunda entrega de la línea signature de Anthony Edwards. Después del éxito masivo del AE1, este modelo promete ser uno de los más buscados del año."
    },
    {
        id: 3,
        brand: "New Balance",
        model: "1906L Loafer",
        colorway: "Multi-Color",
        date: "2026-01-19",
        price: 160,
        resale: "High",
        image: "https://images.stockx.com/360/New-Balance-1906L-Loafer-Junya-Watanabe-Black/Images/New-Balance-1906L-Loafer-Junya-Watanabe-Black/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "Un híbrido único entre un sneaker de alto rendimiento y un mocasín. La tendencia 'loafer-sneaker' impulsada por esta silueta está generando un hype inmenso."
    },
    {
        id: 4,
        brand: "Nike",
        model: "Zoom Kobe 1 Protro",
        colorway: "Work Blue / Gold",
        date: "2025-06-05",
        price: 210,
        resale: "High",
        image: "https://images.stockx.com/360/Nike-Kobe-1-Protro-81-Points/Images/Nike-Kobe-1-Protro-81-Points/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "El regreso de la primera zapatilla signature de Kobe con Nike. Los Protro siempre son objeto de deseo para coleccionistas y jugadores por igual."
    },
    {
        id: 5,
        brand: "Nike",
        model: "Sabrina 3",
        colorway: "Equity",
        date: "2026-01-19",
        price: 135,
        resale: "Medium",
        image: "https://images.stockx.com/360/Nike-Sabrina-1-Ionic-W/Images/Nike-Sabrina-1-Ionic-W/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "La línea de Sabrina Ionescu continúa evolucionando. Aunque el potencial de reventa es moderado, es un 'must-cop' para performance."
    },
    {
        id: 6,
        brand: "New Balance",
        model: "1906R",
        colorway: "Neon Multi",
        date: "2026-01-25",
        price: 155,
        resale: "Medium",
        image: "https://images.stockx.com/360/New-Balance-1906R-Protection-Pack-Rain-Cloud/Images/New-Balance-1906R-Protection-Pack-Rain-Cloud/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "Nuevos colores vibrantes para la silueta estrella de New Balance. Ideal para el verano con un toque retro-futurista."
    },
    {
        id: 7,
        brand: "Nike",
        model: "Air Max Plus VII",
        colorway: "University Red",
        date: "2025-11-17",
        price: 180,
        resale: "Medium",
        image: "https://images.stockx.com/360/Nike-Air-Max-Plus-OG-Voltage-Purple-2018-2024/Images/Nike-Air-Max-Plus-OG-Voltage-Purple-2018-2024/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "La séptima iteración de la familia Tuned Air. Una silueta agresiva que mantiene una base de fans leales en Europa y Australia."
    },
    {
        id: 8,
        brand: "Adidas",
        model: "Yeezy Boost 350 V2",
        colorway: "Salt",
        date: "2026-02-15",
        price: 230,
        resale: "High",
        image: "https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Salt/Images/adidas-Yeezy-Boost-350-V2-Salt/Lv2/img01.jpg?auto=compress&w=480&q=80",
        description: "A pesar de todo, los Yeezy siguen manteniendo un valor de reventa estable por encima del retail, especialmente en colores neutros."
    }
];

// DOM Elements
const grid = document.getElementById('sneaker-grid');
const searchInput = document.getElementById('sneaker-search');
const brandFilters = document.querySelectorAll('.brand-filter');
const resaleFilters = document.querySelectorAll('.resale-filter');
const sortSelect = document.getElementById('sort-select');

// State Management
let currentFilters = {
    search: '',
    brands: ['Nike', 'Adidas', 'New Balance'],
    resale: ['High', 'Medium', 'Low'],
    sort: 'date'
};

function init() {
    renderSneakers();
    
    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        currentFilters.search = e.target.value.toLowerCase();
        renderSneakers();
    });

    brandFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            currentFilters.brands = Array.from(brandFilters)
                .filter(i => i.checked)
                .map(i => i.value);
            renderSneakers();
        });
    });

    resaleFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            currentFilters.resale = Array.from(resaleFilters)
                .filter(i => i.checked)
                .map(i => i.value);
            renderSneakers();
        });
    });

    sortSelect.addEventListener('change', (e) => {
        currentFilters.sort = e.target.value;
        renderSneakers();
    });
}

function renderSneakers() {
    let filtered = sneakers.filter(s => {
        const matchesSearch = s.model.toLowerCase().includes(currentFilters.search) || 
                             s.brand.toLowerCase().includes(currentFilters.search);
        const matchesBrand = currentFilters.brands.includes(s.brand);
        const matchesResale = currentFilters.resale.includes(s.resale);
        return matchesSearch && matchesBrand && matchesResale;
    });

    // Sort
    if (currentFilters.sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    grid.innerHTML = filtered.map(s => `
        <div class="sneaker-card" onclick="alert('Detalles de: ${s.model}\\n\\nResale: ${s.resale}\\nPrice: $${s.price}')">
            <span class="resale-badge ${s.resale.toLowerCase()}">${s.resale === 'High' ? '🔥 Reventa Alta' : s.resale}</span>
            <div class="card-brand">${s.brand}</div>
            <div class="card-image-container">
                <img src="${s.image}" alt="${s.model}" class="card-image">
            </div>
            <div class="card-name">${s.model}</div>
            <div class="card-colorway">${s.colorway}</div>
            <div class="card-info">
                <div class="card-date">${formatDate(s.date)}</div>
                <div class="card-price">$${s.price}</div>
            </div>
        </div>
    `).join('');
}

function formatDate(dateStr) {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateStr).toLocaleDateString('es-ES', options);
}

document.addEventListener('DOMContentLoaded', init);
