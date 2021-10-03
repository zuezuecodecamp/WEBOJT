//Event
// button,a onclick
//submit button ==> onsubmit
var form = document.querySelector("#taskAdd");
// form.onsubmit=function(){
//     var newTask = document.querySelector('#newtask').value;
//     var li = document.createElement("li");
//     li.innerText = newTask;
//     document.querySelector("#taskList").appendChild(li);
//     document.querySelector('#newtask').value = null; // clear text box value after one data is submit
//     return false; // pervent going to another link or refresh
// }
form.onsubmit=()=>{
    var newTask = document.querySelector('#newtask').value;
    var li = document.createElement("li");
    li.innerText = newTask;
    document.querySelector("#taskList").appendChild(li);
    document.querySelector('#newtask').value = null; // clear text box value after one data is submit
    return false; // pervent going to another link or refresh
}

//Assignment
//input text username,password
//submit button
//When click submit ,length of values in username and passwor
//if namelength less than display show lenght must be 5 
//if password lenght < 8 