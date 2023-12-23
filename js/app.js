const contenedor = document.querySelector ('#cart');
const botones = document.querySelectorAll ('.btn-primary');
const template = document.querySelector ('#template');
const fragment = document.createDocumentFragment();

const cart = [];

const agregarCart = (e) => {

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


botones.forEach ((item) => {
    item.addEventListener('click', agregarCart); 
});