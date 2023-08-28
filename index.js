//dropdown 
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

//Price 
const ram1 = 3000;
const  ram2 = 5000;
let totalPrice= 0;

const ramtot = ram1 +ram2
let newName = 'Price R: ' + ramtot;
document.getElementById("price").innerHTML = newName

//let laptop1total= getElementById("price1")
//const ram1 = getElementById("ram1").addEventListener("click",addRam())
//const ram2 =getElementById("ram2")
//const price = parseFloat(radioButton.getAttribute("data-price"));