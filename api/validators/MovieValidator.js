const {check} = require('express-validator');

exports.validateCreateMovie = () => {
	return [
		check('Title').exists().isString(),
		check('DateRequested').exists().isNumeric()
	];
};