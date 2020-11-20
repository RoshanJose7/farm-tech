const mongoose = require('mongoose');
const data = require('./keys');

mongoose
	.connect(
		`mongodb+srv://${data.user}:${data.passwd}@formdata.wdrz0.azure.mongodb.net/formdata?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		}
	)
	.then(console.log('Database Connected...'))
	.catch(err => console.log(err));
