var movie_names = ["Green Book","The Favourite","Bohemian Rhapsody","Black Panther","Roma","Vice"];
window.onload = function() {		 
    document.querySelector("#button1").onclick = generateTable;
 }
function generateTable(){
     // get the reference for the body
   var tbl = document.querySelector("#outputTable");
 
   // revove existing Body element
   var tblExistingBody = tbl.querySelector("tbody");
   if (tblExistingBody) tbl.removeChild(tblExistingBody);
   
   // creates a <tbody> element
   var tblBody = document.createElement("tbody");
   var newarray = movie_names.sort()
   for (var i = 0; i < newarray.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    // Create a <td> element and put them at the end of the table row
    row.appendChild(i);
    row.appendChild(getTdElement(newarray[i]));
    

    // add the row to the end of the table body
    tblBody.appendChild(row);
 }

 // put the <tbody> in the <table>
 tbl.appendChild(tblBody);
}
