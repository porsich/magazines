var express = require('express'),
	router = express.Router(),
	fs = require('fs'),
	path = require('path'),
	mkdirp = require('mkdirp'),
	nodemailer = require('nodemailer'),
	mailgun = require('nodemailer-mailgun-transport'),
	config = require('../config');


/* GET users listing. */
router.get('/', function(req, res, next) {
/**
 * Mail sender.
 *
 * @return {Promise}
 */
console.log("hiiiiiii");
/*function sendMail ({
    from = config.emailSender,
    to = config.emailReceivers.join(', '),
    subject = 'Test',
    text
  }) {
	return new Promise(function(resolve, reject) {

		var transporter = nodemailer.createTransport(mailgun({
			auth: {
				api_key: config.mailgun.apiKey,
				domain: "api"
			}
		}));

		transporter.sendMail({
			from: from,
			to: to,
			subject: subject,
			html: text,
			attachments: attachments
		}, function(error, info){
		    if(error){
				reject(error);
			}
			resolve(info.response);
		});
	});
};*/

	res.send('respond with a resource');
});

module.exports = router;
