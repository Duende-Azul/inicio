const products = [
    {
        id: 'vela-calma',
        name: 'Vela Calma',
        category: 'bienestar',
        categoryLabel: 'Bienestar',
        description: 'Cera vegetal · aroma lavanda',
        details: 'Una pausa encendida para bajar el ritmo. Nuestra vela está hecha con cera vegetal y perfumada suavemente con lavanda, ideal para acompañar tus momentos de descanso.',
        materials: 'Cera vegetal y esencia de lavanda',
        size: '250 g · hasta 40 horas',
        price: 18500,
        badge: 'Favorito',
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85',
        alt: 'Vela artesanal encendida en un ambiente cálido'
    },
    {
        id: 'taza-tierra',
        name: 'Taza Tierra',
        category: 'hogar',
        categoryLabel: 'Hogar',
        description: 'Cerámica artesanal · 300 ml',
        details: 'Una taza cómoda para tus mañanas lentas. Modelada y esmaltada a mano, cada una tiene pequeñas variaciones que la hacen irrepetible.',
        materials: 'Cerámica de alta temperatura',
        size: '300 ml · apta para lavavajillas',
        price: 24000,
        badge: 'Pieza única',
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85',
        alt: 'Taza de cerámica artesanal'
    },
    {
        id: 'cuenco-oliva',
        name: 'Cuenco Oliva',
        category: 'hogar',
        categoryLabel: 'Hogar',
        description: 'Cerámica hecha a mano',
        details: 'Un cuenco versátil para servir algo rico, guardar tus pequeños tesoros o simplemente decorar ese rincón que tanto te gusta.',
        materials: 'Cerámica esmaltada a mano',
        size: 'Diámetro aproximado: 14 cm',
        price: 21000,
        badge: '',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85',
        alt: 'Cuenco de cerámica en tonos naturales'
    },
    {
        id: 'bolso-nube',
        name: 'Bolso Nube',
        category: 'accesorios',
        categoryLabel: 'Accesorios',
        description: 'Tejido a mano · algodón',
        details: 'Liviano, suave y listo para acompañarte. Está tejido en algodón natural y su tamaño es perfecto para llevar lo esencial a donde vayas.',
        materials: 'Algodón natural tejido a mano',
        size: '30 × 34 cm · asas cómodas',
        price: 32000,
        badge: 'Nuevo',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
        alt: 'Bolso artesanal de tela en tonos naturales'
    },
    {
        id: 'difusor-brisa',
        name: 'Difusor Brisa',
        category: 'bienestar',
        categoryLabel: 'Bienestar',
        description: 'Aroma cítrico · 100 ml',
        details: 'Un aroma fresco y delicado para darle otra energía a tus espacios. Incluye varillas de ratán y una mezcla cítrica preparada en nuestro taller.',
        materials: 'Esencias aromáticas y varillas de ratán',
        size: '100 ml · duración aproximada: 6 semanas',
        price: 19500,
        badge: '',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85',
        alt: 'Difusor aromático para el hogar'
    },
    {
        id: 'florero-aurora',
        name: 'Florero Aurora',
        category: 'hogar',
        categoryLabel: 'Hogar',
        description: 'Cerámica artesanal · esmaltado',
        details: 'Una forma sencilla de celebrar las flores de estación. Su acabado artesanal combina con flores frescas, ramas secas o con nada: también queda precioso así.',
        materials: 'Cerámica esmaltada',
        size: '18 cm de alto · cada pieza es distinta',
        price: 28500,
        badge: 'Hecho a mano',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85',
        alt: 'Florero de cerámica decorado con flores'
    },
    {
        id: 'porta-incienso',
        name: 'Porta incienso Sol',
        category: 'bienestar',
        categoryLabel: 'Bienestar',
        description: 'Cerámica · detalle esmaltado',
        details: 'Un pequeño objeto para convertir una pausa cotidiana en un ritual. Tiene una base estable y está esmaltado a mano en tonos suaves.',
        materials: 'Cerámica esmaltada a mano',
        size: '12 cm · compatible con varillas estándar',
        price: 14500,
        badge: '',
        image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=85',
        alt: 'Objeto artesanal de cerámica para un rincón de calma'
    },
    {
        id: 'set-regalo',
        name: 'Set Buen Día',
        category: 'accesorios',
        categoryLabel: 'Accesorios',
        description: 'Una selección para regalar bonito',
        details: 'Un regalo listo para sorprender: incluye una vela Calma y una taza Tierra, envueltas con materiales reutilizables y una tarjeta para tu mensaje.',
        materials: 'Vela vegetal, taza de cerámica y envoltorio',
        size: 'Incluye tarjeta con mensaje personalizado',
        price: 38500,
        badge: 'Para regalar',
        image: '../imgs/img1.jpeg',
        alt: 'Regalo artesanal envuelto con cuidado'
    }
];

