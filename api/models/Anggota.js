/**
 * Anggota.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "anggota",

  attributes: {
    id: {
      type: "string",
      columnName: "nim",
      required: true,
    },
    nama: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    alamat: {
      type: "string",
      required: true,
    },
    kota: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      isEmail: true,
    },
    no_telp: {
      type: "string",
      required: true,
      minLength: 10,
      maxLength: 14,
    },
  },
};
