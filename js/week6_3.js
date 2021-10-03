var tf = 100;
var tc = 90;

//1.funciton implementation
function changetoCelsius(tf) {
    return(tf-32)*5/9;
}
//2.call function
console.log(changetoCelsius(100).toFixed(3))
document.getElementById('result_cel').innerText +=changetoCelsius(100).toFixed(3)+'Celsius';

function changetoFahrenheit(tc) {
    return (tc * 9/5) + 32 ;
}
document.getElementById('result_fa').innerText += ' ' + tc +'is' +changetoFahrenheit(50).toFixed(3)+'Fahrenheit';

kyat = 300000;
usd = 200;
//to usd
function currencyExchangeUSD(kyat) {
    return kyat/2100;
}
rusd = currencyExchangeUSD(kyat).toFixed(3)
document.getElementById('usd').innerText += `${kyat} kyat = ${rusd} $ `
//to kyat

function currencyExchangeKyat(usd){
    return usd*2100;
}
rkyat = currencyExchangeKyat(usd).toFixed(3)
document.getElementById('kyat').innerText += `${usd} $ = ${rkyat} kyat `

var room = 5;
var room_charge = 35000;
var discount = room_charge*10/100;
function calculateCost(){    
    var total_cost = ( room_charge-discount ) * 5;
    return total_cost;
}
total_cost = calculateCost();
document.getElementById('room-charge').innerText += `Total Cost for ${room} is ${total_cost}`;

//object creation
var employee = {
    name : "Mg Mg",
    email : "mg@gmail.com",
    address : "mandalay"
}
console.log(employee.name);
// var student = new Object();
// student.name = 'susu';
// student.age = 34;
var student = {
    firstname : 'san',
    lastname : 'san',
    dob : '1995/09/13',
    doyear:1980,
    address : 'mdy',
    phone : '9087654',
    age:function() {
        return 2021-this.doyear;
    }
}
console.log(student.age());

var online_course = {
    name : 'JS',
    duration : 4,
    fee : 100000,
    no_seats : 50,
    booked : 10,
    checkAvailibity : function() {
        return this.no_seats - this.booked;
    }
}
console.log('Availabel Seats');
console.log(online_course.checkAvailibity());

// obj constructor collect comma data of objects
function Hotel(name,address) {
    this.name = name;
    this.address = address;
}
//obj creation
var eskala = new Hotel('eskala','YGN');
console.log(eskala.name)
eskala.check_room=function () {
    var total_room = 45;
    var booking = 19;
    return total_room - booking;
}
console.log(eskala.check_room())

//create product obj using constructor
function Product(name,type,qty,price){
    this.name = name;
    this.type = type;
    this.qty = qty;
    this.price = price;
    this.totalCost = function() {
        return this.price * this.qty;
    }
}
var pawsan = new Product('pawsan','rice',200,52000);
var ayarmin = new Product('ayarmin','rice',350,48000);
var pawsan_new = new Product('pawsan_new','rice',288,50000);


console.log('Pawsan:'+pawsan.totalCost());
console.log('Ayarmin:'+ayarmin.totalCost());
console.log('Pawsan New:'+pawsan_new.totalCost());

//buitl in 
console.log('Window');
console.log(window.innerHeight);
console.log(window.screen.height);
console.log(window.innerWidth);
console.log(window.screen.width);

var name = "sdl";
console.log(name.toUpperCase());
console.log(name.indexOf('d'));

var year = '1980';
console.log(parseInt(year)/5);