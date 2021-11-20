/**
 * Buku.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "buku",

  attributes: {
    isbn: {
      type: "string",
      unique: true,
      required: true,
      minLength: 10,
      maxLength: 10,
      columnType: "char(10)",
    },
    id_kategori: {
      model: "Kategori",
    },
    judul: {
      type: "string",
      required: true,
    },
    pengarang: {
      type: "string",
      required: true,
    },
    penerbit: {
      type: "string",
    },
    kota_terbit: {
      type: "string",
    },
    editor: {
      type: "string",
    },
    file_gambar: {
      type: "string",
    },
    stok: {
      type: "number",
      required: true,
    },
    stok_tersedia: {
      type: "number",
    },
  },
};
