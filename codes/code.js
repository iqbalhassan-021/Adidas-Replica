var counter = 1;

function dispnavBar(){
    counter = counter + 1;
    if(counter%2 == 0){
        document.getElementById('mobileNavBar').style.display = "none";
    }
    else{
        document.getElementById('mobileNavBar').style.display = "block";
    }
}


function HideUpdates(){
    document.getElementById('newupdates').style.display = "none";
}
function nextSlide(){
    counter = counter + 1;
    if(counter==1){
        document.getElementById('container1').scrollIntoView();  
    }
    if(counter==2){
        document.getElementById('container2').scrollIntoView();  
    }
    if(counter==3){
        document.getElementById('container3').scrollIntoView();  
    }
    if(counter==4){
        document.getElementById('container4').scrollIntoView();  
    }
    if(counter>4){
        counter = 1;
        document.getElementById('container1').scrollIntoView();  
    }
}


function preSlide(){
    counter = counter - 1;
    if(counter==1){
        document.getElementById('container1').scrollIntoView();  
    }
    if(counter==2){
        document.getElementById('container2').scrollIntoView();  
    }
    if(counter==3){
        document.getElementById('container3').scrollIntoView();  
    }
    if(counter==4){
        document.getElementById('container4').scrollIntoView();  
    }
    if(counter<0){
        counter = 1;
        document.getElementById('container1').scrollIntoView();  
    }
}

