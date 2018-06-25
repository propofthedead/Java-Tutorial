"option strict"
var theNumber=0;

var inputCtrl=document.getElementById("value");
inputCtrl.value=theNumber;
function add(){
    var inputCtrl=document.getElementById("value");
    theNumber++;
    inputCtrl.value= theNumber;
}

function sub(){
    var inputCtrl=document.getElementById("value");
    theNumber--;
    inputCtrl.value=theNumber;
}