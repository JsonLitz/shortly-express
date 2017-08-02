const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  let session = models.Sessions.create();
  req.session = session;
  console.log(session);
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
