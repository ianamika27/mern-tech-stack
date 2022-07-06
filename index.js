/**
 * Javascript Basics to cover
 * JSON
 * Object
 * first-order class
 * hoisting
 * 
 */

// MERN - Mongo DB - data gets stored in json 

// Ex- Person 

// Array of objets

var person_data = {
    "basic_details": {
        "name":"a",
        "email":"",
        "contact_no": {
            "mobile":"",
            "landline":"0622-274220"
        } 
    },
    "work_ex": [
        {
            "org_name" : "google",
            "year" :"2016"
        },
        {
            "org_name" : "amazon",
            "year" :"2016"
     }]
}

var machines = {};

//var mech = {}

machines["name"] = {}

machines["name"]["ts"] = 'hello'

machines.year = 2022;

console.log(JSON.stringify(machines))

console.log(person_data["basic_details"]["contact_no"]["landline"])

var work_ex = person_data["work_ex"]

//console.log('work_ex', typeof(work_ex))

for(let i=0;i<work_ex.length;i++){
    //console.log(work_ex[i]['org_name'])
}

var name1 = 'Varsha'

//console.log(name1)

name1 = 123

//console.log(name1)

anamika 
console.log(anamika)

// 