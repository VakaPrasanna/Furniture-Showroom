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
          let search = cardData.find((y) => y.id == id) || [];
          return `
              <div class="end-products">
                <img width="150" src=${search.img} alt="" />

                <div class="end-products-details">

                  <div class="ItemName-price-bill" >
                    <h3 class="Item-amt">
                      <p>${search.name}</p>
                      <p class="Amt-of-each-item">₹ ${search.amt}</p>
                    </h3>
                    <i class="bi bi-x-circle-fill"></i>
                  </div>

                  <div class="buttons">
                    <i onclick="decMinus(${id})" class="bi bi-dash-square"></i>
                    <div id=${id} class="qty">${qty||0}</div>
                    <i onclick="incPlus(${id})" class="bi bi-plus-square"></i>   
                  </div>

                  <h3>₹ ${qty}</h3>

                </div>
                
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

let incPlus = (id) => {
  let itemSelected = id;
  let SearchedId = stores.find((x)=> x.id === itemSelected);//Finds the item id in stores, if selectedId is not there: then it adds item to "stores" else just ++qty of that selected item.

  if(SearchedId === undefined){
      stores.push({
          id:itemSelected,
          qty:1,
      });
  }
  else{
      SearchedId.qty+=1;
  }
  
  updateqty(itemSelected);

  localStorage.setItem("Data", JSON.stringify(stores));// Setting id and qty values inside LocalStorage ( Console => Applications => LocalStorage)
};

let decMinus = (id)=> {
  let itemSelected = id;
  let SearchedId = stores.find((x)=> x.id === itemSelected);//Finds the item id in stores, if selectedId is not there: then it adds item to "stores" else just ++qty of that selected item.
  
  if (SearchedId === undefined) return
  else if(SearchedId.qty === 0) return;// It stops decrementing at the moment qty hits 0 (-- Process stops).
  else{
      SearchedId.qty-=1;
  }
  updateqty(itemSelected);
  stores = stores.filter((i)=> i.qty !== 0);// if zero it runs, then below line re-renders the cards.
  purchaseditems(); // If zero items on any card of final item.
  localStorage.setItem("Data", JSON.stringify(stores));
};

let updateqty = (id) => {
  let SearchedId = stores.find((x)=> x.id === id);
  console.log(SearchedId.qty);
  document.getElementById(id).innerHTML = SearchedId.qty;
  summation();
};