"use strict";

const MailerService = require('sails-service-mailer');

module.exports = {
  MailerService: MailerService('sendmail', {
  from: 'sudhir.se11@gmail.com',
  subject: 'Hello, there',
  provider: {
    path: '/usr/bin/sendmail'
  }
})
};