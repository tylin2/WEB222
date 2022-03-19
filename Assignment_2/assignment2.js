/**
 * WEB222 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Ting-Yeh Lin
 *      Student ID: 141726182
 *      Date: 2019/10/20
 *
 */

/**
 * The utils Object has methods for working with individual user data, in
 * order to format or generate new user information.
 */

var utils = {
    /**
     * Takes a phone number in the form "##########" and returns it in the
     * form "(###) ###-####".
     *
     * 
     */
    formatPhoneNumber: function(phoneNumber) {
        var str=String(phoneNumber);
        var phoneinform='('+str[0]+str[1]+str[2]+') '+str[3]+str[4]+str[5]+'-'+str[6]+str[7]+str[8]+str[9];
        return phoneinform;
    },
    

    /**
     * Uses the given firstName and lastName strings to create a username, which
     * takes the form: first two letters of first name followed by at most 4 letters
     * of the last name.  For example:
     *
     * "John Smithson" -> "josmit"
     * "Dan Min" -> "damin"
     *
     * The generated username should be in UPPERCASE.
     *
     *  
     */
    generateUsername: function(firstName, lastName) {
        var step1;
        if(lastName.length>=4){
            step1=firstName[0]+firstName[1]+lastName[0]+lastName[1]+lastName[2]+lastName[3];
        }else{
            step1=firstName[0]+firstName[1]+lastName;
        }
        var username=step1.toUpperCase();
        return username;
    } 
};

/**
 * The users Object has various methods for processing a list of users (userList).
 * The userList takes the following form:
 *
 * [ user, user, ... ]
 *
 *  Where each user is an Object with the following form:
 *
 * {
 *   id: 1,                              // Number, the user's id
 *   firstName: "Paige",                 // String, the user's first name
 *   lastName: "Bools",                  // String, the user's last name
 *   birthDate: "1995-02-04T07:34:45Z",  // String, a UTC formatted Date string
 *   phone: "8989068955",                // String, phone number with spaces/dashes
 *   email: "pbools0@webmd.com",         // String, user's email
 *   creditScore: 776,                   // Number, a credit score between 200 and 800
 *   address: "476 Veith Parkway",       // String, user's street address
 *   city: "Cuamba",                     // String, user's city
 *   country: "Mozambique",              // String, user's country
 *   isStudent: false                    // Boolean, whether use is a student
 * }
 *
 * See user-data.json for sample data.  This data was generated with https://mockaroo.com/.
 */

var users = {
    /**
     * Return the number of users in userList (array), or 0 if userList is null/
     * undefined.
     *
     * 
     */
    getUserCount: function(userList) {
        if (userList==null||userList==undefined) {
            var count=0;            
        } else {
            count=userList.length;
        }
        return count;
    },

    /**
     * Return the list (array) of all users in userList who are students
     * (i.e., isStudent === true).
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     * 
     * 
     */
    getStudents: function(userList) {
        function student(ture) {
            var test=ture.isStudent.toLowerCase();   
            return test=="ture";
        }
        var result = userList.filter(student);
        return result;
    },

    /**
     * Return a list (array) of all users with a credit score equal to or
     * greater than minScore.
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     *
     * 
     * 
     */
    getUsersWithGoodCredit: function(userList, minScore) {
        var goodcredit=userList.filter(testfunction=>testfunction.creditScore<=minScore);
        return goodcredit;
    },

    /**
     * Creates a username from the firstName and lastName properties for each
     * user in userList.  Use the util.generateUsername() function you wrote above.
     * Return the updated list of users.
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     * 
     * 
     */
    setUsernames: function(userList) {
        var firstnamearr=[];
        var lastnamearr=[];    
        userList.forEach(function(element) {
            firstnamearr.push(element.firstName);
            lastnamearr.push(element.lastName);
        });
        for(var i=0; i<firstnamearr.length; i++){
            userList[i].username=getusername(firstnamearr[i],lastnamearr[i]);
        } 
        return userList;
    },

    /**
     * Returns an Array of Names and formatted phone numbers, using the
     * util.formatPhoneNumber() function you wrote above.  The array
     * you return should take the following form:
     *
     * [ {name: 'First Last', phone: '(555) 555-5555'}, ...]
     *
     * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     * 
     * 
     */
    getPhoneList: function(userList) {
        var newarry = userList.map(user =>{ 
            var newform = {
                name:"",
                phone:""
            };
            newform.name = user.firstName+" "+user.lastName;
            newform.phone=changephoneform(user.phone)
            return newform;
         });    
        return newarry;
    },

    /**
     * Sorts the Array of users (userList) according to their birth dates,
     * youngest to oldest.
     *
     * 
     */
    sortByDateOfBirth: function(userList) {
        return userList.sort(function(a, b) { 
            if (a.birthDate < b.birthDate) {
              return 1;
            }
            if (a.birthDate > b.birthDate) {
              return -1;
            }
        });
    }
};


