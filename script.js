/* ==================================================
   SALCHIPAPAS EXPRESS SMCSN
================================================== */


/* ==================================================
   CORREO
================================================== */

const EMAIL_DESTINO =
    "tephanyortizCantos68@gmail.com";



/* ==================================================
   PRODUCTOS DEL MENÚ
================================================== */

const products = [

    {
        id: "salchipapa-clasica",

        name: "Salchipapa Clásica",

        category: "salchipapas",

        categoryLabel: "Salchipapas",

        price: 1.50,

        icon: "🍟",

        description:
            "La opción tradicional de Salchipapas Express.",

        ingredients: [

            "Papas fritas",

            "Salchicha",

            "Salsa de tomate",

            "Mayonesa",

            "Mostaza",

            "Sal"

        ]

    },


    {
        id: "salchipapa-especial",

        name: "Salchipapa Especial",

        category: "salchipapas",

        categoryLabel: "Salchipapas",

        price: 2.50,

        icon: "🍟",

        description:
            "Más sabor y variedad para disfrutar.",

        ingredients: [

            "Papas fritas",

            "Salchicha",

            "Queso",

            "Huevo",

            "Salsa de tomate",

            "Mayonesa",

            "Mostaza",

            "Salsa de ajo"

        ]

    },


    {
        id: "salchipapa-full",

        name: "Salchipapa Full",

        category: "salchipapas",

        categoryLabel: "Salchipapas",

        price: 3.50,

        icon: "🔥",

        description:
            "Una combinación completa para los que quieren más.",

        ingredients: [

            "Papas fritas",

            "Salchicha",

            "Queso",

            "Huevo",

            "Tocino",

            "Cebolla",

            "Salsa de tomate",

            "Mayonesa",

            "Mostaza",

            "Salsa de ajo"

        ]

    },


    /* ================= BEBIDAS ================= */

    {
        id: "cola-personal",

        name: "Cola Personal",

        category: "bebidas",

        categoryLabel: "Bebidas",

        price: 0.75,

        icon: "🥤",

        description:
            "Elige el tipo de cola que prefieras.",

        ingredients: [

            "Cola",

            "Hielo opcional"

        ],

        options: [

            "Cola negra",

            "Cola roja",

            "Cola limón"

        ]

    },


    {
        id: "cola-grande",

        name: "Cola Grande",

        category: "bebidas",

        categoryLabel: "Bebidas",

        price: 1.25,

        icon: "🥤",

        description:
            "Presentación grande para acompañar tu pedido.",

        ingredients: [

            "Cola",

            "Hielo opcional"

        ],

        options: [

            "Cola negra",

            "Cola roja",

            "Cola limón"

        ]

    },


    {
        id: "agua",

        name: "Agua",

        category: "bebidas",

        categoryLabel: "Bebidas",

        price: 0.60,

        icon: "💧",

        description:
            "Una opción fresca y sencilla.",

        ingredients: [

            "Agua embotellada"

        ],

        options: [

            "Agua natural",

            "Agua con gas"

        ]

    },


    /* ================= JUGOS ================= */

    {
        id: "jugo",

        name: "Jugo Natural",

        category: "jugos",

        categoryLabel: "Jugos",

        price: 1.25,

        icon: "🧃",

        description:
            "Jugo para complementar tu comida.",

        ingredients: [

            "Fruta",

            "Agua",

            "Hielo",

            "Azúcar opcional"

        ],

        options: [

            "Mora",

            "Maracuyá",

            "Naranjilla",

            "Piña"

        ]

    },


    {
        id: "jugo-leche",

        name: "Jugo con Leche",

        category: "jugos",

        categoryLabel: "Jugos",

        price: 1.75,

        icon: "🥛",

        description:
            "Una alternativa cremosa y refrescante.",

        ingredients: [

            "Fruta",

            "Leche",

            "Hielo",

            "Azúcar opcional"

        ],

        options: [

            "Mora",

            "Frutilla",

            "Banano"

        ]

    },


    /* ================= EXTRAS ================= */

    {
        id: "queso",

        name: "Extra de Queso",

        category: "extras",

        categoryLabel: "Extras",

        price: 0.50,

        icon: "🧀",

        description:
            "Agrega queso a tu pedido.",

        ingredients: [

            "Queso"

        ]

    },


    {
        id: "huevo",

        name: "Extra de Huevo",

        category: "extras",

        categoryLabel: "Extras",

        price: 0.50,

        icon: "🥚",

        description:
            "Un huevo adicional para acompañar.",

        ingredients: [

            "Huevo"

        ]

    },


    {
        id: "tocino",

        name: "Extra de Tocino",

        category: "extras",

        categoryLabel: "Extras",

        price: 0.75,

        icon: "🥓",

        description:
            "Más sabor con tocino.",

        ingredients: [

            "Tocino"

        ]

    },


    {
        id: "salsas",

        name: "Salsas Extra",

        category: "extras",

        categoryLabel: "Extras",

        price: 0.25,

        icon: "🥫",

        description:
            "Salsas para acompañar tu pedido.",

        ingredients: [

            "Salsa de tomate",

            "Mayonesa",

            "Mostaza",

            "Salsa de ajo"

        ],

        options: [

            "Tomate",

            "Mayonesa",

            "Mostaza",

            "Ajo"

        ]

    }

];



