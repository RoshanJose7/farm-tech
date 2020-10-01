const mongoose = require('mongoose');

//DataBase Model
const ContactForm = mongoose.model('ContactForm', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	phno: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	message: {
		type: String,
		required: true,
		trim: true
	}
});

module.exports = ContactForm;
