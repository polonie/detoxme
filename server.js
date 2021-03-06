const express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use(favicon(path.join(__dirname, 'favicon', 'favicon.ico')));
app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', (req, res)=>{
	res.render('index');
});

app.get('/:page?', (req,res)=>{
	if (req.params.page){
		res.redirect('/');
	}
});

app.listen(port, ()=>{
	console.log('Server is running...');
});