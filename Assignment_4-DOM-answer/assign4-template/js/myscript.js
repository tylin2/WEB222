// All you JavaScript code for assignment 4 should be in this file
function generateColumnWith(content) {
    var elem = document.createElement("td");
    var cellText = document.createTextNode(content);
    elem.appendChild(cellText);
    return elem;
}

function generateColumnWithFlag(location) {
    var elem = document.createElement("td");
    var flag = document.createElement("img");
    flag.src = "flags/" + location + ".png";
    flag.width = "30";
    flag.setAttribute("alt", "");
    elem.appendChild(flag);
    return elem;
}

function genTableWithTitle(lang, min, max, filter, continent, title) {
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
            newRow.appendChild(generateColumnWithFlag(countries[i].Code));
            newRow.appendChild(generateColumnWith(countries[i].Code));
            newRow.appendChild(generateColumnWith(eval('countries[i].Name.' + lang)));
            newRow.appendChild(generateColumnWith(countries[i].Continent));
            newRow.appendChild(generateColumnWith(countries[i].AreaInKm2));
            newRow.appendChild(generateColumnWith(countries[i].Population));
            newRow.appendChild(generateColumnWith(countries[i].Capital));
            // append the row with all columns into tbody
            tBody.appendChild(newRow);
        }
    }
    table.appendChild(tBody);
}

window.onload = function () {
    // generate list of countries (no range)
    var menu_1 = document.querySelector("#menu_1");
    menu_1.onclick = genTableWithTitle("English", 0, 0, "Population", "Any",
        "List of Countries and Dependencies");

    // generate list of countries filtered by population (min only)
    var menu_21 = document.querySelector("#menu_21");
    menu_21.onclick = function () {
        genTableWithTitle("English", 100000000, 0, "Population", "Any",
            "List of Countries and Dependencies - Population greater than 100 million");
    }
    // generate list of countries filtered by population (range)
    var menu_22 = document.querySelector("#menu_22");
    menu_22.onclick = function () {
        genTableWithTitle("English", 1000000, 2000000, "Population", "Any",
            "List of Countries and Dependencies - Population between 1 and 2 million");
    }
    // Area greater than 1 million Km2, Americas
    var menu_31 = document.querySelector("#menu_31");
    menu_31.onclick = function () {
        genTableWithTitle("English", 1000000, 0, "AreaInKm2", "Americas",
            "List of Countries and Dependencies - Area greater than 1 million Km2, Americas");
    }

    var menu_32 = document.querySelector("#menu_32");
    menu_32.onclick = function () {
        genTableWithTitle("English", 0, 0, "AreaInKm2", "Asia",
            "List of Countries and Dependencies - All countries in Asia");
    }

    var menu_41 = document.querySelector("#menu_41");
    menu_41.onclick = function () {
        genTableWithTitle("English", 0, 0, "Population", "Any",
            "List of Countries and Dependencies – Country / Dep. Name in English");
    }
    var menu_42 = document.querySelector("#menu_42");
    menu_42.onclick = function () {
        genTableWithTitle("Arabic", 0, 0, "Population", "Any",
        "List of Countries and Dependencies – Country / Dep. Name in Arabic");
    }
    
    var menu_43 = document.querySelector("#menu_43");
    menu_43.onclick = function () {
        genTableWithTitle("Chinese", 0, 0, "Population", "Any",
        "List of Countries and Dependencies – Country / Dep. Name in Chinese (中文)");
    }
    
    var menu_44 = document.querySelector("#menu_44");
    menu_44.onclick = function () {
        genTableWithTitle("Franch", 0, 0, "Population", "Any",
        "List of Countries and Dependencies – Country / Dep. Name in French");
    }
    
    var menu_45 = document.querySelector("#menu_45");
    menu_45.onclick = function () {
        genTableWithTitle("Hindi", 0, 0, "Population", "Any",
        "List of Countries and Dependencies – Country / Dep. Name in Hindi");
    }
    
    var menu_46 = document.querySelector("#menu_46");
    menu_46.onclick = function () {
        genTableWithTitle("Korean", 0, 0, "Population", "Any",
        "List of Countries and Dependencies – Country / Dep. Name in Korean");
    }
    
    var menu_47 = document.querySelector("#menu_47");
    menu_47.onclick = function () {
        genTableWithTitle("Japanese", 0, 0, "Population", "Any",
        "List of Countries and Dependencies – Country / Dep. Name in Japanese");
    }
    
    var menu_48 = document.querySelector("#menu_48");
    menu_48.onclick = function () {
        genTableWithTitle("Russian", 0, 0, "Population", "Any",
        "List of Countries and Dependencies – Country / Dep. Name in Russian");
    }
}