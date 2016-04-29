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

