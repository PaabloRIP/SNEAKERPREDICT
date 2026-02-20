const sneakers = [
    {
        id: 1,
        name: "Fragment x Union x Air Jordan 1 High OG",
        brand: "jordan",
        date: "27 Feb 2026",
        units: "44,000",
        retailPrice: "$190",
        resaleScore: 98,
        bestMarket: "StockX",
        estPrice: "$1,150",
        img: "img/1.png",
        links: [
            { name: "Nike SNKRS", url: "https://www.nike.com/launch" },
            { name: "Foot District", url: "https://footdistrict.com/lanzamientos" },
            { name: "SVD", url: "https://www.sivasdescalzo.com/es/lanzamientos" },
            { name: "BSTN", url: "https://www.bstn.com/es/upcoming" }
        ]
    },
    {
        id: 2,
        name: "Air Jordan 4 Retro 'Imperial Purple'",
        brand: "jordan",
        date: "23 Feb 2026",
        units: "35,000",
        retailPrice: "$220",
        resaleScore: 88,
        bestMarket: "StockX",
        estPrice: "$360",
        img: "img/imperial.png",
        links: [
            { name: "Nike SNKRS", url: "https://www.nike.com/launch" },
            { name: "Foot District", url: "https://footdistrict.com/lanzamientos" },
            { name: "SVD", url: "https://www.sivasdescalzo.com/es/lanzamientos" }
        ]
    },
    {
        id: 3,
        name: "Off-White x Air Jordan 1 High 'Alaska'",
        brand: "jordan",
        date: "31 Mar 2026",
        units: "10,000",
        retailPrice: "$190",
        resaleScore: 99,
        bestMarket: "StockX",
        estPrice: "$1,600",
        img: "img/alaska.png",
        isExclusive: true,
        links: [
            { name: "Nike SNKRS", url: "https://www.nike.com/launch" },
            { name: "Off-White", url: "https://www.off---white.com" }
        ]
    },
    {
        id: 4,
        name: "Travis Scott x Air Jordan 1 Low OG 'Pink Pack'",
        brand: "jordan",
        date: "15 Abr 2026",
        units: "45,000",
        retailPrice: "$150",
        resaleScore: 94,
        bestMarket: "GOAT",
        estPrice: "$850",
        img: "img/pink_pack.png",
        links: [
            { name: "Nike SNKRS", url: "https://www.nike.com/launch" },
            { name: "Travis Scott", url: "https://shop.travisscott.com" },
            { name: "SVD", url: "https://www.sivasdescalzo.com/es/lanzamientos" }
        ]
    },
    {
        id: 5,
        name: "Nike Air Foamposite One 'Stranger Things'",
        brand: "nike",
        date: "22 Mar 2026",
        units: "15,000",
        retailPrice: "$240",
        resaleScore: 87,
        bestMarket: "StockX",
        estPrice: "$420",
        img: "img/stranger.png",
        links: [
            { name: "Nike Store", url: "https://www.nike.com" },
            { name: "Foot District", url: "https://footdistrict.com/lanzamientos" }
        ]
    },
    {
        id: 6,
        name: "Pharrell x VIRGINIA Adistar Jellyfish",
        brand: "adidas",
        date: "21 Feb 2026",
        units: "12,000",
        retailPrice: "$220",
        resaleScore: 85,
        bestMarket: "eBay",
        estPrice: "$450",
        img: "img/6.jpg",
        links: [
            { name: "Adidas Confirmed", url: "https://www.adidas.es/confirmed" },
            { name: "BSTN", url: "https://www.bstn.com/es/upcoming" },
            { name: "Foot District", url: "https://footdistrict.com/lanzamientos" }
        ]
    },
    {
        id: 7,
        name: "LeBron 23 'Good Intentions'",
        brand: "nike",
        date: "03 Mar 2026",
        units: "20,000",
        retailPrice: "$200",
        resaleScore: 78,
        bestMarket: "StockX",
        estPrice: "$340",
        img: "img/7.jpg",
        links: [
            { name: "Nike Store", url: "https://www.nike.com/es/jordan" },
            { name: "SVD Raffles", url: "https://www.sivasdescalzo.com/es/raffles" }
        ]
    },
    {
        id: 8,
        name: "Air Jordan 4 'Valentine's Day' (W)",
        brand: "jordan",
        date: "07 Feb 2026",
        units: "50,000",
        retailPrice: "$210",
        resaleScore: 72,
        bestMarket: "GOAT",
        estPrice: "$310",
        img: "img/8.jpg",
        links: [
            { name: "Nike SNKRS", url: "https://www.nike.com/launch" },
            { name: "Foot District", url: "https://footdistrict.com/lanzamientos" },
            { name: "BSTN", url: "https://www.bstn.com/es/upcoming" }
        ]
    },
    {
        id: 9,
        name: "Travis Scott x Air Jordan 1 Low 'Canary'",
        brand: "jordan",
        date: "25 May 2026",
        units: "65,000",
        retailPrice: "$150",
        resaleScore: 91,
        bestMarket: "StockX",
        estPrice: "$650",
        img: "img/9.jpg",
        isExclusive: true,
        links: [
            { name: "Nike SNKRS", url: "https://www.nike.com/launch" },
            { name: "SVD", url: "https://www.sivasdescalzo.com/es/lanzamientos" },
            { name: "Foot District", url: "https://footdistrict.com/lanzamientos" }
        ]
    }
];


