/*console.log('hello world');
let a = 3;
let b = 4;
let c = a + b;
console.log(c)

c = 'werty';
console.log(c)*/

const button = document.querySelector('.button')
console.log(button.closest('button'))
/*button.style.background = 'red'
button.style.border = 'none'
button.style.color = 'white'
button.style.padding = '10px 20px'
button.style.borderRadius = '30px'*/

function toggleClass() {
    //button.classList.add("active")
    //button.classList.remove("butto")
    button.classList.toggle('active')
    changeText()
}

function changeText() {
    console.log(button.closest('active'))
    if(button.closest('active')) {
        
        button.innerText = "close"
    } else {
        button.innerText = "open"
    }

}

button.addEventListener("click", toggleClass)