const currency = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
});

const productsById = new Map(products.map((product) => [product.id, product]));
const productGrid = document.querySelector('#product-grid');
const categoryFilters = document.querySelector('#category-filters');
const searchInput = document.querySelector('#product-search');
const emptyState = document.querySelector('#empty-state');
const productModal = document.querySelector('#product-modal');
const modalContent = document.querySelector('#modal-content');
const cartDrawer = document.querySelector('#cart-drawer');
const cartItems = document.querySelector('#cart-items');
const cartEmpty = document.querySelector('#cart-empty');
const cartSummary = document.querySelector('#cart-summary');
const toast = document.querySelector('#toast');
const cart = new Map();

let selectedCategory = 'todos';
let activeProduct = null;
let modalQuantity = 1;
let previousFocus = null;
let toastTimer;

function formatPrice(amount) {
    return currency.format(amount);
}

function renderProducts() {
    const query = searchInput.value.trim().toLocaleLowerCase('es');
    const visibleProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
        const matchesSearch = `${product.name} ${product.description} ${product.categoryLabel}`.toLocaleLowerCase('es').includes(query);
        return matchesCategory && matchesSearch;
    });

    productGrid.innerHTML = visibleProducts.map((product) => `
        <article class="product-card">
            <div class="product-image-wrap" data-product-id="${product.id}" role="button" tabindex="0" aria-label="Ver detalles de ${product.name}">
                <img class="product-image" src="${product.image}" alt="${product.alt}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button class="view-product" type="button" data-open-product="${product.id}">Ver producto</button>
                <button class="quick-add" type="button" data-add-product="${product.id}" aria-label="Agregar ${product.name} a la bolsa">+</button>
            </div>
            <div class="product-info">
                <div>
                    <span class="product-name">${product.name}</span>
                    <p class="product-description">${product.description}</p>
                </div>
                <span class="product-price">${formatPrice(product.price)}</span>
            </div>
        </article>
    `).join('');
    emptyState.hidden = visibleProducts.length > 0;
}

function openProduct(productId, focusCloseButton = true) {
    activeProduct = productsById.get(productId);
    if (!activeProduct) return;

    modalQuantity = 1;
    previousFocus = document.activeElement;
    modalContent.innerHTML = `
        <img class="modal-product-image" src="${activeProduct.image}" alt="${activeProduct.alt}">
        <div class="modal-product-copy">
            <p class="eyebrow"><span class="eyebrow-line"></span> ${activeProduct.categoryLabel}${activeProduct.badge ? ` · ${activeProduct.badge}` : ''}</p>
            <h2 id="modal-title">${activeProduct.name}</h2>
            <p class="modal-price">${formatPrice(activeProduct.price)}</p>
            <p class="modal-description">${activeProduct.details}</p>
            <ul class="modal-details">
                <li>${activeProduct.materials}</li>
                <li>${activeProduct.size}</li>
                <li>Preparado y embalado con cariño en nuestro taller</li>
            </ul>
            <div class="modal-actions">
                <div class="quantity-control" aria-label="Cantidad">
                    <button type="button" data-quantity-change="-1" aria-label="Quitar una unidad">−</button>
                    <span id="modal-quantity" aria-live="polite">1</span>
                    <button type="button" data-quantity-change="1" aria-label="Agregar una unidad">+</button>
                </div>
                <button class="button button-dark" type="button" data-modal-add>Agregar a mi bolsa <span aria-hidden="true">↗</span></button>
            </div>
            <p class="modal-added" id="modal-added" role="status"></p>
        </div>
    `;
    productModal.classList.add('is-open');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    if (focusCloseButton) productModal.querySelector('.modal-close').focus();
}

function closeProduct() {
    if (!productModal.classList.contains('is-open')) return;
    productModal.classList.remove('is-open');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    activeProduct = null;
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
}

function changeCart(productId, amount) {
    const currentQuantity = cart.get(productId) || 0;
    const nextQuantity = currentQuantity + amount;
    if (nextQuantity <= 0) cart.delete(productId);
    else cart.set(productId, nextQuantity);
    renderCart();
}

