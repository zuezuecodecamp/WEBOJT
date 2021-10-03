var radios = document.querySelectorAll("input[type=radio][name=semeter]");
radios.forEach(radio=>radio.addEventListener("change",function(){
    course1 = document.getElementById('course1');
    course2 = document.getElementById('course2');
    if(radio.value=='semeter1'){
        
       
        course1.classList.remove("d-none");
        course2.classList.add("d-none");
       
    }
    
    if(radio.value=='semeter2'){
        
        course1.classList.add("d-none");
        course2.classList.remove("d-none");
       
    }
}))

var radios = document.querySelectorAll("input[type=radio][name=foption]");
radios.forEach(radio=>radio.addEventListener("change",function(){
    fphone = document.getElementById('fphone');
    faddress = document.getElementById('faddress');
    if(radio.value=='fliving'){
        
        fphone.classList.remove("d-none")
        faddress.classList.remove("d-none")

        sfphone.classList.remove("d-none")
        sfaddress.classList.remove("d-none")
       
    }
    
    if(radio.value=='fdecease'){
        
        fphone.classList.add("d-none")
        faddress.classList.add("d-none")

        sfphone.classList.add("d-none")
        sfaddress.classList.add("d-none")
       
    }
}))

var radios = document.querySelectorAll("input[type=radio][name=moption]");
radios.forEach(radio=>radio.addEventListener("change",function(){
    mphone = document.getElementById('mphone');
    maddress = document.getElementById('maddress');
    if(radio.value=='mliving'){
        
        mphone.classList.remove("d-none")
        maddress.classList.remove("d-none")

        smphone.classList.remove("d-none")
        smaddress.classList.remove("d-none")
       
    }
    
    if(radio.value=='mdecease'){
        
        mphone.classList.add("d-none")
        maddress.classList.add("d-none")

        smphone.classList.add("d-none")
        smaddress.classList.add("d-none")
       
    }
}))
