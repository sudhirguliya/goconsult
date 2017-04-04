"use strict";

/**
 * Email_template
 * @description :: Model for storing Email_template records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    templateName: {
      type: 'string',
      required: true,
      unique: true,
      alphanumericdashed: true
    },
    templateSubject: {
      type: 'string'
    },
    templateData: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
