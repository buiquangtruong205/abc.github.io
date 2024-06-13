document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('.input');
    input.addEventListener('keyup', function() {
        const searchKeyword = input.value.toLowerCase();
        const a1Elements = document.querySelectorAll('.a1');
        
        a1Elements.forEach(function(element) {
            const productName = element.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchKeyword)) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    });
});

function luachon() {
    var selectBox = document.querySelector('select');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    var sections = ['aothun-sanpham', 'aovest-sanpham', 'aokhoac-sanpham', 'quanaoda-sanpham'];
    var titles = ['tieude-aothun', 'tieude-aovest', 'tieude-aokhoac', 'tieude-quanaoda'];
    
    if (selectedValue === 'Tất cả') {
        document.getElementById('tatca').style.display = 'block';
        sections.forEach(function(id) {
            document.getElementById(id).style.display = 'block';
        });
        titles.forEach(function(id) {
            document.getElementById(id).style.display = 'block';
        });
    } else {
        document.getElementById('tatca').style.display = 'block';
        sections.forEach(function(id) {
            document.getElementById(id).style.display = 'none';
        });
        titles.forEach(function(id) {
            document.getElementById(id).style.display = 'none';
        });
        if (selectedValue === 'Áo thun') {
            document.getElementById('aothun-sanpham').style.display = 'flex';
            document.getElementById('tieude-aothun').style.display = 'block';
        } else if (selectedValue === 'Áo Vest') {
            document.getElementById('aovest-sanpham').style.display = 'flex';
            document.getElementById('tieude-aovest').style.display = 'block';
        } else if (selectedValue === 'Áo khoác') {
            document.getElementById('aokhoac-sanpham').style.display = 'flex';
            document.getElementById('tieude-aokhoac').style.display = 'block';
        } else if (selectedValue === 'Quần áo da') {
            document.getElementById('quanaoda-sanpham').style.display = 'flex';
            document.getElementById('tieude-quanaoda').style.display = 'block';
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCartCount() {
        const cartCount = document.getElementById("cart-count");
        cartCount.textContent = `(${cartItems.length})`;
    }
    function addToCart(name, price) {
        const newItem = { name: name, price: price };

        cartItems.push(newItem);
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        updateCartCount();
    }

    const addToCartButtons = document.querySelectorAll('button[onclick^="addToCart"]');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productInfo = this.getAttribute('onclick').match(/addToCart\('(.+)',\s*(\d+)\)/);
            const productName = productInfo[1];
            const productPrice = parseInt(productInfo[2], 10);
            addToCart(productName, productPrice);
        });
    });
    updateCartCount();
});

function mua() {
    const notification = document.createElement('div');
    notification.className = 'purchase-notification';
    notification.textContent = 'Bạn đã mua thành công!';

    document.body.appendChild(notification);

    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule(`
        .purchase-notification {
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            font-size: 18px;
            border-radius: 5px 5px 0 0;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
        }
    `);

    setTimeout(() => {
        notification.remove();
    }, 1000);
}function mua() {
    const notification = document.createElement('div');
    notification.className = 'purchase-notification';
    notification.textContent = 'Bạn đã mua thành công!';

    document.body.appendChild(notification);

    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule(`
        .purchase-notification {
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            font-size: 18px;
            border-radius: 0 0 5px 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }
    `);

    setTimeout(() => {
        notification.remove();
    }, 1000);
}