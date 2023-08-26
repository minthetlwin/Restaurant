const openCart = document.querySelector('.openCart');
const closeCart = document.querySelector('.closeCard');
const foodList = document.querySelector('.food-list');
const list=document.querySelector('.order-list-body');
const total = document.querySelector('.total-amount');
const quantity = document.querySelector('.quantity');
const cart=document.querySelector('.cart');

let menuItems = [
    {
        imageSrc: "pngegg.png",
        name: "Food Item 1",
        price: 10,
        id: 1
    },
    {
        imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
        name: "Food Item 1",
        price: 20,
        id: 2
    },
    {
        imageSrc: "pngegg (3).png",
        name: "Food Item 1",
        price: 30,
        id: 3
    },
    {
        imageSrc: "pngegg.png",
        name: "Food Item 1",
        price: 10,
        id: 1
    },
    {
        imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
        name: "Food Item 1",
        price: 20,
        id: 2
    },
    {
        imageSrc: "pngegg (3).png",
        name: "Food Item 1",
        price: 30,
        id: 3
    },
    {
        imageSrc: "pngegg.png",
        name: "Food Item 1",
        price: 10,
        id: 1
    },
    {
        imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
        name: "Food Item 1",
        price: 20,
        id: 2
    },
    {
        imageSrc: "pngegg (3).png",
        name: "Food Item 1",
        price: 30,
        id: 3
    },
    // Add more items as needed
];

food.addEventListener('click', () => {
    menuItems = [
        {
            imageSrc: "pngegg.png",
            name: "Food Item 1",
            price: 10,
            id: 1
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Food Item 1",
            price: 20,
            id: 2
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Food Item 1",
            price: 30,
            id: 3
        },
        {
            imageSrc: "pngegg.png",
            name: "Food Item 1",
            price: 10,
            id: 1
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Food Item 1",
            price: 20,
            id: 2
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Food Item 1",
            price: 30,
            id: 3
        },
        {
            imageSrc: "pngegg.png",
            name: "Food Item 1",
            price: 10,
            id: 1
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Food Item 1",
            price: 20,
            id: 2
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Food Item 1",
            price: 30,
            id: 3
        },

        // Add more items as needed
    ];
    generateMenu();
});

snack.addEventListener('click', () => {
    menuItems = [
        {
            imageSrc: "pngegg.png",
            name: "Snack Item 1",
            price: 10,
            id: 4
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Snack Item 1",
            price: 20,
            id: 5
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Snack Item 1",
            price: 30,
            id: 6
        },
        {
            imageSrc: "pngegg.png",
            name: "Snack Item 1",
            price: 10,
            id: 4
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Snack Item 1",
            price: 20,
            id: 5
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Snack Item 1",
            price: 30,
            id: 6
        },
        {
            imageSrc: "pngegg.png",
            name: "Snack Item 1",
            price: 10,
            id: 4
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Snack Item 1",
            price: 20,
            id: 5
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Snack Item 1",
            price: 30,
            id: 6
        },
        // Add more items as needed
    ];
    generateMenu();
});

drink.addEventListener('click', () => {
    menuItems = [
        {
            imageSrc: "pngegg.png",
            name: "Drink Item 1",
            price: 10,
            id: 7
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Drink Item 1",
            price: 20,
            id: 8
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Drink Item 1",
            price: 30,
            id: 9
        },
        {
            imageSrc: "pngegg.png",
            name: "Drink Item 1",
            price: 10,
            id: 7
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Drink Item 1",
            price: 20,
            id: 8
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Drink Item 1",
            price: 30,
            id: 9
        },
        {
            imageSrc: "pngegg.png",
            name: "Drink Item 1",
            price: 10,
            id: 7
        },
        {
            imageSrc: "Lovepik_com-401506378-spicy-hot-food.png",
            name: "Drink Item 1",
            price: 20,
            id: 8
        },
        {
            imageSrc: "pngegg (3).png",
            name: "Drink Item 1",
            price: 30,
            id: 9
        },
        // Add more items as needed
    ];
    generateMenu();
});


const listCards = [];

function generateMenu() {
    foodList.innerHTML='';
    menuItems.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('food-container');
        newDiv.innerHTML = `
            <div class="food-list-item">
                <div class="food-image-container"><img class="food-image" src="photo/${value.imageSrc}" alt=""></div>
                <button class="cart" onclick="addToCart(${key})"><i class="bi bi-cart-fill"></i></button>
                <div class="food-list-item">
                    <div class="food-item-name">${value.name}</div>
                    <div class="food-item-price">${value.price} ks</div>
                </div>
            </div>
        `;
        foodList.appendChild(newDiv);
    })
}

generateMenu();

const checkNull=[];

