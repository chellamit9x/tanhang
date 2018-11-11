const BCRYPT = require('bcrypt');
// SET TẠM THỜI
const KEY_SIGNUP = '123123';

module.exports = {
  login: async function (req, res) {
    let strErr = null;
    if(req.method === 'POST'){
      let dataSignin = {
        email: req.body.email,
        password: req.body.password
      }
      let email = dataSignin.email.toLowerCase();
      let account = await User.findOne({email: email});
      if(!account){
        strErr = 'Tài khoản mật khẩu không trùng khớp';
        return res.view('pages/admin/signin', {notify: strErr});
      }else if(!account.isActive){
        strErr = 'Vui lòng liên hệ admin';
        return res.view('pages/admin/signin', {notify: strErr});
      }else{
        let veryPassword = BCRYPT.compareSync(dataSignin.password, account.password);
        if(!veryPassword){
          strErr = 'Sai mật khẩu';
          return res.view('pages/admin/signin', {notify: strErr});
        }else{
          req.session.account = account;
          const URL = sails.getUrlFor('admin/AdminController.admin');
          return res.redirect(URL);
        }
      }
    }
    return res.view('pages/admin/signin', {notify: strErr});
  },
  signup: async function (req, res) {
    let strErr = null;
    if(req.method === 'POST'){
      let dataSignup = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        repassword: req.body.repassword,
        secret: req.body.secret
      }
      let emailExists = await User.findOne({
        email: dataSignup.email
      });
      if(emailExists){
        strErr = 'Email này đã đăng ký tài khoản';
        return res.view('pages/admin/signup');
      }else if(dataSignup.password !== dataSignup.repassword){
        strErr = 'Mật khẩu không trùng khớp';
        return res.view('pages/admin/signup', {notify: strErr});
      }else if(dataSignup.secret !== KEY_SIGNUP){
        strErr = 'KEY đăng ký không trùng khớp';
        return res.view('pages/admin/signup', {notify: strErr});
      }else{
        let password = BCRYPT.hashSync(dataSignup.password, 10);
        let account = await User.create({
          name: dataSignup.name,
          email: dataSignup.email,
          password: password,
          isActive: true
        }).fetch();
        let url = sails.getUrlFor('admin/AdminController.admin');
        req.session.account = account;
        return res.redirect(url);
      }
    }
    return res.view('pages/admin/signup', {notify: strErr});
  },
  logout: async function (req, res) {
    if (req.session.account) {
      delete req.session.account;
    }
    let = strErr = 'Đăng xuất thành công';
    return res.view('pages/admin/signin', {notify: strErr});
  }
}