/* ==================================================
   VARIABLES
================================================== */

let cart = [];

let selectedProduct = null;

let activeCategory = "todos";



/* ==================================================
   ELEMENTOS HTML
================================================== */

const menuGrid =
    document.getElementById("menuGrid");

const cartItems =
    document.getElementById("cartItems");

const totalElement =
    document.getElementById("total");

const customerName =
    document.getElementById("customerName");

const modal =
    document.getElementById("productModal");



/* ==================================================
   FORMATO DE DINERO
================================================== */

function money(value) {

    return "$" + value.toFixed(2);

}



/* ==================================================
   MOSTRAR MENÚ
================================================== */

function renderMenu() {

    let filteredProducts;

    if (activeCategory === "todos") {

        filteredProducts = products;

    } else {

        filteredProducts =
            products.filter(
                product =>
                    product.category === activeCategory
            );

    }


    menuGrid.innerHTML =
        filteredProducts.map(product => `

            <article
                class="product-card"
                data-id="${product.id}"
            >

                <div class="product-top">

                    <div class="product-icon">

                        ${product.icon}

                    </div>

                    <span class="product-price">

                        ${money(product.price)}

                    </span>

                </div>


                <h3>

                    ${product.name}

                </h3>


                <p>

                    ${product.description}

                </p>


                <span class="see-more">

                    VER INGREDIENTES →

                </span>

            </article>

        `).join("");


    document
        .querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    openModal(
                        card.dataset.id
                    );

                }
            );

        });

}



/* ==================================================
   ABRIR PRODUCTO
================================================== */

function openModal(id) {

    selectedProduct =
        products.find(
            product =>
                product.id === id
        );


    if (!selectedProduct) return;


    document.getElementById(
        "modalIcon"
    ).textContent =
        selectedProduct.icon;


    document.getElementById(
        "modalCategory"
    ).textContent =
        selectedProduct.categoryLabel;


    document.getElementById(
        "modalTitle"
    ).textContent =
        selectedProduct.name;


    document.getElementById(
        "modalDescription"
    ).textContent =
        selectedProduct.description;


    document.getElementById(
        "modalPrice"
    ).textContent =
        money(selectedProduct.price);


    const ingredients =
        document.getElementById(
            "modalIngredients"
        );


    ingredients.innerHTML = "";


    selectedProduct.ingredients
        .forEach(ingredient => {

            ingredients.innerHTML += `

                <li>
                    ${ingredient}
                </li>

            `;

        });


    if (selectedProduct.options) {

        selectedProduct.options
            .forEach(option => {

                ingredients.innerHTML += `

                    <li>
                        Opción: ${option}
                    </li>

                `;

            });

    }


    modal.classList.remove("hidden");

}



/* ==================================================
   CERRAR MODAL
================================================== */

function closeModal() {

    modal.classList.add("hidden");

    selectedProduct = null;

}



/* ==================================================
   AGREGAR AL CARRITO
================================================== */

function addToCart(product) {

    const existing =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    renderCart();

}



