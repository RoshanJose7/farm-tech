require('./config/db');
const ContactForm = require('./config/dbModels');
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.post('/api/formdata', (req, res) => {
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
