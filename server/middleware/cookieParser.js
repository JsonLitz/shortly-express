const parseCookies = (req, res, next) => {
  let reqcookies = req.headers;
  let cookies = {};
  for (var key in reqcookies) {
    let cookie = reqcookies[key].split(';');
    let crumbs = cookie.map((crumb) => {
      let pair = crumb.trim().split('=');
      cookies[pair[0]] = pair[1];
    });
  }
  req.cookies = cookies;
  next();
};

module.exports = parseCookies;