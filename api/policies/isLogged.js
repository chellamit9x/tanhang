module.exports = async function (req, res, proceed) {
  if (req.session.account) {
    return proceed();
  }
  const URL = sails.getUrlFor('AccountController.login');
  return res.redirect(URL);
};