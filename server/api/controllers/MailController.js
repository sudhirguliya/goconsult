"use strict";

/**
 * MailController
 * @description :: Server-side logic for send users' mail
 */

module.exports = {
   send: function(req, res) {
    MailerService
      .send({
        to: 'sudhir.se11@gmail.com',//req.param('to'),
        text: 'And of course, Hello World!'
      })
      .then(res.ok)
      .catch(res.negotiate);
  }
};