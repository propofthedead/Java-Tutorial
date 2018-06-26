"option strict"

var technolgies=[
    {id:0,name:JavaScript,difficulty="Easy"}
];

function loaded(){
    display();
}

function add(){
    var id= document.getElementById("pId").value;
    var name= document.getElementById("pName").value;
    var difficulty= document.getElementById("pDiff").value;
    var tech= {id:id,name:name,difficulty:difficulty};
    technolgies.push(tech);
    display();
}

function display(){
    var tbody= document.getElementById("tbody");
    tbody.innerHTML="";
    for(var tech of technolgies){
        var row="";
        row+= "<tr>";
        row+= "<tr>"+ tech.id+"</tr>";
        row+="<tr>"+tech.name+"</tr>";
        row+= "<tr>"+tech.difficulty+"</tr>";
        row+="</tr>";
        tbody.innerHTML+= row;
    }
}