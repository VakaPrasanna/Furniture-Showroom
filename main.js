let card=document.getElementById("cards");

let cardData=[
    {
        id:"1",
        name:"WoodenChair",
        img:"./Images/Chairs/Chair1.jpeg",
        desc:"Decorhand Rosewood (Sheesham) Wood Rocking Chair For Living Room",
        amt:"9,999",
    },
    {   
        id:"2",
        name:"Blue Sofaset",
        img:"./Images/Sofa/sofaset4.jpg",
        desc:"Homeify Salena 5 Seater with 4-Puffy Convertible Fabric Sofa Set",
        amt:"39,799",
    },
    { 
        id:"3",
        name:"White CoffeeTable",
        img:"./Images/Coffee Tables/Teapoy3.jpg",
        desc:"ELTOP Engineered Wooden Furniture Centre Coffee Table with Glass Top",
        amt:"4,999",

    },
    {
        id:"4",
        name:"King-Size Bed",
        img:"./Images/Beds/Bed2.jpg",
        desc:"Wooden cot King Size (78X72 inch) Bed Size Without Storage Teak Finish",
        amt:"48,989",
    },
];

let stores = JSON.parse(localStorage.getItem("Data")) || [];//Getting data from LocalStorage 

let products = () => {
    return (card.innerHTML = cardData.map((x)=>{
        let {id, name, img,desc, amt} = x;
        let SearchedId = stores.find((x) => x.id === id) || []; //  if we find an id then store it or else show empty.
        return `
        <div id=item-id-${id} class="product">
            <img width="220" src="${img}" alt="WoodenChair">
            <div class="cardData">
               <h2>${name}</h2>
               <p>${desc}</p>
               <div class="price">
                  <h3>₹ ${amt}</h3>
                  <div class="buttons">
                    <i onclick="decMinus(${id})" class="bi bi-dash-square"></i>
                    <div id=${id} class="qty">
                    ${SearchedId.qty === undefined? 0: SearchedId.qty}
                    </div>
                    <i onclick="incPlus(${id})" class="bi bi-plus-square"></i>   
                  </div>
               </div>
            </div>
        </div>`;
    }).join(""));
};

products();

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
    localStorage.setItem("Data", JSON.stringify(stores));// Setting id and qty values inside LocalStorage ( Console => Applications => LocalStorage)
    
    updateqty(itemSelected);
};

let decMinus = (id)=> {
    let itemSelected = id;
    let SearchedId = stores.find((x)=> x.id === itemSelected);//Finds the item id in stores, if selectedId is not there: then it adds item to "stores" else just ++qty of that selected item.

    if(SearchedId.qty === 0) return;// It stops decrementing at the moment qty hits 0 (-- Process stops).
    else{
        SearchedId.qty-=1;
    }

    localStorage.setItem("Data", JSON.stringify(stores));

    updateqty(itemSelected);
};

let updateqty = (id) => {
    let SearchedId = stores.find((x)=> x.id === id);
    console.log(SearchedId.qty);
    document.getElementById(id).innerHTML = SearchedId.qty;
    summation();
};

let summation = () =>{
    let cartsum = document.getElementById("cartPrice");
    cartsum.innerHTML = stores.map((x)=>x.qty).reduce((x,y)=>x+y,0); // X and y used for summation of values.
};
summation();