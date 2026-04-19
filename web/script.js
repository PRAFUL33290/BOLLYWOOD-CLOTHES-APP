/* ─────────────────────────────────────────────────────────────
   THE REGAL CURATOR — e-commerce SPA script
   ───────────────────────────────────────────────────────────── */

'use strict';

/* ══════════════════════════════════════════════════════════════
   PRODUCT DATA
══════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    id: 1,
    title: 'Sari en Soie Safran',
    price: '₹ 45 000',
    amount: 45000,
    category: 'femmes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxl2oHEpQs2gKGVXF9CiUSdt2sPsbKZmJAvdMQRTl14cRafq0BfTQl-lCQ3olcxvvoqeaDcgbHKUFXsY_sriugqkDYzR1OXMs65yoHQpOKpmhtHYFt6xikx34mlNuqepeE_h1_94mDGkiElu6beAOG-6yLMBI4id2nD14Jza6OjL4q9eSwbWl8ppp7zQTQDwsWC33hicYEmVSH_IoBd9pqOdCAizW-QEM8Y9ex9FhXIw5-_BktTgPK-yzIY7qMRywVlR00nAXgXoVw',
  },
  {
    id: 2,
    title: 'Lehenga en Velours Émeraude',
    price: '₹ 85 500',
    amount: 85500,
    category: 'femmes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRMwKRtEOxLHW0I13VEus8DNGCuB-8xK2Y38EtHxCQvRGhuNdF7IGtPNJm7-WWBrB56VojYerOjzUCsPIIm1N1mtyfGlT_vsDURx8BOKm8SWYqKSinqqFuY3CgHUlDU3p4ZXT3tegeTdbI4MUItnKVCTFqQesw1B7fbFEDyPy24YETIPA8_xQmSIjZjy0SXv3_VZGHcb4mNPsJ1VDntpqilRmb6Hufz-FZsrzN_LQxBidgcoUP5OgaIMljM6s8ZcTF7Ulv1RRGUCgb',
  },
  {
    id: 3,
    title: 'Sherwani Crème Brodé',
    price: '₹ 72 000',
    amount: 72000,
    category: 'hommes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Hkuc0konS53aDJuuMVkgc94KeAONr6kaeC2W8IwPdKrzxx8Ld_h0MOXQli20SvKs0YFIbkznwDzWA4dPva1DxHJu1pkuOCc5jr6J3SkwZxurT_QDr2w5uugaVMcNGvB55dsuKf6wFlPyL1g4s8Wlr_ennmCFv4AqTYeNpFVe0tnF4S-0RYMnYTja_6YR_gmBveJGjAuQod4JM_E4_Q7tqU_6orLf1o1zmAA9uE3T7JQtib4GoSh1JSyVzgthJ76lG69_oxVC4rE0',
  },
  {
    id: 4,
    title: 'Sherwani Ivoire',
    price: '₹ 85 000',
    amount: 85000,
    category: 'hommes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Hkuc0konS53aDJuuMVkgc94KeAONr6kaeC2W8IwPdKrzxx8Ld_h0MOXQli20SvKs0YFIbkznwDzWA4dPva1DxHJu1pkuOCc5jr6J3SkwZxurT_QDr2w5uugaVMcNGvB55dsuKf6wFlPyL1g4s8Wlr_ennmCFv4AqTYeNpFVe0tnF4S-0RYMnYTja_6YR_gmBveJGjAuQod4JM_E4_Q7tqU_6orLf1o1zmAA9uE3T7JQtib4GoSh1JSyVzgthJ76lG69_oxVC4rE0',
  },
  {
    id: 5,
    title: 'Sari Zari Émeraude',
    price: '₹ 62 000',
    amount: 62000,
    category: 'femmes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuvE0EJwDhtdIfysUHM1107p85ICvyW1e--pHbnBFp8iHrlISO2DjWrPI4Awz9GJJ9gw1bbrDGTxC0-yEL89euJ7_4AHKTK_utD6RiYt6JxSayi8u7RruIpiyhQ6ChHWXJJXEkzXZ1Vqvh2bbMGYnx0GjaXlHy6HHirQEs-Bi_9OQybiGYtV1XyzBRI5i99Ovqb7RKvTXn1WsCSkFTa_TEmq8sifzGAugumzUH5yOrJgWY0cLMiHf-REAU8_w3UVlrXkKl9eLnYWIm',
  },
  {
    id: 6,
    title: 'Parure Kundan',
    price: '₹ 2,10,000',
    amount: 210000,
    category: 'bijoux',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfBrhjepy6ih9wOQbokmSRb-gpM8RV9ea8NnBHPO4ZPCz69avYnoSG3UGUeh0uZcz-rF0RNw3zaNKT9J-1jqcETC0dQVk_zqLufJDO8FPlGKeDED5qn9cdORs_56-OvZ0B-HKgJAlZFYerKk_j597f2etPVWmq-48mry5aXZbHbRS1LOIvpXDRdybPt8Sga5vnncZOBS4WXn8CFb2sh_DhoG7Z_pFnqraaY2JkaUxnY0LAQ7wgx6w3B-012feEYnWCs2qPcrbyJeDF',
  },
];

/* ══════════════════════════════════════════════════════════════
   CART STATE
══════════════════════════════════════════════════════════════ */
let cart = JSON.parse(sessionStorage.getItem('regal-cart') || '[]');

