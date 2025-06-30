document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product1", price: 29.99 },
        { id: 2, name: "Product2", price: 19.99 },
        { id: 3, name: "Product3", price: 59.999 },
    ];
    const cart = [];

    // Grabbing elements
    const productlist = document.getElementById("product-list");
    const cartitems = document.getElementById("cart-items");
    const emptycart = document.getElementById("empty-cart");
    const carttotalmessage = document.getElementById("cart-total");
    const totalpricemessage = document.getElementById("total-price");
    const checkoutmessage = document.getElementById("checkout-btn");
    const removemsg=document.getElementById("remove-btn");

    // Task starts here
    products.forEach((product) => {
        const productdiv = document.createElement("div");//adding div element
        productdiv.classList.add("product");
        //arial tag data-id to match unique id
        productdiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to cart</button> 
        `;
        productlist.appendChild(productdiv);
    });
    // Handling only the clicks on the button to e considered.
    productlist.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productid = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productid);//only product id matches the triggered button id
            addtocart(product);
            
        }
    });
    function addtocart(product){
        cart.push(product);
        rendercart();
        save();
    }
    function rendercart(){
        cartitems.innerHTML="";//if cartitems being added to cart then cart is empty msg disappears as innerhtml is empty.
        let totalprice=0;
        if(cart.length>0){
            emptycart.classList.add("hidden");
            carttotalmessage.classList.remove("hidden");

            cart.forEach((item,index)=>{
                totalprice+=item.price;
                const cartitem=document.createElement('div');
                cartitem.innerHTML=`
                ${item.name}-$${item.price.toFixed(2)}
                <button class="remove-item" data-index="${index}">Remove</button>
                `
                //adding inidividual cart items
                cartitems.appendChild(cartitem);
                //adding totalprice display
                totalpricemessage.textContent=`${totalprice.toFixed(2)}`
            })
        }
        else{
            emptycart.classList.remove("hidden");
            // after checkout hit the total should be 0.00
            totalpricemessage.textContent=`$${0.00}`
        }
    }
    checkoutmessage.addEventListener('click',()=>{
        cart.length=0;
        alert("Checkout Successfully!!");
        rendercart();
        save();
    })
    //remove button rendering 
    cartitems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            if (!isNaN(index)) {
                cart.splice(index, 1); // remove only one item from cart array
                rendercart(); // re-render UI
                save();
            }
        }
    });
    // Local storage
    function save() {
        localStorage.setItem("products", JSON.stringify(products));
        localStorage.setItem("cart", JSON.stringify(cart));
    }


});

