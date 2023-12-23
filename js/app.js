const container = document.querySelector ('#cart');
const buttons = document.querySelectorAll ('.btn-primary');
const template = document.querySelector ('#template');
const fragment = document.createDocumentFragment();

 //cartArray
const cart = [];

//addToCart-Function
const addToCart = (e) => {

    const product = {
        titulo : e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        amount: 1,
    };

    if (cart.hasOwnProperty(product.titulo)) {
        product.amount = cart[product.titulo].amount + 1;
    };

    cart[product.titulo] = product;

    

   console.log(product);    
};

// buttonsFunctionAdd
buttons.forEach ((item) => {
    item.addEventListener('click', addToCart); 
});