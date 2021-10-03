var cat = document.querySelector("#product_list");
console.log(cat.children.length)
document.querySelector(".cat_list").innerHTML="Total number of categories"+cat.children.length;

//find pre and next element and parent
var start_element = document.querySelector("li:nth-child(2)");
// console.log(start_element);
// console.log(start_element.previousElementSibling)
// console.log(start_element.nextElementSibling)
// console.log(start_element.parentNode)
// console.log("----")
// console.log(cat.children[2])

var dels = document.querySelectorAll(".btn-delete");
dels.forEach(del=>del.addEventListener("click",function(){
    current_element = del.parentElement;
    cat.removeChild(current_element)
    }))

