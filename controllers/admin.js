/**
 * GET /
 * Home page.
 */

exports.getiIndex = function(req, res) {
  res.render('admin/index', {
    title: 'Admin Panel',
    url: '/administration'
  });
};

