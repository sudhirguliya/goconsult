"use strict";

/**
 * SubCategory
 * @description :: Model for storing SubCategory records
 */

module.exports = {
  schema: true,

  attributes: {
    name : "string",
    status_type : "string",
    parent : {model : "Category"},
	toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
