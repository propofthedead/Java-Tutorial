"option strict"
var theNumber=0;
var inputCtrl=null;

function add(){
    var inputCtrl=document.getElementById("value");
    theNumber++;
    inputCtrl.value= theNumber;
    display()
}

function sub(){
    var inputCtrl=document.getElementById("value");
    theNumber--;
    inputCtrl.value=theNumber;
    display();
}
function loaded(){
    inputCtrl=document.getElementById("value");
    inputCtrl.value=theNumber;
    
}
function display(){
    inputCtrl.value=theNumber;
    var isEven;
    var div3;
    if(theNumber %2 ==0)
    {
        isEven=true;
    }else{
        isEven=false;
    }
    if(isEven){
        inputCtrl.style.color="red";
    }else{
        inputCtrl.style.color="black";
    }
    if(theNumber %3==0){
        div3=true;
    }else{
        div3=false;
    }
    if(div3){
        inputCtrl.style.fontWeight="bold";
    }else{
        inputCtrl.style.fontWeight="normal";
    }
}