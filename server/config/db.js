const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://dbUser:dbUserPassword@formdata.wdrz0.azure.mongodb.net/formdata?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		}
	)
	.then(console.log('Database Connected...'))
	.catch(err => console.log(err));
