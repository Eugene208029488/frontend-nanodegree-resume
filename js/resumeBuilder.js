//"#main").append("Eugene");
var awesomethoughts = "I am Eugene and I'm awesome!!!";
console.log(awesomethoughts);
var funthoughts=awesomethoughts.replace("awesome","fun");
console.log(funthoughts);
//$("#main").append(funthoughts);
var formattedName = HTMLheaderName.replace("%data%","Eugene Gervacio");
var formattedRole = HTMLheaderRole.replace("%data%","Architect");
$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);

var bio = {
    "name" : "Eugene Gervacio",
    "role" : "Solution Architect",
    "contacts" : {
          "mobile": "650-444-4444",
          "email": "jscript@google.com",
          "github": "egerv",
          "twitter": "@egerv",
          "location": "Plainville, CT"
    },
    "welcomeMessage": "This is a welcome message.",
    "skills": ["eat","sleep","play"],
    "biopic": "image/fry.jpg"
}

var education ={
    "schools": [
        {
         "name": "UCONN",
         "location": "Storrs, CT",
         "degree": "Bachelor",
         "majors": ["CS","Arts"],
         "dates": "2000-2004",
         "url": "http://example.com"
        },
        {
         "name": "Harvard",
         "location": "Cambirdge, MA",
         "degree": "Masters",
         "majors": ["Business"],
         "dates": "2004-2006",
         "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
         "title": "Javascript Crash Course",
         "school": "Udacity",
         "date": "2016",
         "url": "http://www.udacity.com"
        }
    ]
}

var work = {
    "jobs": [
        {
         "employer": "Planet Express",
         "title": "Delivery Boy",
         "location": "Plainville",
         "dates": "1999-present",
         "description": "Deliver awesome pizza"
        },
        {
         "employer": "Sax Pizza",
         "title": "Delivery Boy",
         "location": "Plainville",
         "dates": "1998-1999",
         "description": "Deliver pizza"
        }
    ]
}

var projects = {
    "projects": [
        {
          "title": "Project Speed",
          "dates": "2015-2016",
          "description": "Optimze delivery of pizza",
          "images": ["http://example.com", "http://example2.com"]
        }
    ]
}