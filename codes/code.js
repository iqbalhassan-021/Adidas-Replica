var counter = 1;
var countSlider = 1;

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
    countSlider = countSlider + 1;
    if(countSlider==1){
        document.getElementById('container1').scrollIntoView();  
    }
   else if(countSlider==2){
        document.getElementById('container2').scrollIntoView();  
    }
    else if(countSlider==3){
        document.getElementById('container3').scrollIntoView();  
    }
    else if(countSlider==4){
        document.getElementById('container4').scrollIntoView();  
    }
    else if(countSlider > 4 || countSlider < 0){
        countSlider = 1;
        document.getElementById('container1').scrollIntoView();  
    }
    console.log(countSlider);
}


function preSlide(){
    countSlider = countSlider - 1;
    if(countSlider==1){
        document.getElementById('container1').scrollIntoView();  
    }
    else if(countSlider==2){
        document.getElementById('container2').scrollIntoView();  
    }
    else if(countSlider==3){
        document.getElementById('container3').scrollIntoView();  
    }
    else if(countSlider==4){
        document.getElementById('container4').scrollIntoView();  
    }
    else if(countSlider > 4 || countSlider < 0){
        countSlider = 1;
        document.getElementById('container1').scrollIntoView();  
    }
}
