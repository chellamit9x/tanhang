module.exports.routes = {
    // ACCOUNT
    'GET /logout': 'AccountController.logout',
    'GET /login': 'AccountController.login',
    'POST /login': 'AccountController.login',
    'GET /register': 'AccountController.signup',
    'POST /register': 'AccountController.signup',

    // HOME
    'GET /': 'home/HomeController.home',

    // ADMIN
    'GET /admin': 'admin/AdminController.admin',


    // Introduce Admin
    'GET /admin/introduce/setting': 'admin/IntroduceController.setting',
    'GET /admin/introduce': 'admin/IntroduceController.view',
    'POST /admin/introduce/setting': 'admin/IntroduceController.Setting',

    // Introduce Home
    'GET /gioi-thieu': 'home/HomeController.about',


    // Contact Admin
    'GET /admin/contact': 'admin/ContactController.showPage',
    'GET /admin/contact/detail': 'admin/ContactController.detail',
    'GET /admin/contact/status': 'admin/ContactController.status',

    // Contact Home
    'GET /lien-he': 'home/HomeController.contact',
    'POST /lien-he': 'home/HomeController.send',


    //BLog Admin
    'GET /admin/blog': 'admin/BlogController.showPage',
    'GET /admin/blog/add': 'admin/BlogController.create',
    'POST /admin/blog/add': 'admin/BlogController.create',
    'GET /admin/blog/edit': 'admin/BlogController.edit',
    'POST /admin/blog/edit': 'admin/BlogController.edit',
    'POST /admin/blog/delete': 'admin/BlogController.delete',

    //BLog Home
    'GET /blog': 'homepage/BlogController.show',
    'GET /blog/:slugs': 'homepage/BlogController.detail',

};
