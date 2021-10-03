var div1 = document.getElementById("div1");
for(var count=0;count<6;count++){
    var heading = document.createElement("h3");
    heading.innerText="Heading 3";    
    if(count%2==0){
        heading.style.color="#999"
    }
    else{
        heading.style.backgroundColor = "blue";
        heading.style.color = "black";
    }
    div1.appendChild(heading)
}

var ul = document.getElementById("toreadlist");
for(var count=0;count<6;count++){
    var li = document.createElement("li");
    li.innerText="Reading Book";    
    if(count%2==0){
        li.style.color="#999";
        li.style.listStyleType = 'none';
    }
    else{
        li.style.backgroundColor = "grey";
        li.style.color = "black";
        li.style.listStyleType = 'none';
    }
    ul.appendChild(li)
}

var uni = {
    name : 'UTYCC',
    email : 'admin@gmail.com',
    phone : '+98000',
    address : 'MDY'
}
// var uni_ul = document.getElementById("uni_info");
// for(var prop in uni){
//     var li = document.createElement("li");
//     li.innerText = prop + ':' + uni[prop];
//     uni_ul.appendChild(li);
// }

//build card as bootstap class
var card = document.createElement("div");
card.classList.add("card");
var img = document.createElement("img");
img.src = "img/re.jpg";
img.style.width = "130px";
img.style.height = "130px";
img.classList.add('card-img-top');
card.appendChild(img);

//card-body
var card_body = document.createElement("div");
card_body.classList.add("card-body");

var card_title = document.createElement("h3");
card_title.classList.add("card-title");
card_title.innerText = (uni['name']);
card_body.appendChild(card_title);


var card_text = document.createElement("p");
card_text.classList.add("card-text");
var uni_ul = document.createElement("ul");
for(var prop in uni){
    var li = document.createElement("li");
    li.innerText = prop + ':' + uni[prop];
    li.style.listStyleType = "none";
    uni_ul.appendChild(li);
}
card_text.appendChild(uni_ul);
card_body.appendChild(card_text);

card.appendChild(card_body);
var university = document.getElementById("university");
university.appendChild(card);

//while 
var loop = 1;
var row = document.querySelector('#col-4');// == getElementbyId (#col-4 find element by ID) (.col-4 find element by class)
while(loop<5){
    var col = document.createElement("div");
    col.classList.add("col");
    col.innerText = "Hello";   
    col.style.backgroundColor = "#f1f1f1";    
    row.appendChild(col);
    loop++;
}

var loop = 1;
var row = document.querySelector('#col-4');// == getElementbyId (#col-4 find element by ID) (.col-4 find element by class)
do{
    var col = document.createElement("div");
    col.classList.add("col");
    col.innerText = "Hello";   
    col.style.backgroundColor = "#f1f1f1";    
    row.appendChild(col);
    loop++;
}while(loop<5)


