module.exports = {
    admin: function(req, res){
        return res.view('pages/admin/admin', {layout: 'layouts/admin/main'});
    }
}