const sneakerGrid = document.getElementById('sneakerGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderSneakers(filter = 'all') {
    sneakerGrid.innerHTML = '';

    const filteredSneakers = filter === 'all'
        ? sneakers
        : sneakers.filter(s => s.brand === filter);

    filteredSneakers.forEach((s, index) => {
        const card = document.createElement('div');
        const isExclusive = s.isExclusive;
        card.className = `sneaker-card ${isExclusive ? 'exclusive-card' : ''}`;
        card.style.animationDelay = `${index * 0.1}s`;

        let content = '';

        if (isExclusive) {
            content = `
                <div class="exclusive-badge">🔒 EXCLUSIVO VIP</div>
                <span class="sneaker-brand">Marca Secreta</span>
                <h3>Lanzamiento Secreto #0${index + 1}</h3>
                <div class="sneaker-img-container exclusive-bg">
                    <div class="secret-shoe-icon">👟</div>
                </div>
                <div class="sneaker-info">
                    <div class="info-item">
                        <span class="info-label">Fecha</span>
                        <span class="info-value">Próximamente</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Acceso</span>
                        <span class="info-value">Solo VIP</span>
                    </div>
                </div>
                <div class="exclusive-overlay">
                    <p>Suscríbete para revelar los detalles de este drop exclusivo</p>
                    <button class="btn-primary sub-trigger">Desbloquear Ahora</button>
                </div>
            `;
        } else {
            let linksHTML = s.links.map(l => {
                const storeClass = l.name.toLowerCase().split(' ')[0].replace(/[^a-z]/g, '');
                return `<a href="${l.url}" target="_blank" class="store-link link-${storeClass}">${l.name}</a>`;
            }).join('');

            content = `
                <span class="sneaker-brand">${s.brand.replace('-', ' ')}</span>
                <h3>${s.name}</h3>
                <div class="sneaker-img-container">
                    <img src="${s.img}" alt="${s.name}" class="sneaker-img" onerror="console.error('Error cargando:', this.src)">
                </div>
                <div class="sneaker-info">
                    <div class="info-item">
                        <span class="info-label">Fecha</span>
                        <span class="info-value">${s.date}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Unidades</span>
                        <span class="info-value">${s.units}</span>
                    </div>
                </div>
                <div class="sneaker-info" style="margin-top: -0.5rem; border-top: none; padding-top: 0;">
                    <div class="info-item">
                        <span class="info-label">Retail</span>
                        <span class="info-value" style="color: var(--text-muted);">${s.retailPrice || 'N/A'}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Est. Profit</span>
                        <span class="info-value" style="color: #2af86f;">+$${(parseInt(s.estPrice.replace('$', '').replace(',', '')) - parseInt((s.retailPrice || '$0').replace('$', '').replace(',', '')))}</span>
                    </div>
                </div>
                <div class="reventa-meter">
                    <div class="meter-labels">
                        <span>Reventa</span>
                        <span>${s.resaleScore}% Potencial</span>
                    </div>
                    <div class="meter-bar">
                        <div class="meter-fill" style="width: ${s.resaleScore}%"></div>
                    </div>
                </div>
                <div class="best-price">
                    <div class="info-item">
                        <span class="info-label">Mejor Canal</span>
                        <span class="market">${s.bestMarket}</span>
                    </div>
                    <div class="price-tag">${s.estPrice}</div>
                </div>
                <div class="store-links-container">
                    <span class="links-title">Dónde Comprar:</span>
                    <div class="links-grid">
                        ${linksHTML}
                    </div>
                </div>
            `;
        }

        card.innerHTML = content;

        // Add event listener for the unlock button inside exclusive cards
        if (isExclusive) {
            const btn = card.querySelector('.sub-trigger');
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                document.getElementById('alertModal').style.display = 'flex';
            });
        }

        sneakerGrid.appendChild(card);
    });
}

// Event Listeners for filters
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderSneakers(btn.dataset.brand);
    });
});

// Initial Render
renderSneakers();

