//Event Handler
var form = document.querySelector("#addInfo");
var p = document.querySelector("#warning");

form.onsubmit=()=>{
    p.innerText = '';
    var name = document.querySelector('#name').value;
    var password = document.querySelector('#password').value;
    if(name.length<5){
        p.innerHTML = `Username must more than 5 words. <br>`;
    }
    if(password.length<8){
        p.innerHTML += `Password must more than 8 words.`
    }      
    p.style.color = "red";
    document.querySelector('#name').value = null;
    document.querySelector('#password').value = null;
    return false;
}

//Event Listener

var form = document.querySelector("#addInfo");
var p = document.querySelector("#warning");

form.addEventListener("submit",function(e){
    p.innerText = '';
    var name = document.querySelector('#name').value;
    var password = document.querySelector('#password').value;
    if(name.length<5){
        p.innerHTML = `Username must more than 5 words. <br>`;
    }
    if(password.length<8){
        p.innerHTML += `Password must more than 8 words.`
    }      
    p.style.color = "red";
    document.querySelector('#name').value = null;
    document.querySelector('#password').value = null;
    e.preventDefault();
});
