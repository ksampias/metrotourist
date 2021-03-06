const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const SiteSchema = require('./site');

const TourSchema = new Schema({
	tourName: {
		type: String,
		required: [true, "Tour name is required"],
		unique: true
	},
	description: String,
	tourStation: {
		type: String,
		required: [true, "Tour Station is required"],
	},
	tourLines: String
});

//Turn the schema into a model
const Tour = mongoose.model('tour', TourSchema);

module.exports = Tour;
