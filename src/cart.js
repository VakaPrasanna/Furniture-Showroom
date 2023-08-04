let stores = JSON.parse(localStorage.getItem("Data")) || [];
let bill = document.getElementById('bill');
let spcart = document.getElementById('shoppingcart');
console.log(stores);

let summation = () =>{
    let cartsum = document.getElementById("cartPrice");
    cartsum.innerHTML = stores.map((x)=>x.qty).reduce((x,y)=>x+y,0); // X and y used for summation of values.
};
summation();

let purchaseditems = () => {
    if(stores.length !== 0){
    }
    else{
        spcart.innerHTML =``;
        bill.innerHTML = `
         <h1>Cart is Empty</h1>
         <a href="index.html">
            <button class="Homebtn">ADD ITEMS</button>
         </a>
         `
    }
};
purchaseditems();