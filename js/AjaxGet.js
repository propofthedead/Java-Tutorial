function get(){
    var id= document.getElementById("iId").value;
    $.getJSON("http://localhost:63558/Customers/Get/"+id)
    .done(function(resp){
        console.log(resp);
        display(resp);
    });
}


function display(Customer){
    document.getElementById("pId").textContent=Customer.Id;
    document.getElementById("pName").textContent=Customer.Name;
}