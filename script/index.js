let display = document.getElementById("screen");

function calculation(number) {
    display.value += number;
};


function answer() {
    display.value = eval(display.value)
}

