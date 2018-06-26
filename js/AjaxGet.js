function get(){
    var id= document.getElementById("iId").value;
    $.getJSON("http://localhost:63558/Customers/Get/"+id)
    .done(function(resp){
        console.log(resp);
        display(resp);
    });
}


function display(Customers){
    document.getElementById("pId").textContent=customer.Id;
    
}