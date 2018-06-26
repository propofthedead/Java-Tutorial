"option strict"

var technolgies=[
    {id:0,name:"JavaScript",difficulty:"Easy"}
];

function load(){
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
        row+= "<td>"+ tech.id+"</td>";
        row+="<td>"+tech.name+"</td>";
        row+= "<td>"+tech.difficulty+"</td>";
        row+="</tr>";
        tbody.innerHTML+= row;
    }
}