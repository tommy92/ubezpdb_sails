/**
 * Customer
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      columnName: 'imie'
    },

    surname: {
      type: 'string',
      columnName: 'nazwisko'
    },

    street: {
      type: 'string',
      columnName: 'ulica'
    },

    street_number: {
      type: 'string',
      columnName: 'numer_domu'
    },

    city: {
      type: 'string',
      columnName: 'miasto'
    },

    phone_number: {
      type: 'integer',
      columnName: 'nr_tel'
    },

    zip_code: {
      type: 'string',
      columnName: 'kod_pocztowy'
    },

    archived: 'boolean'
  },

  tableName: 'customers'

};
