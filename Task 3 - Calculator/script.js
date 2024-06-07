const display = document.querySelector(".display-screen");

function displayItem(input){
    display.value += input;
}

function displayClear() {
    display.value = "";
}

function deleteItem(){
    display.value = display.value.toString().slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "";
    }
}