
// console.log("Hello World") the way to show output in JS
// alert("Hello ALERT")  the way to show output in JS
//document.write("See Detail")  the way to show output in JS
document.getElementById('div1').innerText="Hello Div 1";
document.getElementById('div2').innerText="Hello Div 2";

{
    var name1 = "HOST MM";//global scpoe
    let email1 = "admin@gmail.com";//local scope
    const phone1 = "+951234";//local scope const (cannot update)
    
    email1="new email";

    console.log("Email:"+email1);
    console.log("Phone:"+phone1);
}

console.log("Welcome"+name1);

var name = 'SDL';
var email = 'sdl@gmail.com'
var address = 'Mdy'

var job = 'developer'
var position = 'senior'
var message = 'Hello'

document.getElementById('div1').innerHTML= "Name:"+name+"<br>Gmail:"+email+"<br>Address:"+address;
document.getElementById('div2').innerHTML= `Job:${job}<br>Position:${position}<br>Message:${message}`;

var swimming_status = false;
var newclass = "nw"
document.getElementById('div1').className=swimming_status; //overwrite class Name of div

document.getElementById('div1').classList.add(newclass);

var colors = ["white","red"];
console.log(colors.length);
console.log(colors[0]);

//change div's color using array color values
div2 = document.getElementById('div2');
div2.classList.remove('bg-info');
div2.classList.add(colors[1]);

var hs = hidden_status=[true,false];
div1 = document.getElementById('div1');
div1.classList.add(hs[0]);

var employees = new Array("mg mag","aung aung","san san");
console.log(employees.length);
console.log(employees[0]);

var check = new Array("hide","appear");
//div (rows:2,cols:3)
//default hidden
//check [1] show
con2 = document.getElementById('con2');
con2.classList.remove('d-none');
con2.classList.add(check[1]);

