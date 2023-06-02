var inputval = document.getElementById("inp");
var inp = document.getElementById("list");
function delRow(btn){
    console.log(btn.parentNode)
    btn.parentNode.remove()
}
function editRow(btn){
    console.log(btn.parentNode)
    // btn.parentNode.firstchild.nodevalue=prompt("ENTER NEW TO DO WORK");
    btn.parentNode.firstchild.nodevalue="ABC";
}
function addtask(){
    var li = document.createElement("li");
    var lival = document.createTextNode(inputval.value);
    
    li.appendChild(lival);
    var del = document.createElement("Button");
var delText = document.createTextNode("DELETE");
del.appendChild(delText);
del.setAttribute("class", "btn");
del.setAttribute("onclick","delRow(this)");
li.appendChild(del)

var edit = document.createElement("button");
var editTEXT = document.createTextNode("edit");

edit.appendChild(editTEXT);
edit.setAttribute("class", "btn");
edit.setAttribute("onclick","delRow(this)");
li.appendChild(edit);



inp.appendChild(li);

inputval.value="";
}