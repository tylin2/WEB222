// Data for the "HTML Lists" Page

var fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];

var directory = [
    { type: 'file', name: 'file1.txt' },
    { type: 'file', name: 'file2.txt' },
    {
        type: 'directory',
        name: 'HTML Files',
        files: [
            { type: 'file', name: 'file1.html' },
            { type: 'file', name: 'file2.html' }
        ]
    },
    { type: 'file', name: 'file3.txt' },
    {
        type: 'directory',
        name: 'JavaScript Files',
        files: [
            { type: 'file', name: 'file1.js' },
            { type: 'file', name: 'file2.js' },
            { type: 'file', name: 'file3.js' }
        ]
    }
];
window.onload = function()
{

    //Fruits list
    var list = document.querySelector("#list");

    var myList = "<ol>";

    for(var i = 0; i < fruits.length; i++)
    {
        myList += "<li>" + fruits[i] + "</li>";
    }

    myList += "</ol>";

    list.innerHTML = myList;

	// Directories list
	var directories = document.querySelector("#directory");

	var directoryList = "<ul>";

	for(var i = 0; i < directory.length; i++){
		directoryList += "<li>" + directory[i].name + "</li>";


		if (directory[i].type == "directory"){
			directoryList += "<ul>";
    
			for (var x = 0; x < directory[i].files.length; x++){
			directoryList += "<li>" + directory[i].files[x].name + "</li>";
			}

			directoryList += "</ul>";
		}

	}

	directoryList += "</ul>";

	directories.innerHTML = directoryList;

};