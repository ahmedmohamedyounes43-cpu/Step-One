const menuData = [
    // ميكس السعاده
    { id: 1, name: "ميكس شوكلت", price: 70, category: "happiness", badge: "ميكس السعادة", desc: "باستري كريم + اوريو + مارشميلو + قطع فاكهة" },
    { id: 2, name: "ميكس كارميل", price: 70, category: "happiness", badge: "ميكس السعادة", desc: "باستري كريم + اوريو + مارشميلو + قطع فاكهة" },
    { id: 3, name: "ميكس نوتيلا وايت", price: 75, category: "happiness", badge: "ميكس السعادة", desc: "باستري كريم + اوريو + مارشميلو + قطع فاكهة" },
    { id: 4, name: "ميكس نوتيلا دارك", price: 80, category: "happiness", badge: "ميكس السعادة", desc: "باستري كريم + اوريو + مارشميلو + قطع فاكهة" },
    { id: 5, name: "ميكس لوتس", price: 80, category: "happiness", badge: "ميكس السعادة", desc: "باستري كريم + اوريو + مارشميلو + قطع فاكهة" },
    { id: 6, name: "ميكس كيندر", price: 85, category: "happiness", badge: "ميكس السعادة", desc: "باستري كريم + اوريو + مارشميلو + قطع فاكهة" },

    // ميني بان كيك
    { id: 8, name: "ميني بان كيك شوكلت (12 قطعة)", price: 40, category: "pancake", badge: "ميني بان كيك", desc: "12 قطعة ميني بان كيك مع الشوكلاتة" },
    { id: 10, name: "ميني بان كيك كارميل (12 قطعة)", price: 40, category: "pancake", badge: "ميني بان كيك", desc: "12 قطعة ميني بان كيك بصوص الكارميل" },
    { id: 12, name: "ميني بان كيك نوتيلا وايت (12 قطعة)", price: 50, category: "pancake", badge: "ميني بان كيك", desc: "12 قطعة بصوص النوتيلا البيضاء" },
    { id: 14, name: "ميني بان كيك نوتيلا دارك (12 قطعة)", price: 50, category: "pancake", badge: "ميني بان كيك", desc: "12 قطعة بصوص النوتيلا الدارك" },
    { id: 16, name: "ميني بان كيك لوتس (12 قطعة)", price: 50, category: "pancake", badge: "ميني بان كيك", desc: "12 قطعة ميني بان كيك بصوص اللوتس" },
    { id: 18, name: "ميني بان كيك كيندر (12 قطعة)", price: 55, category: "pancake", badge: "ميني بان كيك", desc: "12 قطعة مع صوص الكيندر الشهي" },

    // فريسكا
    { id: 19, name: "فريسكا نوتيلا بنانا", price: 50, category: "freska", badge: "فريسكا", desc: "مقرمشة مع النوتيلا وحبات الموز" },
    { id: 20, name: "فريسكا شوكلت اوريو", price: 50, category: "freska", badge: "فريسكا", desc: "مقرمشة بالشوكولاتة وقطع الأوريو" },
    { id: 21, name: "فريسكا شوكلت كيك", price: 50, category: "freska", badge: "فريسكا", desc: "مقرمشة بالشوكولاتة وقطع الكيك" },
    { id: 22, name: "فريسكا لوتس كيك", price: 50, category: "freska", badge: "فريسكا", desc: "مقرمشة بصوص اللوتس والكيك" },
    { id: 23, name: "فريسكا كارميل مارشميلو", price: 50, category: "freska", badge: "فريسكا", desc: "مقرمشة بالكارميل وقطع المارشميلو" },

    // ايس كوفي
    { id: 24, name: "ايس لاتية", price: 50, category: "coffee", badge: "ايس كوفي", desc: "لاتيه بارد ومنعش" },
    { id: 25, name: "ايس موكا", price: 55, category: "coffee", badge: "ايس كوفي", desc: "موكا باردة بصوص الشوكلاتة" },
    { id: 26, name: "ايس لاتية كارميل", price: 55, category: "coffee", badge: "ايس كوفي", desc: "لاتيه بارد بنكهة الكارميل" },
    { id: 27, name: "ايس لاتية فراولة", price: 55, category: "coffee", badge: "ايس كوفي", desc: "لاتيه بارد مع صوص الفراولة" },
    { id: 28, name: "ايس لاتية بلو بيري", price: 55, category: "coffee", badge: "ايس كوفي", desc: "لاتيه بارد بنكهة البلو بيري" },
    { id: 29, name: "ايس اسبانش لاتية", price: 60, category: "coffee", badge: "ايس كوفي", desc: "اسبانش لاتية بارد وغني" },

    // ميكس صودا
    { id: 30, name: "جيلي كولا", price: 45, category: "soda", badge: "ميكس صودا", desc: "مشروب صودا بنكهة الجيلي كولا المنعشة" },
    { id: 31, name: "بلو باشون", price: 50, category: "soda", badge: "ميكس صودا", desc: "بلو كرساو + باشون فروت + صودا" },
    { id: 32, name: "بلو بيتش", price: 50, category: "soda", badge: "ميكس صودا", desc: "بلو كرساو + خوخ + صودا" },
    { id: 33, name: "كلاود باشون", price: 50, category: "soda", badge: "ميكس صودا", desc: "فراولة + باشون فروت + صودا" },
    { id: 34, name: "بينك راش", price: 50, category: "soda", badge: "ميكس صودا", desc: "فراولة + بلو بيري + صودا" },
    { id: 35, name: "بيري متت", price: 50, category: "soda", badge: "ميكس صودا", desc: "بلو بيري + نعناع + صودا" },

    // اضافات
    { id: 36, name: "اوريو", price: 10, category: "addons", badge: "إضافات", desc: "إضافة قطع أوريو مطحونة" },
    { id: 37, name: "قطع فاكهة", price: 10, category: "addons", badge: "إضافات", desc: "إضافة قطع فاكهة طازجة" },
    { id: 38, name: "مارشميلو", price: 10, category: "addons", badge: "إضافات", desc: "إضافة قطع مارشميلو طرية" }
];