/* ==================================================
   MOSTRAR CARRITO
================================================== */

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <span>🛒</span>

                <p>
                    Aún no has agregado productos.
                </p>

                <small>
                    Regresa al menú y selecciona
                    lo que deseas.
                </small>

            </div>

        `;


        totalElement.textContent =
            "$0.00";

        return;

    }


    cartItems.innerHTML =

        cart.map(item => `

            <div class="cart-row">

                <div class="cart-name">

                    <strong>
                        ${item.name}
                    </strong>

                    <small>
                        ${money(item.price)} c/u
                    </small>

                </div>


                <div class="quantity">

                    <button
                        data-action="minus"
                        data-id="${item.id}"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        data-action="plus"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                </div>


                <div class="cart-price">

                    ${money(
                        item.price *
                        item.quantity
                    )}

                </div>


                <button
                    class="remove"
                    data-action="remove"
                    data-id="${item.id}"
                >

                    Eliminar

                </button>

            </div>

        `).join("");


    const total =
        cart.reduce(

            (sum, item) =>

                sum +
                item.price *
                item.quantity,

            0

        );


    totalElement.textContent =
        money(total);


    document
        .querySelectorAll(
            "[data-action]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeQuantity(

                        button.dataset.id,

                        button.dataset.action

                    );

                }
            );

        });

}



/* ==================================================
   CAMBIAR CANTIDAD
================================================== */

function changeQuantity(
    id,
    action
) {

    const item =
        cart.find(
            product =>
                product.id === id
        );


    if (!item) return;


    if (action === "plus") {

        item.quantity++;

    }


    if (action === "minus") {

        item.quantity--;

    }


    if (
        action === "remove" ||
        item.quantity <= 0
    ) {

        cart =
            cart.filter(
                product =>
                    product.id !== id
            );

    }


    renderCart();

}



/* ==================================================
   GENERAR CORREO
================================================== */

function sendEmail() {

    const name =
        customerName.value.trim();


    if (name === "") {

        alert(
            "Por favor, escribe el nombre de la persona."
        );

        customerName.focus();

        return;

    }


    if (cart.length === 0) {

        alert(
            "Agrega al menos un producto."
        );

        return;

    }


    const productsText =
        cart.map(item => {

            const subtotal =
                item.price *
                item.quantity;

            return (

                item.name +
                " x" +
                item.quantity +
                " = " +
                money(subtotal)

            );

        });


    const total =
        cart.reduce(

            (sum, item) =>

                sum +
                item.price *
                item.quantity,

            0

        );


    const subject =
        "Pedido Salchipapas Express - " +
        name;


    const body = `

SALCHIPAPAS EXPRESS SMCSN

--------------------------------

CLIENTE:
${name}

--------------------------------

PEDIDO:

${productsText.join("\n")}

--------------------------------

TOTAL:
${money(total)}

--------------------------------

Gracias por preferir
Salchipapas Express SMCSN.

`;


    const mailto =

        "mailto:" +
        EMAIL_DESTINO +

        "?subject=" +
        encodeURIComponent(subject) +

        "&body=" +
        encodeURIComponent(body);


    window.location.href =
        mailto;

}



/* ==================================================
   CATEGORÍAS
================================================== */

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                activeCategory =
                    button.dataset.category;


                renderMenu();

            }
        );

    });



/* ==================================================
   BOTÓN AGREGAR DEL MODAL
================================================== */

document
    .getElementById("modalAdd")
    .addEventListener(
        "click",
        () => {

            if (selectedProduct) {

                addToCart(
                    selectedProduct
                );

            }


            closeModal();


            document
                .getElementById("pedido")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }
    );



/* ==================================================
   CERRAR MODAL
================================================== */

document
    .querySelectorAll(
        "[data-close-modal]"
    )
    .forEach(element => {

        element.addEventListener(
            "click",
            closeModal
        );

    });



/* ==================================================
   ESC PARA CERRAR
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);



/* ==================================================
   VACIAR PEDIDO
================================================== */

document
    .getElementById("clearBtn")
    .addEventListener(
        "click",
        () => {

            cart = [];

            renderCart();

        }
    );



/* ==================================================
   ENVIAR CORREO
================================================== */

document
    .getElementById("emailBtn")
    .addEventListener(
        "click",
        sendEmail
    );



/* ==================================================
   INICIAR PÁGINA
================================================== */

renderMenu();

renderCart();