function saveCart() {
  sessionStorage.setItem('regal-cart', JSON.stringify(cart));
}

/* ══════════════════════════════════════════════════════════════
   NAVIGATION (SPA)
══════════════════════════════════════════════════════════════ */
function navigateTo(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  }

  // Update nav link active state
  document.querySelectorAll('.header-nav a').forEach((a) => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile drawer if open
  closeDrawer();
}

/* ══════════════════════════════════════════════════════════════
   MOBILE DRAWER
══════════════════════════════════════════════════════════════ */
const drawer = document.getElementById('mobile-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');

function openDrawer() {
  drawer.classList.add('open');
  drawerBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('hamburger-btn').addEventListener('click', openDrawer);
document.getElementById('drawer-close-btn').addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

/* ══════════════════════════════════════════════════════════════
   CART SIDEBAR
══════════════════════════════════════════════════════════════ */
const cartOverlay = document.getElementById('cart-overlay');
const cartOverlayBg = document.getElementById('cart-overlay-bg');

function openCart() {
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCart();
}

function closeCart() {
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cart-open-btn').addEventListener('click', openCart);
document.getElementById('cart-close-btn').addEventListener('click', closeCart);
cartOverlayBg.addEventListener('click', closeCart);

function addToCart(title, price, amount, image) {
  const existing = cart.find((item) => item.title === title);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ title, price, amount, image, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  showToast(`« ${title} » ajouté au panier`);
  renderCart();
}

function removeFromCart(title) {
  cart = cart.filter((item) => item.title !== title);
  saveCart();
  updateCartBadge();
  renderCart();
}

function changeQty(title, delta) {
  const item = cart.find((i) => i.title === title);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(title);
    return;
  }
  saveCart();
  renderCart();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = total;
  badge.classList.toggle('hidden', total === 0);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const empty = document.getElementById('cart-empty');
  const footer = document.getElementById('cart-footer');
  const totalEl = document.getElementById('cart-total-amount');

  if (cart.length === 0) {
    empty.style.display = '';
    container.innerHTML = '';
    container.appendChild(empty);
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = '';

  // Compute total
  const total = cart.reduce((s, i) => s + i.amount * i.qty, 0);
  totalEl.textContent = '₹ ' + total.toLocaleString('fr-IN');

  // Build items HTML
  const html = cart.map((item) => /* html */`
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${escHtml(item.image)}" alt="${escHtml(item.title)}" />
      </div>
      <div class="cart-item-info">
        <p class="cart-item-title">${escHtml(item.title)}</p>
        <p class="cart-item-price">${escHtml(item.price)}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${escJs(item.title)}', -1)" aria-label="Diminuer la quantité">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${escJs(item.title)}', 1)" aria-label="Augmenter la quantité">+</button>
        </div>
        <p class="cart-item-remove" onclick="removeFromCart('${escJs(item.title)}')">Retirer</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
  container.appendChild(empty); // keep hidden empty node
}

/* ══════════════════════════════════════════════════════════════
   PRODUCT CARD BUILDER
══════════════════════════════════════════════════════════════ */
function buildProductCard(p) {
  return /* html */`
    <div class="product-card" data-category="${escHtml(p.category)}">
      <div class="product-card-img">
        <img src="${escHtml(p.image)}" alt="${escHtml(p.title)}" loading="lazy" />
        <button class="wishlist-btn" aria-label="Ajouter aux favoris"
          onclick="this.classList.toggle('active')">
          <span class="material-icons">favorite_border</span>
        </button>
      </div>
      <div class="product-card-body">
        <p class="product-card-title">${escHtml(p.title)}</p>
        <p class="product-card-price">${escHtml(p.price)}</p>
        <button class="btn-add-cart"
          onclick="addToCart('${escJs(p.title)}', '${escJs(p.price)}', ${p.amount}, '${escJs(p.image)}')">
          Ajouter au Panier
          <span class="material-icons">shopping_cart</span>
        </button>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════════════
   RENDER GRIDS
══════════════════════════════════════════════════════════════ */
function renderHomeGrid() {
  const grid = document.getElementById('home-products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0, 3).map(buildProductCard).join('');
}

function renderCollectionsGrid(filter) {
  const grid = document.getElementById('collections-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  grid.innerHTML = filtered.map(buildProductCard).join('');
}

/* ══════════════════════════════════════════════════════════════
   FILTER TABS (Collections)
══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.filter-tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    renderCollectionsGrid(filter);

    // Show/hide featured product based on filter
    const featured = document.querySelector('.featured-product');
    if (featured) {
      if (filter === 'all' || filter === 'femmes') {
        featured.style.display = '';
      } else {
        featured.style.display = 'none';
      }
    }
  });
});

/* ══════════════════════════════════════════════════════════════
   PAGINATION (decorative, no real pages)
══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.page-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.page-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    window.scrollTo({ top: document.getElementById('page-collections').offsetTop - 80, behavior: 'smooth' });
  });
});

/* ══════════════════════════════════════════════════════════════
   NEWSLETTER FORM
══════════════════════════════════════════════════════════════ */
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (!input.value.trim()) return;
  input.value = '';
  showToast('Merci ! Vous êtes maintenant abonné(e).');
});

/* ══════════════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════════════ */
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const msg = document.getElementById('contact-msg').value.trim();

  if (!name || !email || !msg) {
    showToast('Veuillez remplir tous les champs.', 'warning');
    return;
  }

  e.target.reset();
  const success = document.getElementById('contact-success');
  success.style.display = 'block';
  setTimeout(() => { success.style.display = ''; }, 5000);
  showToast('Message envoyé avec succès !');
});

/* ══════════════════════════════════════════════════════════════
   ORDER DETAIL TOGGLE
══════════════════════════════════════════════════════════════ */
function toggleOrderDetail(id) {
  const box = document.getElementById(id);
  if (!box) return;
  box.classList.toggle('open');
}

/* ══════════════════════════════════════════════════════════════
   TOAST NOTIFICATION
══════════════════════════════════════════════════════════════ */
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  msgEl.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ══════════════════════════════════════════════════════════════
   GLOBAL CLICK ROUTING (data-page attribute)
══════════════════════════════════════════════════════════════ */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-page]');
  if (!el) return;
  e.preventDefault();
  const page = el.dataset.page;
  if (page) navigateTo(page);
});

/* ══════════════════════════════════════════════════════════════
   SECURITY HELPERS (prevent XSS)
══════════════════════════════════════════════════════════════ */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function escJs(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}

/* ══════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════ */
function init() {
  renderHomeGrid();
  renderCollectionsGrid('all');
  updateCartBadge();
}

document.addEventListener('DOMContentLoaded', init);
