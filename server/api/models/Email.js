"use strict";

/**
 * Email
 * @description :: Model for storing Email records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
