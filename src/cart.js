let bill = document.getElementById('bill');
let spcart = document.getElementById('shoppingcart');

let stores = JSON.parse(localStorage.getItem("Data")) || [];

let summation = () =>{
    let cartsum = document.getElementById("cartPrice");
    cartsum.innerHTML = stores.map((x)=>x.qty).reduce((x,y)=>x+y,0); // X and y used for summation of values.
};
summation();

let purchaseditems = () => {
    if (stores.length !== 0) {
      return (spcart.innerHTML = stores.map((x) => {
          console.log(x);
          let { id, qty } = x;
          let search = cardData.find((y) =>y.id === id) || [];
          return `
              <div class="end-products">
                Good
                <img src=${search.img} alt=""/>
              </div>`;
        })
        .join(""));
    } else {
      spcart.innerHTML = ``;
      bill.innerHTML = `
         <h1>Cart is Empty</h1>
         <a href="index.html">
            <button class="Homebtn">ADD ITEMS</button>
         </a>
         `;
    }
  };
purchaseditems();