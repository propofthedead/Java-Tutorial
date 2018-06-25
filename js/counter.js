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
    var isDivisableby3= theNumber %3==0;
    inputCtrl.style.fontWeight= (isDivisableby3) ? "bold" : "normal";
    var isDivisableby7= theNumber %7==0;
    inputCtrl.style.fontStyle= (isDivisableby7) ? "italic":"normal";
}