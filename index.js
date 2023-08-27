var  coll = document.getElementsByClassName("collapsible");
var i;

for(i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function()  {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight= null;
        }else{
            content.style.maxHeight = content.scrollHeight + "50px";
        }
    });
}

//variables for the product ids
//var laptop1total = getElementById("price1")
//var laptop2total  = getElementById("price2")
//var laptop3total = getElementById("price3")


//const radioButtons = document.getElementsByName("laptop1");
//const totalPriceElement = document.getElementById("price");
//let laptop1 = 0;

//radioButtons.forEach(radioButton)=>{
    //radioButton.addEventListener("change", () => {
        //if(radioButton.checked){
            //constprice = parseFloat(radioButton.getAttribute("data-price"));

            //totalPrice += totalPrice;

            //totalPriceElement.innerHTML = totalPrice

        //}
    //})
//}


//Price section
//let totalPrice= 0;

//let newName = 'Price R: 2000'
//document.getElementById("price").innerHTML = newName
let totalPrice= 0;

function addRam(){
    if(ram1){
        totalPrice =+3000;
    }else if(ram2){
        totalPrice=+ 5000;
    }
    let newName = totalPrice
    document.getElementById("price").innerHTML = newName
}

// laptop 1

let laptop1total= getElementById("price1")
const ram1 = getElementById("ram1").addEventListener("click",addRam())
const ram2 =getElementById("ram2")
const price = parseFloat(radioButton.getAttribute("data-price"));