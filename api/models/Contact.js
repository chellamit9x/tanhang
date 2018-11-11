/**
 * Contact.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    name: {
      type: 'string',
      required: true,
    },
    phone: {
      type: 'string',
      required: true
    },
    subject: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      columnType: "LONGTEXT",
      required: true
    },
    status: {
      type: 'boolean',
      required: true
    },
    status_click: {
      type: 'boolean',
      required: true
    }

  },

};

