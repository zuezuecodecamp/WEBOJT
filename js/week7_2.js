window.addEventListener("load",()=>{
    document.querySelector("#username").focus()
});
var form_login = document.querySelector("#form_login");
var username = document.querySelector('#username').value;
var password = document.querySelector('#password').value;
//form_login.addEventListener("submit",(e)=>{...});
form_login.addEventListener("submit",function(e){
    
    if(username.length<5){
        document.querySelector('#checkName').innerHTML="Username must be more than 5";
    }
    if(password.length<8){
        document.querySelector('#checkPassword').innerHTML="Username must be more than 5";
    } 
    e.preventDefault();//prevent to call another page after submit
});

var reset = document.querySelector('#reset');
reset.addEventListener("click",(e)=>{
    var username = document.querySelector('#username').value = '';
    var password = document.querySelector('#password').value = '';   
    document.querySelector('#checkName').innerHTML=" ";
    document.querySelector('#checkPassword').innerHTML=" ";
    e.preventDefault();
});

var username = document.querySelector('#username');
username.addEventListener("focus",(e)=>{
    document.querySelector("#checkName").innerHTML="Please add username of at least 5 characters";
});

username.addEventListener("blur",(e)=>{
    document.querySelector("#checkName").innerHTML="You must enter username";
});

var password = document.querySelector('#password');
password.addEventListener("focus",(e)=>{
    document.querySelector("#checkPassword").innerHTML="Please add password of at least 5 characters";
});

password.addEventListener("blur",(e)=>{
    document.querySelector("#checkPassword").innerHTML="You must enter password";
});

// For Radio Button
//forEach as arrow key function
var radios = document.querySelectorAll("input[type=radio][name=ptype]");
radios.forEach(radio=>radio.addEventListener("change",function(){
emp_div = document.getElementById('emp_id_div');
stud_div = document.getElementById('stud_id_div');
    if(radio.value=='employee'){
        
       
        emp_div.classList.remove("d-none");
        stud_div.classList.add("d-none");
       
    }
    
    if(radio.value=='student'){
        
        emp_div.classList.add("d-none");
        stud_div.classList.remove("d-none");
       
    }
}))

document.querySelector("#agreement").addEventListener("change",function(){
    console.log(document.querySelector("#agreement").checked);
})

var description = document.querySelector("#description");
var des_msg = document.querySelector("#des_msg");
description.addEventListener("keyup",function(){
            console.log("---keyup----")
            console.log(description.value)
            var count = 180-description.value.length;
            des_msg.innerHTML="Characters left" + count;
        })

description.addEventListener("keypress",function(){
    console.log("---keypress----")
    console.log(description.value)
   
})

description.addEventListener("keydown",function(){
    console.log("---keydown----")
    console.log(description.value)
    
})

var today = new Date();
var bd = new Date("1999/10/13");
var diff = today - bd;
console.log(Math.floor(diff/(356*24*60*60*1000)))
// today.getFullYear()
// today.getMonth()
// today.getDate()

        //ForEach as normal function
// radios.forEach(function(radio){
//     radio.addEventListener("change",function(){
//         console.log(radio.value)
//     })
// })


//============== Note================
// for normal operation
// for in used for (object)
// forEach used for (nodelist obj)
// callback function is function as parameters

//key press does not affet on special character
//key down will consider on special character
//keypress a A 's key code ko show naing