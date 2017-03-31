"use strict";

/**
 * Plan
 * @description :: Model for storing Plan records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    planName: {
      type: 'string',
      required: true,
      unique: true,
      alphanumericdashed: true
    },

    price: {
      type: 'string'
    },
    price: {
      type: 'string'
    },
    timeDuration: {
      type: 'string'
    },
    description: {
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
