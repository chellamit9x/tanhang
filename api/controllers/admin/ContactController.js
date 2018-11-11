
var _ = require('lodash');

module.exports = {

    showPage: async (req, res)=>{

        let currentPage = Number(req.param('page'));
        if(!currentPage || !_.isInteger(currentPage) || (currentPage <= 0)){
            currentPage = 1;
        };

        let list = await Contact.find();
        let totalRecord = list.length;
        let limit = 10;
        let totalPages = Math.ceil(totalRecord/limit);

        if(totalPages == 0){
            return res.view('pages/admin/contact/list_contact',{
                layout: 'layouts/admin/main',
                totalPages: totalPages,
                currentPage: currentPage,
                limit: limit
            });            
        } else {
            if(currentPage > totalPages){
                currentPage = totalPages
            }
            let skip = ((currentPage - 1)*limit);
    
            let lsFind = await Contact.find({
                sort: 'createdAt DESC',
                skip: skip,
                limit: limit
            });
            return res.view('pages/admin/contact/list_contact',{
                layout: 'layouts/admin/main',
                listContacts: lsFind,
                totalPages: totalPages,
                currentPage: currentPage,
                limit: limit
            });
        }
    },

    detail: async (req, res)=>{

        let id = req.param('id');
        if(!id){
            return res.redirect('/admin/contact');
        };

        let query = {id: id};
        let detailContact = await Contact.findOne(query);
        if(detailContact){
            await Contact.update(query).set({status_click: true}).fetch();
            return res.view('pages/admin/contact/detail_contact', {
                layout: 'layouts/admin/main',
                detailContact: detailContact
            });
        }
        return res.redirect('/admin/contact');
    },

    status: async (req, res)=>{
        let id = req.param('id');
        let query = {id: id};
        await Contact.update(query).set({status: true});
        return res.redirect('/admin/contact/detail?id='+id);
    },

}