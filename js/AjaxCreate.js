"option strict"

function create(){
    var customer={
        Id:0,
        Name: document.getElementById("pName").value,
        State: document.getElementById("pState").value,
        City: document.getElementById("pCity").value,
        Preferred: document.getElementById("pPreffered").checked
    }
    $.post("http://localhost:63558/Customers/Create",customer)
    .done(function(resp){
        console.log(resp);
    });
}