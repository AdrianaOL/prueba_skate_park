const express = require('express')
const {SkatersGet} = require('./queries')
const app = express()
const { engine } = require('express-handlebars')
const {
  getSkaters,
  postSkaters,
  putSkaters,
  deleteCourse,
} = require('./functions')


// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

app.get('/api/v1/skaters', getSkaters)

app.post('/api/v1/skaters', postSkaters)

app.put('/api/v1/skaters/:id', putSkaters)

app.delete('/api/v1/skaters/:id', deleteCourse)

//-----------
app.engine(
	'handlebars',
	engine({
		layoutsDir: __dirname + '/views',
		partialsDir: __dirname + '/views/componentes/',
	})
)

app.set('view engine', 'handlebars')

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/public', express.static(__dirname + '/public'))

app.use('/public', express.static(__dirname + '/public'))

app.use('/img', express.static(__dirname + '/img'))

app.get('/',  async (req, res) => {
	const getData = await SkatersGet()
	res.render('concursantes', {
		getData: getData,
	})
})

app.get('/registro',  async (req, res) => {
	res.render('Registro')
})
// Handlebars

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
