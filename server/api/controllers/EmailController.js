"use strict";

/**
 * EmailController
 * @description :: Server-side logic for ...
 */

module.exports = {
    send: function(req, res) {
   // console.log(req.body);
    sails.hooks.email.send(
      "welcomeEmail", {
        recipientName: req.body.firstName,
        recipientEmail: req.body.email,
        recipientPassword: req.body.password,
        recipientLink: "http://www.goconsult.in/login",
        senderName: "Goconsult"
      }, {
        to: req.body.email,
        subject: "Welcome Email"
      },
      function(err) {
        if (err) {return res.serverError(err);}
        return res.ok();
      }
    );
  },
  show: function(req, res) {
    console.log(req.body.email);
    
    var path = require('path');
    //templateDir: "api/emailTemplates",
    //console.log(__dirname);
    require('fs').readFile(path.resolve(__dirname,"..","emailTemplates","welcomeEmail/html.ejs."), {encoding:"utf8"}, function(err, text) {
      if (err) {return res.serverError(err);}
      res.set("Content-Type","text/html");
      return res.ok(text);
    });
  }
};
