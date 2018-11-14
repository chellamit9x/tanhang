module.exports = {
    home: function (req, res) {
        return res.view('pages/home/home', { layout: 'layouts/home/main' });
    },


    about: async function (req, res) {
        let contentIntroduce = await Settings.findOne({ key: 'introduce' });
        if (!contentIntroduce) {
            contentIntroduce = {
                value: "<h4>Chưa có nội dung giới thiệu!</h4>"
            }
        }
        res.view('pages/home/about', {
            layout: 'layouts/home/main',
            contentIntroduce: contentIntroduce

        })
    },


    contact: function (req, res) {
        res.view('pages/home/contact', {
            layout: 'layouts/home/main',
            sendDone: '0'
        });
    },

    send: async (req, res) => {
        let content = req.param('message');
        let subject = content.substring(0, 55) + "....";
        await Contact.create({
            name: req.param('name'),
            phone: req.param('phone'),
            subject: subject,
            content: content,
            status: false,
            status_click: false
        });
        let sendFrom = req.param('sendFromHome');
        if (sendFrom) {
            return res.json({ statusResult: 'THANK YOU FOR CONTACTING US!' });
        };
        return res.view('pages/home/contact', {
            layout: 'layouts/home/main',
            sendDone: '1'
        });
    },

}