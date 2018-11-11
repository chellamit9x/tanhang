const _ = require('lodash');
const Joi = require('joi');
const fs = require('fs');
const slugify = require('slugify')
const slug = require('slug')

module.exports = {

    create: async (req, res) => {

        //Get array tags
        let listTags = [];
        let availableTags = await Tag.find();
        for (let i = 0; i < availableTags.length; i++) {
            listTags.push(availableTags[i].name);
        };

        if (req.method === 'GET') {            
            return res.view('pages/admin/blog/add_blog', {
                layout: 'layouts/admin/main',
                listTags: listTags,
                errors: 0
            });
        };
 
        if (req.method === 'POST') {

            // Function upload file for blog page
            function upfile(idInput, idInputName) {
                let optionsUpload = {
                    dirname: process.cwd() + '/assets/home/img/content/blog/',
                    saveAs: idInputName,
                    maxBytes: 10000000
                };
                req.file(idInput).upload(optionsUpload, (err, files) => {
                    if (err) return res.serverError(err);

                    let uploadLocation = process.cwd() + '/assets/home/img/content/blog/' + idInputName;
                    let tempLocation = process.cwd() + '/.tmp/public/home/img/content/blog/' + idInputName;
                    fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));
                });
            };

            let imageUpload = req.param('imageUpload');
            if (imageUpload !== undefined) {
                if (imageUpload) {
                    return upfile('datafile', imageUpload);
                }
            } else {
                let thumbnailName = req.param('thumbnailName');
                let imageThumbnail = '/home/img/content/blog/';
                let isUp = true;
                if (thumbnailName === '') {
                    thumbnailName = 'null'
                    imageThumbnail = '/home/img/content/blog/b-9.jpg';
                    isUp = false;
                } else {
                    imageThumbnail = imageThumbnail + thumbnailName;
                };

                let data = {
                    thumbnailName: thumbnailName,
                    title: req.param('title'),
                    author: "Admin",
                    imageThumbnail: imageThumbnail,
                    shortContent: req.param('textShortContent'),
                    content: req.param('textContent'),
                    tags: req.param('tags'),
                }

                const schema = {
                    thumbnailName: Joi.string(),
                    title: Joi.string().min(10).max(300).required(),
                    author: Joi.string(),
                    imageThumbnail: Joi.string(),
                    shortContent: Joi.string().min(20).max(600).required(),
                    content: Joi.string().required(),
                    tags: Joi.required(),
                }

                let errors = [];
                const { error, value } = Joi.validate(data, schema);
                if (error) {
                    let errorsResult = error.details;
                    _.each(errorsResult, function (errorResult) {
                        errors.push({ value: errorResult.context.key, message: errorResult.message, success: false });
                    });
                    return res.send(errors[0]);
                } else {
                    if (value.tags.length < 1) {
                        errors.push({ value: 'tags', message: "Tags blog is required!", success: false });
                        return res.send(errors[0]);
                    } else {
                        if (isUp) {
                            upfile('thumbnailImage', value.thumbnailName);
                        }




                        let blogNew = await Blogpost.create({ title: value.title, slugs: slug(value.title), author: value.author, imageThumbnail: value.imageThumbnail, content: value.content, shortContent: value.shortContent }).fetch();
                        for (let i = 0; i < value.tags.length; i++) {
                            let tagId = await Tag.findOrCreate({ name: value.tags[i] }, { name: value.tags[i],  slugs: slug(value.tags[i]) });
                            await Blogpost.addToCollection(blogNew.id, 'tags', tagId.id);
                        }
                        return res.send({ message: 'null', success: true });
                    }
                }
            }
        };
    },

    edit: async (req, res) => {

        let id = req.param('id');
        if (!id) {
            return res.redirect('/admin/blog');
        };

        if (req.method === 'GET') {
            let listTags = [];
            let availableTags = await Tag.find();

            for (let i = 0; i < availableTags.length; i++) {
                listTags.push(availableTags[i].name);
            };

            let blogPost = await Blogpost.findOne({ id: id });
            if (!blogPost) {
                return res.redirect('/admin/blog');
            }
            return res.view('pages/admin/blog/edit_blog', {
                layout: 'layouts/admin/main',
                blogPost: blogPost,
                listTags: listTags
            });
        };

        if (req.method === 'POST') {

            // Function upload file for blog page
            function upfile(idInput, idInputName) {
                let optionsUpload = {
                    dirname: process.cwd() + '/assets/home/img/content/blog/',
                    saveAs: idInputName,
                    maxBytes: 10000000
                };
                req.file(idInput).upload(optionsUpload, (err, files) => {
                    if (err) return res.serverError(err);

                    let uploadLocation = process.cwd() + '/assets/home/img/content/blog/' + idInputName;
                    let tempLocation = process.cwd() + '/.tmp/public/home/img/content/blog/' + idInputName;
                    fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));
                });
            };

            let imageUpload = req.param('imageUpload');
            if (imageUpload !== undefined) {
                if (imageUpload) {
                    return upfile('datafile', imageUpload);
                }
            } else {
                let thumbnailName = req.param('thumbnailName');
                let imageThumbnail = '/home/img/content/blog/';
                let isUp = true;
                if (thumbnailName === '') {
                    thumbnailName = 'null'
                    imageThumbnail = '/home/img/content/blog/b-9.jpg';
                    isUp = false;
                } else {
                    imageThumbnail = imageThumbnail + thumbnailName;
                };

                let data = {
                    thumbnailName: thumbnailName,
                    title: req.param('title'),
                    author: req.session.user.name,
                    imageThumbnail: imageThumbnail,
                    shortContent: req.param('textShortContent'),
                    content: req.param('textContent'),
                    tags: req.param('tags'),
                }

                const schema = {
                    thumbnailName: Joi.string(),
                    title: Joi.string().min(10).max(300).required(),
                    author: Joi.string(),
                    imageThumbnail: Joi.string(),
                    shortContent: Joi.string().min(20).max(600).required(),
                    content: Joi.string().required(),
                    tags: Joi.required(),
                }

                let errors = [];
                const { error, value } = Joi.validate(data, schema);
                if (error) {
                    let errorsResult = error.details;
                    _.each(errorsResult, function (errorResult) {
                        errors.push({ value: errorResult.context.key, message: errorResult.message, success: false });
                    });
                    return res.send(errors[0]);
                } else {
                    if (value.tags.length < 1) {
                        errors.push({ value: 'tags', message: "Tags blog is required!", success: false });
                        return res.send(errors[0]);
                    } else {
                        if (isUp) {
                            upfile('thumbnailImage', value.thumbnailName);
                        }
                        let blogNew = await Blogpost.update({ id: id }).set({ title: value.title, slugs: slug(value.title), author: value.author, imageThumbnail: value.imageThumbnail, shortContent: value.shortContent, content: value.content }).fetch();
                        for (let i = 0; i < value.tags.length; i++) {
                            let tagId = await Tag.findOrCreate({ name: value.tags[i] }, { name: value.tags[i], slugs: slug(value.tags[i]) });
                            await Blogpost.addToCollection(blogNew[0].id, 'tags', tagId.id);
                        }
                        return res.send({ message: 'null', success: true });
                    }
                }
            }
        };
    },

    showPage: async (req, res) => {

        let currentPage = Number(req.param('page'));
        if (!currentPage || !_.isInteger(currentPage) || (currentPage <= 0)) {
            currentPage = 1;
        }
        let list = await Blogpost.find();
        let totalRecord = list.length;
        let limit = 10;
        let totalPages = Math.ceil(totalRecord / limit);
        if (totalPages == 0) {
            return res.view('pages/admin/blog/list_blog', {
                layout: 'layouts/admin/main',
                totalPages: totalPages,
                currentPage: currentPage,
                limit: limit
            });
        } else {

            if (currentPage > totalPages) {
                currentPage = totalPages
            }
            let skip = ((currentPage - 1) * limit);

            let lsFind = await Blogpost.find({
                sort: 'createdAt DESC',
                skip: skip,
                limit: limit
            });

            return res.view('pages/admin/blog/list_blog', {
                layout: 'layouts/admin/main',
                listBlogs: lsFind,
                totalPages: totalPages,
                currentPage: currentPage,
                limit: limit
            });
        }
    },

    delete: async (req, res) => {
        if (req.method === 'POST') {
            let id = req.param('id');
            let arrId = req.param('arrId');

            console.log(id);
            console.log(arrId);
            
            

            if (arrId !== undefined) {
                if (arrId) {
                    for (let i = 0; i < arrId.length; i++) {
                        let idInArrId = arrId[i];

                        if (!idInArrId) {
                            return res.redirect('/admin/blog');
                        };
                        let query = { id: idInArrId };
                        await Blogpost.destroy(query);
                    }
                }
            } else {

                if (!id) {
                    return res.redirect('/admin/blog');
                };
                let query = { id: id };
                await Blogpost.destroy(query);
            }
            return res.redirect('/admin/blog');
        }
    }
}
