// All you JavaScript code for assignment 4 should be in this file
function getTdElement(text) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    return cell;
 }
 function getFlag(Code){
     var Flag = document.createElement("td");    
     var img = document.createElement('img');
         img.src = "flags/"+Code+".png";
         img.alt ="";
         img.width="35"
     Flag.appendChild (img);
     return Flag;
 }
 
 function getcountries(title, language, min, max, filter, continent ) {
     // change title
     var title = document.querySelector("#subtitle").innerHTML = title;
     // get ref for the table
     var table = document.querySelector("#outputTable");
     // check if table body already exists and delete if any
     var tBodyExist = document.querySelector("tbody");
     if (tBodyExist) { table.removeChild(tBodyExist); }
 
     // generate a table with the filters if any
     var tBody = document.createElement("tbody");
 
     for (var i = 0; i < countries.length; ++i) {
         if (
             (continent == "Any" || countries[i].Continent == continent)
             &&
             (min == 0 || eval('countries[i].' + filter) > min)
             && 
             (max == 0 || eval('countries[i].' + filter) < max)
             ) {
             // create new row
             var newRow = document.createElement("tr");
             // create columns in a row and append data from countries obj
             newRow.appendChild(getFlag(countries[i].Code));
             newRow.appendChild(getTdElement(countries[i].Code));
             newRow.appendChild(getTdElement(eval('countries[i].Name.' + language)));
             newRow.appendChild(getTdElement(countries[i].Continent));
             newRow.appendChild(getTdElement(countries[i].AreaInKm2));
             newRow.appendChild(getTdElement(countries[i].Population));
             newRow.appendChild(getTdElement(countries[i].Capital));
             // append the row with all columns into tbody
             tBody.appendChild(newRow);
         }
     }
     table.appendChild(tBody);
 }
 
 window.onload = function () {
     
     var menu_1 = document.querySelector("#menu_1");
     menu_1.onclick = getcountries("List of Countries and Dependencies","English", 0, 0, "Population", "Any");
 
   
     var menu_21 = document.querySelector("#menu_21");
     menu_21.onclick = function () {
         getcountries("List of Countries and Dependencies - Population greater than 100 million","English", 100000000, 0, "Population", "Any");
     }
     // generate list of countries filtered by population (range)
     var menu_22 = document.querySelector("#menu_22");
     menu_22.onclick = function () {
         getcountries("List of Countries and Dependencies - Population between 1 and 2 million","English", 1000000, 2000000, "Population", "Any");
     }
     // Area greater than 1 million Km2, Americas
     var menu_31 = document.querySelector("#menu_31");
     menu_31.onclick = function () {
         getcountries("List of Countries and Dependencies - Area greater than 1 million Km2, Americas","English", 1000000, 0, "AreaInKm2", "Americas",);
     }
 
     var menu_32 = document.querySelector("#menu_32");
     menu_32.onclick = function () {
         getcountries("List of Countries and Dependencies - All countries in Asia","English", 0, 0, "AreaInKm2", "Asia",);
     }
 
     var menu_41 = document.querySelector("#menu_41");
     menu_41.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in English","English", 0, 0, "Population", "Any");
     }
     var menu_42 = document.querySelector("#menu_42");
     menu_42.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in Arabic","Arabic", 0, 0, "Population", "Any");
     }
     
     var menu_43 = document.querySelector("#menu_43");
     menu_43.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in Chinese (中文)","Chinese", 0, 0, "Population", "Any");
     }
     
     var menu_44 = document.querySelector("#menu_44");
     menu_44.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in French","Franch", 0, 0, "Population", "Any");
     }
     
     var menu_45 = document.querySelector("#menu_45");
     menu_45.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in Hindi","Hindi", 0, 0, "Population", "Any");
     }
     
     var menu_46 = document.querySelector("#menu_46");
     menu_46.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in Korean","Korean", 0, 0, "Population", "Any",);
     }
     
     var menu_47 = document.querySelector("#menu_47");
     menu_47.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in Japanese","Japanese", 0, 0, "Population", "Any");
     }
     
     var menu_48 = document.querySelector("#menu_48");
     menu_48.onclick = function () {
         getcountries("List of Countries and Dependencies – Country / Dep. Name in Russian","Russian", 0, 0, "Population", "Any"
                  );
     }
 }