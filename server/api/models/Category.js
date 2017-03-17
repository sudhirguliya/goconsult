"use strict";

/**
 * Category
 * @description :: Model for storing Category records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    name : {type: "string", unique : true},
  	status : "boolean",
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
