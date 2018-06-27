
function loaded(){
    $.getJSON("http://localhost:63558/Customers/List")
    .done(function(resp){
        console.log(resp);
        display(resp);
    });
}

function display(Customers){
    var tbody= document.getElementById("tbody");
    tbody.innerHTML="";
    for(var cust of Customers){
        var row="";
        row+="<tr>";
        row+="<td>"+cust.Id+"</td>";
        row+="<td>"+cust.Name+"</td>";
        row+="<td>"+cust.City+"</td>";
        row+= "<td>"+cust.State+"</td>";
        row+="<td>"+cust.Preferred+"</td>";
        row+="</tr>";
        tbody.innerHTML+=row;
    }
}

$(document).ready(function(){
    $("table")
    .css("color","red")
    .css("font-weight","bold")
    .css("width","1500")
    .css("background-color","pink")

    $("#tbody")
    .css("color", "darkgreen")
    .css("background-color","black")

    $("body")
    .css("background-color","cyan")

});

function goto(){

}