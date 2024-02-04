let cont = document.getElementById("container");

// Api Fetching

let ApiFetch = async () => {
    try{
    let result = await fetch('https://fakestoreapi.com/products');
    let products = await result.json();
    displayProduct(products);
    console.log(products);
}catch(error) {
       console.error(error);
}
}


// let displayApi = (products) => {

//     for(let i = 0; i < products.length; i++){

//     let card = document.createElement("div");
//     card.setAttribute("class", "card-product");

//     let img = document.createElement("img");
//     img.src = products[i].image;
    
//     let title = document.createElement("p");
//     title.innerHTML = products[i].title;

//     let price = document.createElement("h3");
//     price.innerHTML =` Rs. ${products[i].price}`;

//     let desc = document.createElement("p");
//     desc.innerHTML = products[i].description;
    
//     card.append(img, title, price, desc);
//     cont.append(card);

// }
// }

let cardItems = [];

function displayProduct(products) {
products.forEach((element) => {

    let card = document.createElement("div");
    card.setAttribute("class", "card-product");

    let img = document.createElement("img");
    img.src = element.image;

    let name = document.createElement("h3");
    name.innerHTML = element.title;

    let price =  document.createElement("h3");
    price.innerHTML = element.price;

    // let desc = document.createElement("p");
    // desc.innerHTML = element.desc;
    let cardBtn = document.createElement("button")
    cardBtn.innerHTML = "Add to card";


    // cardBtn.addEventListener("click", () => {
    //     localStorage.setItem("product", JSON.stringify(element));
    //     window.location.href="/details.html";
    // });

    cardBtn.addEventListener("click", () => {
        if(checkCardItems(element.id)){
            alert("Item already exist in cart");
        }
        else{
            cardItems.push(element);
            localStorage.setItem("cardItems", JSON.stringify(cardItems));
        }
    })
   
   card.append(img, name, price, cardBtn);
   cont.append(card);
});  

}


function checkCardItems(id) {
    for (let i = 0; i < cardItems.length; i++) {
      if (cardItems[i].id === id) {
        console.log("Id is: ",cardItems[i].id)
        return true;
      }
    }
    return false;
  }

  

// let checkCardItems = (id) => {
//     cardItems.forEach((val) => {
        
//         if(val.id === id){
//             console.log("Id is: ",val.id);
//             return true;
//         }
//     })

//     return false;
// }

ApiFetch();




// Doubt1 : bina try or catch ke hum api ko nhi dikha sakte hai kya
// Doubt2 : can write details inside main.js file