// --- Calculadora de Ganancias ---
const buyPriceInput = document.getElementById('buyPrice');
const sellPriceInput = document.getElementById('sellPrice');
const platformSelect = document.getElementById('platform');
const grossProfitEl = document.getElementById('grossProfit');
const netProfitEl = document.getElementById('netProfit');

function updateCalculator() {
    const buyPrice = parseFloat(buyPriceInput.value) || 0;
    const sellPrice = parseFloat(sellPriceInput.value) || 0;
    const commissionRate = parseFloat(platformSelect.value);

    const grossProfit = sellPrice - buyPrice;
    const netProfit = sellPrice * (1 - commissionRate) - buyPrice;

    grossProfitEl.textContent = `$${grossProfit.toFixed(2)}`;
    netProfitEl.textContent = `$${netProfit.toFixed(2)}`;

    // Cambiar color si hay pérdidas
    netProfitEl.style.color = netProfit >= 0 ? '#2af86f' : '#f82a52';
}

[buyPriceInput, sellPriceInput, platformSelect].forEach(el => {
    el.addEventListener('input', updateCalculator);
});

// --- Sistema de Alertas (Modal) ---
const modal = document.getElementById('alertModal');
const subBtns = document.querySelectorAll('.sneaker-card .sub-trigger'); // Botones dentro de las tarjetas
const headerSubBtn = document.querySelector('.header-actions .btn-primary'); // El botón rojo de arriba
const closeBtn = document.querySelector('.close-modal');
const alertForm = document.getElementById('alertForm');

// El botón de la cabecera abre el mismo modal VIP
if (headerSubBtn) {
    headerSubBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}

// Los botones de las tarjetas también abren el modal
subBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

alertForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = alertForm.querySelector('input').value;
    const btn = alertForm.querySelector('button');

    btn.textContent = 'Procesando...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    setTimeout(() => {
        // --- CONFIGURACIÓN DE PAGO ---
        const paymentLink = 'https://www.paypal.com/paypalme/lenfanterrible25/9.99';

        if (paymentLink.includes('ESCRIBE_AQUI')) {
            alert(`Configuración pendiente: Debes añadir tu enlace de pago en script.js.`);
        } else {
            alert(`¡Gracias! Redirigiendo a PayPal para confirmar tu suscripción VIP de 9.99€.`);
            window.location.href = paymentLink;
        }

        modal.style.display = 'none';
        btn.textContent = 'Suscribirse y Pagar 9.99€';
        btn.style.opacity = '1';
        btn.disabled = false;
    }, 1500);
});

// --- Lógica del Calendario Sneaker ---
let currentMonth = 1; // 0 = Enero, 1 = Febrero
let currentYear = 2026;

const monthDisplay = document.getElementById('monthDisplay');
const daysContainer = document.getElementById('daysContainer');
const dayInfo = document.getElementById('dayInfo');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function renderCalendar() {
    daysContainer.innerHTML = '';
    monthDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Ajustar primer día (JS: 0=Dom, 1=Lun... -> Queremos: 0=Lun, 6=Dom)
    let startDay = firstDay === 0 ? 6 : firstDay - 1;

    // Celdas vacías
    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        daysContainer.appendChild(emptyCell);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = day;

        // Comprobar si hay drops este día
        const dayString = `${day.toString().padStart(2, '0')} ${monthNames[currentMonth].substring(0, 3)} ${currentYear}`;
        const dropsToday = sneakers.filter(s => s.date.toLowerCase().includes(dayString.toLowerCase()));

        if (dropsToday.length > 0) {
            dayEl.classList.add('has-drop');
            dayEl.addEventListener('click', (event) => showDayDrops(day, dropsToday, event));
        }

        daysContainer.appendChild(dayEl);
    }
}

function showDayDrops(day, drops, event) {
    // UI Feedback
    document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
    event.target.classList.add('active');

    dayInfo.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '1rem';
    wrapper.style.width = '100%';

    drops.forEach(s => {
        const item = document.createElement('div');
        item.className = 'drop-item-mini';

        let dotColor = '#fff';
        if (s.brand === 'nike' || s.brand === 'jordan') dotColor = '#ff5a00';
        if (s.brand === 'adidas') dotColor = '#0076ff';
        if (s.brand === 'new-balance') dotColor = '#ff0000';

        item.innerHTML = `
            <div class="drop-mini-img-container" style="width: 80px; height: 80px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); flex-shrink: 0;">
                <img src="${s.img}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='${s.placeholder}';">
            </div>
            <div class="drop-mini-details" style="padding-left: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div class="brand-dot" style="background: ${dotColor}"></div>
                    <span style="font-size: 1.1rem; font-weight: 700; color: white;">${s.name}</span>
                </div>
                <span style="color: var(--text-muted); font-size: 0.9rem; display: block; margin-top: 5px;">Retail Est: ${s.estPrice}</span>
                <span style="color: var(--primary); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; display: block; margin-top: 5px;">🔥 Reventa: ${s.resaleScore}%</span>
            </div>
        `;
        wrapper.appendChild(item);
    });

    dayInfo.appendChild(wrapper);
}

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

