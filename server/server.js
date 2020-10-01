require('./config/db');
const ContactForm = require('./config/dbModels');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 443;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', () => {
	+app.get('/*', function (req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
});

app.post('/contact', (req, res) => {
	const formInput = new ContactForm({
		name: req.body.name,
		phno: req.body.phno,
		email: req.body.email,
		message: req.body.message
	});

	formInput
		.save()
		.then(() => console.log('Saved to DataBase'))
		.catch(err => console.log(err));

	return res.send('Data received!');
});

app.listen(port, () => {
	console.log('Server is up on port:' + port);
});
