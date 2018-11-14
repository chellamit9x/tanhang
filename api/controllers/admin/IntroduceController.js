/**
 * IntroduceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    setting: async (req, res)=>{

        if(req.method == 'GET'){
            let contentIntroduce = await Settings.findOrCreate({key: 'introduce'}, {key: 'introduce', value: ''});

            res.view('pages/admin/introduce/introduce_setting', {
                layout: 'layouts/admin/main',
                contentIntroduce: contentIntroduce
            });
        };

        if(req.method == 'POST'){
            let contentIntroduce = req.param('texteditor');
            let c = await Settings.update({key: 'introduce'}).set({value: contentIntroduce});
            return res.redirect('/admin/introduce');
        }
    },

    view: async (req, res)=>{

        let contentIntroduce = await Settings.findOne({key: 'introduce'});
        if (!contentIntroduce) {
            contentIntroduce = {
                value: "<h4>Chưa có nội dung giới thiệu!</h4>"
            }
        }
        res.view('pages/admin/introduce/introduce', {
            layout: 'layouts/admin/main',
            contentIntroduce: contentIntroduce
        });
    }

};

