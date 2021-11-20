/**
 * DetailTransaksi.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "detail_transaksi",

  attributes: {
    id_buku: {
      model: "Buku",
    },
    tgl_kembali: {
      type: "number",
    },
    denda: {
      type: "number",
    },
  },
};