function getCartSummary() {
    let totalItems = 0;
    let subtotal = 0;
    const lines = [];

    cart.forEach((quantity, productId) => {
        const product = productsById.get(productId);
        if (!product) return;

        totalItems += quantity;
        subtotal += product.price * quantity;
        lines.push({ product, quantity });
    });

    return { lines, totalItems, subtotal };
}

function renderCart() {
    const { lines, totalItems, subtotal } = getCartSummary();

    document.querySelector('#cart-count').textContent = totalItems;
    document.querySelector('#drawer-count').textContent = `(${totalItems})`;
    cartEmpty.hidden = totalItems > 0;
    cartSummary.hidden = totalItems === 0;
    cartItems.innerHTML = lines.map(({ product, quantity }) => `
        <article class="cart-line">
            <img src="${product.image}" alt="">
            <div>
                <h3>${product.name}</h3>
                <p>${formatPrice(product.price)} c/u</p>
                <div class="cart-line-controls">
                    <button type="button" data-cart-change="-1" data-product-id="${product.id}" aria-label="Quitar una unidad de ${product.name}">−</button>
                    <span>${quantity}</span>
                    <button type="button" data-cart-change="1" data-product-id="${product.id}" aria-label="Agregar una unidad de ${product.name}">+</button>
                    <button class="cart-remove" type="button" data-cart-change="-${quantity}" data-product-id="${product.id}" aria-label="Eliminar ${product.name}">×</button>
                </div>
            </div>
            <span class="cart-line-price">${formatPrice(product.price * quantity)}</span>
        </article>
    `).join('');
    document.querySelector('#cart-subtotal').textContent = formatPrice(subtotal);
}

function openCart() {
    cartDrawer.classList.add('is-open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    cartDrawer.querySelector('.icon-button').focus();
}

function closeCart() {
    cartDrawer.classList.remove('is-open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    if (!productModal.classList.contains('is-open')) document.body.classList.remove('no-scroll');
    document.querySelector('#cart-open').focus();
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

categoryFilters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    selectedCategory = button.dataset.category;
    categoryFilters.querySelectorAll('.filter-button').forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle('is-active', isActive);
        filter.setAttribute('aria-pressed', String(isActive));
    });
    renderProducts();
});

searchInput.addEventListener('input', renderProducts);

productGrid.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-product]');
    if (addButton) {
        event.stopPropagation();
        changeCart(addButton.dataset.addProduct, 1);
        showToast('Agregamos una pieza a tu bolsa ✿');
        return;
    }
    const openButton = event.target.closest('[data-open-product]');
    if (openButton && (openButton.classList.contains('view-product') || window.matchMedia('(hover: hover) and (pointer: fine)').matches)) {
        openProduct(openButton.dataset.openProduct);
    }
    else {
        const image = event.target.closest('.product-image-wrap');
        if (image && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            openProduct(image.dataset.productId);
        }
    }
});

productGrid.addEventListener('keydown', (event) => {
    const image = event.target.closest('.product-image-wrap[role="button"]');
    if (image && window.matchMedia('(hover: hover) and (pointer: fine)').matches && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        openProduct(image.dataset.productId);
    }
});

modalContent.addEventListener('click', (event) => {
    const quantityButton = event.target.closest('[data-quantity-change]');
    if (quantityButton) {
        modalQuantity = Math.max(1, modalQuantity + Number(quantityButton.dataset.quantityChange));
        document.querySelector('#modal-quantity').textContent = modalQuantity;
        return;
    }
    if (event.target.closest('[data-modal-add]') && activeProduct) {
        changeCart(activeProduct.id, modalQuantity);
        document.querySelector('#modal-added').textContent = `${modalQuantity} ${modalQuantity === 1 ? 'pieza agregada' : 'piezas agregadas'} a tu bolsa.`;
    }
});

productModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-modal]')) closeProduct();
});

document.querySelector('#cart-open').addEventListener('click', openCart);
cartDrawer.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-cart]')) {
        closeCart();
        return;
    }
    const changeButton = event.target.closest('[data-cart-change]');
    if (changeButton) changeCart(changeButton.dataset.productId, Number(changeButton.dataset.cartChange));
});

