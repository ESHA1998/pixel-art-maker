// Select color input
// Select size input
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");
//var submit=document.getElementById('submit');
color.addEventListener("click", function(){});
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};
function makeGrid() {
    for (let r=0; r<height.value; r++){
           var row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            var cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}
function clearGrid(){
     while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
    
}

/*submit.onclick=MakeGrid;
    function MakeGrid(){
        var length=document.getElementById('inputHeight').value;
        var width=document.getElementById('inputWidth').value;
    var table = document.getElementsByTagName('table')[0];
    for(var r = 0; r < length; r++)
{
        var newRow=table.insertRow(0);
    for (var c = 0; c < width; c++){
        var newCell=newRow.insertCell(c);
}
}
document.getElementsByTagName('table').innerHTML=table;
};
*/
 