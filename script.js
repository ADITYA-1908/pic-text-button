let btn = document.getElementById('toggle')
let red = document.getElementById('red')
let op = document.getElementById('op')
let ad1 = document.getElementById('ad1')
let ad2 = document.getElementById('ad2')
btn.addEventListener('click', revati)
let check=0;
function revati(e) {
    // red.src = "image/yellow-asth.jpg"
    // document.body.style.background = 'white';
    btn.textContent = "Red one?";
    // ad1.textContent = "so beautiful";
    // ad2.textContent = "so elegent";
    ad1.style.color = 'black';
    ad2.style.color = 'purple';
    ad2.textContent.color = 'yellow';
    // document.body.style.color='yellow'; //for all the cases
    if (check==0) {
        red.src = "image/yellow-asth.jpg"
        btn.textContent = "Red one?" 
        document.body.style.background="white";
        ad1.textContent = "so beautiful";
        ad2.textContent = "so elegent";
        check=1
    }
    else {
        btn.textContent = "Yellow one?"
        red.src = "image/red-one.jpg"
        ad1.textContent = "Hello";
        ad2.textContent = "Revati";
        document.body.style.background="rgb(158, 158, 235)";
        check=0

    }
}