document.querySelector('#checkout-button').addEventListener('click', () => {
    const { lines, subtotal } = getCartSummary();
    const orderLines = lines.map(({ product, quantity }) =>
        `- ${product.name} x ${quantity}: ${formatPrice(product.price * quantity)}`
    );
    const subject = encodeURIComponent('Consulta de pedido - Duende Azul');
    const body = encodeURIComponent(`¡Hola! Quiero consultar por este pedido:\n\n${orderLines.join('\n')}\n\nSubtotal: ${formatPrice(subtotal)}\n\n¿Me cuentan las opciones de envío y pago?`);
    window.location.href = `https://wa.me/+541127112198?text=${body}`;
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (productModal.classList.contains('is-open')) closeProduct();
        if (cartDrawer.classList.contains('is-open')) closeCart();
    }
});

const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroImage = document.querySelector('.hero-image');
if (heroSlides.length > 1 && heroImage) {
    const heroDots = [...heroImage.querySelectorAll('[data-hero-slide]')];
    let activeSlideIndex = heroSlides.findIndex((slide) => slide.classList.contains('is-active'));
    let isTransitioning = false;
    let autoAdvanceTimer;
    let controlsTimer;

    if (activeSlideIndex < 0) activeSlideIndex = 0;

    function updateHeroDots() {
        heroImage.style.setProperty('--active-dot-index', activeSlideIndex);
        heroDots.forEach((dot, index) => {
            const isActive = index === activeSlideIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-pressed', String(isActive));
        });
    }

    function showHeroControls() {
        const heroArt = heroImage.closest('.hero-art');
        if (!heroArt) return;

        heroArt.classList.add('controls-visible');
        window.clearTimeout(controlsTimer);
        controlsTimer = window.setTimeout(() => {
            heroArt.classList.remove('controls-visible');
        }, 2000);
    }

    const heroArt = heroImage.closest('.hero-art');
    heroArt?.addEventListener('pointerleave', () => {
        window.clearTimeout(controlsTimer);
        heroArt.classList.remove('controls-visible');
    });

    function showHeroSlide(nextIndex, direction = 'forward') {
        if (isTransitioning || nextIndex === activeSlideIndex) return;

        const currentSlide = heroSlides[activeSlideIndex];
        const nextSlide = heroSlides[nextIndex];
        isTransitioning = true;

        heroImage.classList.add('is-reveal-transition', `is-reveal-${direction}`);
        nextSlide.classList.add('is-reveal-incoming');
        window.requestAnimationFrame(() => {
            nextSlide.classList.remove('is-hidden');
            window.requestAnimationFrame(() => {
                nextSlide.classList.add('is-active');
                currentSlide.classList.remove('is-active');
                currentSlide.classList.add('is-exiting');
                activeSlideIndex = nextIndex;
                updateHeroDots();
                window.requestAnimationFrame(() => {
                    heroImage.classList.add('is-moving');
                    finishHeroTransition(currentSlide);
                });
            });
        });
    }

    function finishHeroTransition(currentSlide) {
        window.setTimeout(() => {
            currentSlide.classList.remove('is-exiting');
            currentSlide.classList.add('is-hidden');
            heroSlides.forEach((slide) => slide.classList.remove('is-reveal-incoming'));
            heroImage.classList.remove('is-moving');
            heroImage.classList.remove('is-reveal-transition', 'is-reveal-backward', 'is-reveal-forward');
            isTransitioning = false;
        }, 700);
    }

    function resetAutoAdvance() {
        window.clearInterval(autoAdvanceTimer);
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            autoAdvanceTimer = window.setInterval(() => {
                showHeroSlide((activeSlideIndex + 1) % heroSlides.length);
            }, 3000);
        }
    }

    heroImage.addEventListener('click', (event) => {
        const control = event.target.closest('[data-hero-prev], [data-hero-next], [data-hero-slide]');
        if (!control) return;

        let nextIndex;
        let direction = 'forward';
        if (control.hasAttribute('data-hero-slide')) {
            nextIndex = Number(control.dataset.heroSlide);
        } else {
            const isPrevious = control.hasAttribute('data-hero-prev');
            const step = isPrevious ? -1 : 1;
            if (isPrevious) direction = 'backward';
            nextIndex = (activeSlideIndex + step + heroSlides.length) % heroSlides.length;
        }

        if (!Number.isInteger(nextIndex) || nextIndex < 0 || nextIndex >= heroSlides.length) return;
        showHeroSlide(nextIndex, direction);
        showHeroControls();
        resetAutoAdvance();
    });

    updateHeroDots();
    resetAutoAdvance();
}

renderProducts();
renderCart();