function addToCart(key){
    openCart.style.visibility="visible";
    
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(menuItems[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    checkOpenCartVisibility(key);
}



function reloadCard(){
    list.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let createDiv = document.createElement('div');
            createDiv.classList.add('order-item');

            let newDiv = document.createElement('table');
            
            newDiv.innerHTML = `
            
            <tr>
            
            <td><img src="photo/${value.imageSrc}" alt=""> </td>
            <td><span class="name">${value.name}</span></td>
            <td><span class="price">${value.price}</span> Kyats</td>
            <td> <button class="minus" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button></td>
            <td><span class="count">${value.quantity}</span></td>
            <td><button class="plus" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button></td>
            <td><button class="close" onclick="deleteItem(${key})"><i class="bi bi-trash3"></i></button></td>
        </tr>
        `;
                createDiv.appendChild(newDiv);
                list.appendChild(createDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

    
}

function deleteItem(key) {
    delete listCards[key];
    reloadCard();
    checkOpenCartVisibility(key);
}

function checkOpenCartVisibility(key) {
    const anyItemsLeft = listCards.some(item => item !== null);
    if (anyItemsLeft) {
        openCart.style.visibility = "visible";
    } else {
        openCart.style.visibility = "hidden";
    }
}


function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * menuItems[key].price;
    }
    reloadCard();
    checkOpenCartVisibility(key);
}

$(document).ready(function() {
    $('.openCart').click(function() {
        
      $('.food-list').addClass("active2");
      $('.menu-name-nav').addClass("active2");
      $('.navbar').addClass("active2");
      $('.overlay-body').addClass("active");
    });
  });

  $(document).ready(function() {
    $('.closeCard').click(function() {
        
      $('.food-list').removeClass("active2");
      $('.menu-name-nav').removeClass("active2");
      $('.navbar').removeClass("active2");
      $('.overlay-body').removeClass("active");
    });
  });

   let confirmButton=document.querySelector('.confirm');
   let emailForm=document.getElementById('emailForm');

   $(document).ready(function() {
    $(confirmButton).click(function() {
        
      $(emailForm).removeClass("active3");
      $('.overlay-body').removeClass("active");
      retrieveItemDataFromList();
    });
  });

  

//   function retrieveItemDataFromList() {
//     let itemDataArray = [];
//     // Loop through the order-item elements in the list
//     const orderItems = document.querySelectorAll('.order-item');
//     orderItems.forEach((orderItem) => {
//         const itemName = orderItem.querySelector('.name').textContent;
//         const itemPrice = parseFloat(orderItem.querySelector('.price').textContent);
//         const itemQuantity = parseInt(orderItem.querySelector('.count').textContent);

//         // Add item data to the array
//         itemDataArray.push({
//             name: itemName,
//             price: itemPrice,
//             quantity: itemQuantity,
//         });
//     });

//     const table = document.getElementById('itemTable');
//     itemDataArray.forEach((itemData) => {
//         const newRow = table.insertRow();
//         const nameCell = newRow.insertCell(0);
//         const priceCell = newRow.insertCell(1);
//         const quantityCell = newRow.insertCell(2);
        
//         nameCell.textContent = itemData.name;
//         priceCell.textContent = itemData.price;
//         quantityCell.textContent = itemData.quantity;
//     });
// }


// function sendEmail() {
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;

//     const itemTable = document.getElementById('itemTable').outerHTML;
    
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "minnthetlwinmtll31@gmail.com",
//         Password: "DB0B34D37B4A3E5F69FA66346718E24758C0",
//         To: email,
//         From: "minnthetlwinmtll31@gmail.com",
//         Subject: "Harmony Restaurant Voucher",
//         Body: `
//             <html>
//                 <h2>Harmony Restaurant,</h2>
//                 <p>Dear ${username},</p>
//                 ${itemTable}
//                 <p>Thanks for your choice.</p>
//             </html>
//         `
//     }).then(message => alert(message));
// };

// function sendEmail() {
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
    
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "minnthetlwinmtll31@gmail.com",
//         Password: "DB0B34D37B4A3E5F69FA66346718E24758C0",
//         To: email,
//         From: "minnthetlwinmtll31@gmail.com",
//         Subject: "Test email with Item Data",
//         Body: `<html><h2>Hello</h2></html>`
//     }).then(message => alert(message));
// }


function retrieveItemDataFromList() {
    let itemDataArray = [];
    // Loop through the order-item elements in the list
    const orderItems = document.querySelectorAll('.order-item');
    orderItems.forEach((orderItem) => {
        const itemName = orderItem.querySelector('.name').textContent;
        const itemPrice = parseFloat(orderItem.querySelector('.price').textContent);
        const itemQuantity = parseInt(orderItem.querySelector('.count').textContent);

        // Add item data to the array
        itemDataArray.push({
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity,
        });
    });

    console.log('Retrieved item data array:', itemDataArray);

    const table = document.getElementById('itemTable');
    itemDataArray.forEach((itemData) => {
        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const priceCell = newRow.insertCell(1);
        const quantityCell = newRow.insertCell(2);
        
        nameCell.textContent = itemData.name;
        priceCell.textContent = itemData.price;
        quantityCell.textContent = itemData.quantity;
    });
}

function sendEmail() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const itemTable = document.getElementById('itemTable').outerHTML; // Get the HTML of itemTable
    
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "minnthetlwinmtll31@gmail.com",
        Password: "05583D2BC09EF22D061147266021F0A810AF",
        To: email,
        From: "minnthetlwinmtll31@gmail.com",
        Subject: "Harmony Restaurant Voucher",
        Body: `
            <html>
                <h2>Harmony Restaurant,</h2>
                <p>Dear ${username},</p>
                ${itemTable}
                <p>Thanks for your choice.</p>
            </html>
        `
    }).then(message => alert(message));
};