let cart = [];

function renderMenu(items) {
    const container = document.getElementById('menu-grid');
    container.innerHTML = '';
    items.forEach(item => {
        container.innerHTML += `
            <div class="menu-card">
                <div>
                    <span class="item-badge">${item.badge}</span>
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-desc">${item.desc}</p>
                </div>
                <div class="card-footer">
                    <span class="price">${item.price} ج.م</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">+ إضافة</button>
                </div>
            </div>
        `;
    });
}

function filterMenu(category, event) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if(event) event.target.classList.add('active');
    
    if (category === 'all') {
        renderMenu(menuData);
    } else {
        renderMenu(menuData.filter(i => i.category === category));
    }
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg" style="text-align:center; color:#64748b; margin-top:20px;">السلة فارغة حالياً</p>';
        document.getElementById('cart-total').innerText = '0 ج.م';
        return;
    }

    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item-row">
                <div>
                    <strong style="display:block; color:#0c4a6e;">${item.name}</strong>
                    <span style="font-size:12px; color:#0284c7;">${item.price} ج.م</span>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ef4444; cursor:pointer; font-weight:bold;">حذف</button>
            </div>
        `;
    });

    document.getElementById('cart-total').innerText = total + ' ج.م';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('open');
}

function sendOrderWhatsApp() {
    if (cart.length === 0) return alert('برجاء إضافة منتجات للسلة أولاً!');
    let text = "مرحباً Step One 👋، أريد طلب الآتي:\n\n";
    let total = 0;
    cart.forEach((item, i) => {
        text += `${i+1}. ${item.name} - (${item.price} ج.م)\n`;
        total += item.price;
    });
    text += `\n💵 *الإجمالي الكلي:* ${total} ج.م`;
    
    window.open(`https://wa.me/201043084581?text=${encodeURIComponent(text)}`, '_blank');
}

// التشغيل الأولي
renderMenu(menuData);