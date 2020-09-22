const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	Title: { type: String, required: true },
	DateRequested: { type: Date, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);