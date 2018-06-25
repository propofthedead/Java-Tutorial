"option strict"
console.log("wired properly");

function clicked(){
    var inputCtrl =document.getElementById("thetext");
    var inputValue= inputCtrl.value;
    var labelCtrl= document.getElementById("theLabel");
    labelCtrl.textContent= inputValue;

}
function add()
{
    var op1Ctrl= document.getElementById("op1");
    var op2Ctrl= document.getElementById("op2");
    var op1value= op1Ctrl.value;
    var op2value= op2Ctrl.value;
    var labelCtrl= document.getElementById("answer");
    labelCtrl.textContent= Number(op1value)+Number(op2value);
}
function sub()
{
    var op1Ctrl= document.getElementById("op1");
    var op2Ctrl= document.getElementById("op2");
    var op1value= op1Ctrl.value;
    var op2value= op2Ctrl.value;
    var labelCtrl= document.getElementById("answer");
    labelCtrl.textContent= Number(op1value)-Number(op2value);
}