let card=document.getElementById("cards");

let cardData=[
    {
        id:"1",
        name:"WoodenTable",
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
        name:"Glass Teapoy",
        img:"./Images/Coffee Tables/Teapoy3.jpg",
        desc:"ELTOP Engineered Wooden Furniture Centre Coffee Table with Glass Top",
        amt:"4,999",

    },
    {
        id:"4",
        name:"WoodenBed",
        img:"./Images/Beds/Bed2.jpg",
        desc:"Wooden cot King Size (78X72 inch) Bed Size Without Storage Teak Finish",
        amt:"48,989",
    },
];

let products = () => {
    return (card.innerHTML = cardData.map((x)=>{
        let {id, name, img,desc, amt} = x;
        return `
        <div id=item-id-${id} class="product">
            <img width="220" src="${img}" alt="WoodenChair">
            <div class="cardData">
               <h2>${name}</h2>
               <p>${desc}</p>
               <div class="price">
                  <h3>₹ ${amt}</h3>
                  <div class="buttons">
                    <i class="bi bi-dash-square"></i>
                    <div id=${id} class="qty">0</div>
                    <i class="bi bi-plus-square"></i>   
                  </div>
               </div>
            </div>
        </div>`;
    }).join(""));
};

products();


