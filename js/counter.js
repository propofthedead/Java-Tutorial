"option strict"
var theNumber=0;

var inputCtrl=document.getElementById("value");

function add(){
    theNumber++;
    inputCtrl.value= theNumber;
}

function sub(){
    theNumber--;
    inputCtrl.value=theNumber;
}