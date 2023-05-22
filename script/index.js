let display = document.getElementById("screen");
let clear = document.getElementById("clear");
let del = document.getElementById("del");


function calculation(number) {
    //  display.value += number;
     if (number === '.' && display.value.includes('.')) {
         return true
     }

     display.value += number;
}


function answer() {
    display.value = eval(display.value)
}

clear.addEventListener('click', function clear() {
    display.value = "";
});

del.addEventListener('click', function () {
    display.value = display.value.slice(0, -1);
});