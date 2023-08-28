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

function updateTotalPrice(){
    const elementsWithDataPrice  = document.querySelectorAll('[data-price]');
    let totalPrice = 0;

    elementsWithDataPrice.forEach(element => {
        if ((element.type ==='radio') && element.checked){
            const price = parseFloat(element.getAttribute('data-price'));

            totalPrice += price;
        }
    });

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerHTML = 'R: ' + totalPrice;

}

const radioButtons = document.querySelectorAll('[type="radio"]');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', updateTotalPrice);
})

updateTotalPrice();

function resetSelections(){
    const elementsWithDataPrice = document.querySelectorAll('[data-price]');

    elementsWithDataPrice.forEach(element => {
        if (element.type === 'radio'){
            element.checked = false;
        }
    });

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerHTML =  'R: 0'

}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetSelections);


