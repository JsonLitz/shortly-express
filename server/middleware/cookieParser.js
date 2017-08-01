const parseCookies = (req, res, next) => {
    // console.log(req.headers);
    let reqcookies = req.headers;
    let cookies = {};
    for (var key in reqcookies) {
        let cookie = reqcookies[key].split(';');
        let crumbs = cookie.map((crumb) => {
            let pair = crumb.trim().split('=');
            cookies[pair[0]] = pair[1];
        })
    }

    console.log("this is the request", req);
    console.log('This is the response ', res)

};

module.exports = parseCookies;