// --- Lógica del Marketplace (Trade Center) ---
const userListingsGrid = document.getElementById('userListingsGrid');
const listModal = document.getElementById('listModal');
const openListModalBtn = document.getElementById('openListModal');
const closeListModalBtn = document.getElementById('closeListModal');
const listingForm = document.getElementById('listingForm');

// Cargar anuncios de la comunidad (desde localStorage para simular persistencia local)
let userListings = JSON.parse(localStorage.getItem('sneakerListings')) || [];

function renderMarketplace() {
    if (userListings.length === 0) {
        userListingsGrid.innerHTML = '<div class="empty-state"><p>Aún no hay ofertas de la comunidad. ¡Sé el primero!</p></div>';
        return;
    }

    userListingsGrid.innerHTML = '';
    userListings.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'user-card';

        // Preparar las miniaturas si existen múltiples imágenes
        let images = [item.img1, item.img2, item.img3].filter(img => img && img.trim() !== "");
        let thumbnailsHTML = '';
        if (images.length > 1) {
            thumbnailsHTML = `<div class="img-thumbnails">` +
                images.map((img, i) => `<img src="${img}" class="thumb ${i === 0 ? 'active' : ''}" onmouseover="changeCardImage(this, '${img}')">`).join('') +
                `</div>`;
        }

        card.innerHTML = `
            <div class="condition-badge">${item.condition}</div>
            <div class="user-card-img-container">
                <img src="${item.img1}" alt="${item.name}" class="user-card-img" id="main-img-${index}">
            </div>
            ${thumbnailsHTML}
            <h4>${item.name}</h4>
            <div class="item-details">
                <div class="detail-group">
                    <span class="detail-label">Talla</span>
                    <span class="detail-value">${item.size} US</span>
                </div>
                <div class="detail-group">
                    <span class="detail-label">Precio</span>
                    <span class="detail-value">${item.price}€</span>
                </div>
            </div>
            <div class="card-actions">
                <a href="https://wa.me/${item.contact}?text=Hola, estoy interesado en tus ${item.name}" target="_blank" class="btn-mini btn-offer">Hacer Oferta</a>
                <a href="https://wa.me/${item.contact}?text=Hola, ¿te interesaría un cambio por tus ${item.name}?" target="_blank" class="btn-mini btn-trade">Proponer Cambio</a>
            </div>
            <button class="delete-listing" onclick="deleteListing(${index})" style="background:none; border:none; color:#555; font-size:0.7rem; margin-top:10px; cursor:pointer;">Eliminar mi anuncio</button>
        `;
        userListingsGrid.appendChild(card);
    });
}

// Función para cambiar la imagen al pasar el ratón por las miniaturas
window.changeCardImage = function (thumb, newSrc) {
    const container = thumb.closest('.user-card');
    const mainImg = container.querySelector('.user-card-img');
    mainImg.src = newSrc;

    // Actualizar clase active en miniaturas
    container.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
};

// Abrir/Cerrar Modal
if (openListModalBtn) {
    openListModalBtn.addEventListener('click', () => listModal.style.display = 'flex');
}
if (closeListModalBtn) {
    closeListModalBtn.addEventListener('click', () => listModal.style.display = 'none');
}

window.addEventListener('click', (e) => {
    if (e.target === listModal) listModal.style.display = 'none';
});

// Guardar nuevo anuncio
listingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (userListings.length >= 3) {
        alert('Has alcanzado el límite de 3 artículos permitidos.');
        return;
    }

    const newListing = {
        name: document.getElementById('itemName').value,
        size: document.getElementById('itemSize').value,
        price: document.getElementById('itemPrice').value,
        condition: document.getElementById('itemCondition').value,
        contact: document.getElementById('itemContact').value,
        img1: document.getElementById('itemImg1').value,
        img2: document.getElementById('itemImg2').value,
        img3: document.getElementById('itemImg3').value
    };

    userListings.push(newListing);
    localStorage.setItem('sneakerListings', JSON.stringify(userListings));

    renderMarketplace();
    listingForm.reset();
    listModal.style.display = 'none';
    alert('¡Tu zapatilla ha sido publicada con éxito!');
});

// Función para eliminar (solo para que el usuario pueda limpiar sus pruebas)
window.deleteListing = function (index) {
    if (confirm('¿Seguro que quieres eliminar este anuncio?')) {
        userListings.splice(index, 1);
        localStorage.setItem('sneakerListings', JSON.stringify(userListings));
        renderMarketplace();
    }
};

// Render inicial del marketplace
renderMarketplace();
