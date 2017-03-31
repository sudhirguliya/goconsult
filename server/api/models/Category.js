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
  	status_type : "string",
    subCategory : {collection : "subCategory", via : "parent"},
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
