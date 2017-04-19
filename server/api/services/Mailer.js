module.exports.sendWelcomeMail = function() {
 sails.hooks.email.send(
 "welcomeEmail", 
 {
 Name: "Sudhir"//obj.name
 },
 {
 to: "sudhir.se11@gmail.com", //obj.email,
 subject: "Welcome Email"
 },
 function(err) {console.log(err || "Mail Sent!");}
 )
}