const mongoose = require('mongoose');
const {validationResult} = require('express-validator');
const Movie = require('./../models/movie');

/**
 * Create movie
 *
 * @param req
 * @param res
 * @param next
 */
exports.createMovie = (req, res, next) => {

	try {

		const {Title, DateRequested} = req.body;

		const movie = new Movie({
			_id: new mongoose.Types.ObjectId(),
			Title,
			DateRequested
		});

		movie
			.save()
			.then(r => { res.status(201).json(r); })
			.catch(e => { res.status(500).json(e); })
	} catch(e) {
		res.status(422).json(e);
	}
}

/**
 * Get all movies
 *
 * @param req
 * @param res
 * @param next
 */
exports.getMovies = (req, res, next) => {

	Movie
		.find()
		.then(r => { res.status(200).json(r); })
		.catch(e => { res.status(500).json(e); })
}