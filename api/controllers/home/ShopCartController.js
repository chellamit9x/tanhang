/**
 * ShopCartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    show: function (req, res) {
        return res.view('pages/home/shop_cart', {
            layout: 'layouts/home/main'
        });
    },

};

