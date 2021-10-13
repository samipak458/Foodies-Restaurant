//Cart Working
let cart = document.getElementsByClassName("item");

let productList = [
    {
        name: "Chicken Roll",
        tag: "chickenroll",
        price: 150,
        inCart: 0
    },
    {
        name: "Chicken Mayo Roll",
        tag: "chickenmayoroll",
        price: 180,
        inCart: 0
    },
    {
        name: "Zinger Roll",
        tag: "zingerroll",
        price: 200,
        inCart: 0
    },
    {
        name: "Zinger Mayo Roll",
        tag: "zingermayoroll",
        price: 150,
        inCart: 0
    },
    {
        name: "Beef Roll",
        tag: "beefroll",
        price: 200,
        inCart: 0
    },
    {
        name: "Beef Mayo Roll",
        tag: "beefmayoroll",
        price: 230,
        inCart: 0
    },
    {
        name: "Chicken Burger",
        tag: "chickenburger",
        price: 200,
        inCart: 0
    },
    {
        name: "Beef Burger",
        tag: "beefburger",
        price: 230,
        inCart: 0
    },
    {
        name: "Zinger Burger",
        tag: "zingerburger",
        price: 250,
        inCart: 0
    },
    {
        name: "Mexican Zinger",
        tag: "mexicanburger",
        price: 300,
        inCart: 0
    },
    {
        name: "Chicken Sandwich",
        tag: "chickensandwich",
        price: 200,
        inCart: 0
    },
    {
        name: "Chicken Cheese Sandwich",
        tag: "chickencheesesandwich",
        price: 250,
        inCart: 0
    },
    {
        name: "Vegetabe Sandwich",
        tag: "vegetablesandwich",
        price: 200,
        inCart: 0
    },
    {
        name: "Vegetabe Cheese Sandwich",
        tag: "vegetablecheesesandwich",
        price: 250,
        inCart: 0
    },
    {
        name: "Beef Sandwich",
        tag: "beefsandwich",
        price: 300,
        inCart: 0
    },
    {
        name: "Beef Cheese Sandwich",
        tag: "beefcheesesandwich",
        price: 330,
        inCart: 0
    },
    {
        name: "Cheese Cake (plain)",
        tag: "cheesecakeplain",
        price: 190,
        inCart: 0
    },
    {
        name: "Cheese Cake (topping)",
        tag: "cheesecaketopping",
        price: 220,
        inCart: 0
    },
    {
        name: "Chocolate Layer Cake",
        tag: "chocolatelayercake",
        price: 200,
        inCart: 0
    },
    {
        name: "Chocolate Fudge Cake",
        tag: "chocolatefudgecake",
        price: 195,
        inCart: 0
    },
    {
        name: "Icecream",
        tag: "icecream",
        price: 190,
        inCart: 0
    },
    {
        name: "Kulfi",
        tag: "kulfi",
        price: 150,
        inCart: 0
    },
    {
        name: "Black Coffee",
        tag: "BlackCoffee",
        price: 250,
        inCart: 0
    },
    {
        name: "Cappuccino",
        tag: "Cappuccino",
        price: 250,
        inCart: 0
    },
    {
        name: "Espresso",
        tag: "Espresso",
        price: 250,
        inCart: 0
    },
    {
        name: "Tea",
        tag: "Tea",
        price: 90,
        inCart: 0
    },
    {
        name: "Kashmiri Tea",
        tag: "KashmiriTea",
        price: 150,
        inCart: 0
    },
    {
        name: "Soft Drinks",
        tag: "SoftDrinks",
        price: 80,
        inCart: 0
    },
    {
        name: "Fresh Lime",
        tag: "FreshLime",
        price: 120,
        inCart: 0
    },
    {
        name: "Mineral Water Large",
        tag: "MineralWater",
        price: 90,
        inCart: 0
    },
]

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        UpdateCart(productList[i]);
        totalAmount(productList[i]);
    });
}

function UpdateCart(product) {
    let getCartNumber = localStorage.getItem("CartNumber");
    getCartNumber = parseInt(getCartNumber);

    if (getCartNumber) {
        localStorage.setItem("CartNumber", getCartNumber + 1);
        document.getElementById("items").innerHTML = getCartNumber + 1;
        document.getElementById("item").innerHTML = getCartNumber + 1 + " items added";
    }
    else {
        localStorage.setItem("CartNumber", 1);
        document.getElementById("items").innerHTML = 1;
        document.getElementById("item").innerHTML = 1 + " item added";
    }
    setProduct(product);
    
}

function showCartNumber() {
    let getCartNumber = localStorage.getItem("CartNumber");
    getCartNumber = parseInt(getCartNumber);


    if (getCartNumber) {
        document.getElementById("items").innerHTML = getCartNumber;
        document.getElementById("item").innerHTML = getCartNumber + " items added";
    }
    else {
        document.getElementById("items").innerHTML = 0;
        document.getElementById("item").innerHTML = 0 + " item added";
    }
}
showCartNumber();


function setProduct(product) {

    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems, //items already added in object(cart)
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productInCart", JSON.stringify(cartItems));
    showMessage()
}

function totalAmount(product) {

    let total = localStorage.getItem("Amount");
    total = parseInt(total);

    if (isNaN(total)) {
        total = product.price;
    }
    else {
        total = total + product.price;
    }

    localStorage.setItem("Amount", total);
}


//Displaying Cart on Screen
let displayCart = () => {

    let cartItem = localStorage.getItem("productInCart");
    cartItem = JSON.parse(cartItem);

    let productContainer = document.querySelector(".ProductSpace");

    if (cartItem && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItem).map(items => {

            productContainer.innerHTML += `<tbody class="ProductSpace">
           <tr>
           <td class="names"><span>${items.name}</span></td>
           <td class="quantityy">${items.inCart}</td>
           <td class="costt">Rs ${items.price}.00/-</td>
           <td class="totall">Rs ${items.price * items.inCart}.00/-</td>
           </tr>
           </tbody>`;
        });

        let cartTotal = localStorage.getItem("Amount");
        cartTotal = parseInt(cartTotal);

        let productNumber = localStorage.getItem("CartNumber");
        productNumber = parseInt(productNumber);

        document.querySelector(".total").innerHTML += `
        <div class="cart_item_title">Total items: ${productNumber}</div>
        <div class="cart_item_title">SubTotal: Rs ${cartTotal}.00/-</div>
        <a class="checkout" href="../confirmorder/checkout.html" target="_self">CHECK OUT</a>
        <input type="button" class="clearCart" value="Clear Cart" onclick="window.localStorage.clear();
        window.location.reload();"/>`;
    }
}

displayCart();


function showMessage() {
    let cartItem = localStorage.getItem("productInCart");
    cartItem = JSON.parse(cartItem);

    let message = document.getElementById('message');

    Object.values(cartItem).map(items => {

        message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>x${items.inCart} ${items.name} is added in cart.</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
    });

    setTimeout(() => {
        message.innerHTML = ``;
    }, 3000);
}


//For Button
function arrowOver() {
    document.getElementById("order").innerHTML = "<i class='fas fa-angle-double-right'></i>"
}
function arrowOut() {
    document.getElementById("order").innerHTML = "CHECKOUT"
}





