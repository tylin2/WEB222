// Data for the "HTML Tables" Page

var users = [
    {
        first_name: 'Kaitlin',
        last_name: 'Burns',
        age: 23,
        email: 'kburns99753@usermail.com'
    },
    {
        first_name: 'Joshua',
        last_name: 'Feir',
        age: 31,
        email: 'josh319726@usermail.com'
    },
    {
        first_name: 'Stephen',
        last_name: 'Shaw',
        age: 28,
        email: 'steve.shaw47628@usermail.com'
    },
    {
        first_name: 'Timothy',
        last_name: 'McAlpine',
        age: 37,
        email: 'Timbo72469@usermail.com'
    },
    {
        first_name: 'Sarah',
        last_name: 'Connor',
        age: 19,
        email: 'SarahC6320@usermail.com'
    }
];
window.onload = function () {

    var tabCont = document.querySelector("#table1");

    var myRows = "<table border= '1'> <tr> <th>First Name</th> <th>Last Name</th> <th>Age</th> <th>Email</th> </tr>";

    for(var i = 0; i < users.length; i++)
    {
        myRows += "<tr>" + "<td>" + users[i].first_name + "</td>" + "<td>" + users[i].last_name + "</td>" + "<td>" + users[i].age + "</td>"
                + "<td>" + "<a href = mailto:users[i].email>" + users[i].email +"</a>" + "</td>" + "</tr>";
    }
    myRows += "</table>"

    tabCont.innerHTML += myRows;
}