/**
 * Peminjaman.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "peminjaman",

  attributes: {
    nim: {
      model: "Anggota",
      required: true,
    },
    id_petugas: {
      model: "Petugas",
    },
    tgl_pinjam: {
      type: "number",
      required: true,
    },
    total_denda: {
      type: "number",
    },
  },
};
