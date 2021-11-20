/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": function (req, res) {
    const Anggota = {
      "Adinda Rosman": "24060119130085",
      "Hendinur Faizal": "24060119130053",
      "Imas Ayu Wardani": "24060119120005",
      "Muhammad Naufal Pratama": "24060119130056",
      "Safira Marsha": "24060119140111",
    };

    return res.send({
      sender: "Cenayang PBP",
      status: "SUCCESS",
      message: "Berhasil konek ke service Cenayang PBP 🚀",
      payload: {
        Kelompok: 11,
        Kelas: "A",
        Anggota,
      },
    });
  },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
