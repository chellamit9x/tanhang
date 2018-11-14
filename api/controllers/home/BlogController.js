
const paper = require('sails-pager');
var _ = require('lodash');

module.exports = {
    show: async (req, res) => {
        let perPage = 3;
        let recentBlogs = await Blogpost.find().sort('createdAt DESC').limit(5);
        let tags = await Tag.find().sort('createdAt DESC').limit(20);
        let valueSearchs = '';
        let totalBlogs = await Blogpost.count();
        let total_pages = Math.ceil(totalBlogs / perPage);
        let tag = req.param('tag');

        let currentPage = Number(req.param('page'));
        if (!currentPage || !_.isInteger(currentPage) || (currentPage <= 0)) {
            currentPage = 1;
        };

        try {
            valueSearchs = req.param('search').toLowerCase();
        } catch (error) {
            // console.log(error);
        }

        //Search Blog
        if (valueSearchs) {
            let resultSearchs = await Blogpost.find({
                slugs: {
                    'contains': valueSearchs
                }
            });
            return res.view('pages/home/blog', {
                layout: 'layouts/home/main',
                total_pages: -1,
                listBlogs: resultSearchs.reverse(),
                recentBlogs: recentBlogs,
                tags: tags
            });
        };

        //Tag blog
        if (tag) {
            let resultTags = await Blogpost.find({
                slugs: {
                    'contains': tag
                }
            });
            return res.view('pages/home/blog', {
                layout: 'layouts/home/main',
                total_pages: -1,
                listBlogs: resultTags.reverse(),
                recentBlogs: recentBlogs,
                tags: tags
            });

        };

        if (total_pages == 0) {

            return res.view('pages/home/blog', {
                layout: 'layouts/home/main',
                current_page: currentPage,
                total_pages: total_pages,
                recentBlogs: recentBlogs,
                tags: tags
            });
        } else {
            if (currentPage > total_pages) {
                currentPage = total_pages
            };
            let skip = ((currentPage - 1) * perPage);
            let list = await Blogpost.find({
                sort: 'createdAt DESC',
                skip: skip,
                limit: perPage
            });

            return res.view('pages/home/blog', {
                layout: 'layouts/home/main',
                listBlogs: list,
                current_page: currentPage,
                total_pages: total_pages,
                recentBlogs: recentBlogs,
                tags: tags
            });
        }
    },

    detail: async (req, res) => {
        let slugs = req.param('slugs');
        let getBlog = await Blogpost.findOne({ slugs: slugs });
        if (getBlog) {
            let recentBlogs = await Blogpost.find().sort('createdAt DESC').limit(5);
            let idBlog = getBlog.id;
            let fTags = await Blogpost.findOne({id: idBlog}).populate('tags');
            return res.view('pages/home/detail_blog', {
                layout: 'layouts/home/main',
                blog: getBlog,
                recentBlogs: recentBlogs,
                tags: fTags.tags
            });
        }
    }
}