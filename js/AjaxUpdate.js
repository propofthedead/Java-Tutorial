"option strict"




function get(){
    var id= document.getElementById("pId").value;
    $.getJSON("http://localhost:63558/Customers/Get/"+id)
    .done(function(resp){
        console.log(resp);
        display(resp);
    });
}
function display(Customer){
    document.getElementById("pId").textContent=Customer.Id;
    document.getElementById("pName").value=Customer.Name;
    document.getElementById("pState").value=Customer.State;
    document.getElementById("pCity").value=Customer.City;
    document.getElementById("pPreferred").checked=Customer.Preferred;
}




function update(){
    var customer={
        Id:document.getElementById("pId").value,
        Name: document.getElementById("pName").value,
        State: document.getElementById("pState").value,
        City: document.getElementById("pCity").value,
        Preferred: document.getElementById("pPreferred").checked
    }
    $.post("http://localhost:63558/Customers/Change",customer)
    .done(function(resp){
        console.log(resp);
    });
}