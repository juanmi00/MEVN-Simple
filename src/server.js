const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const itemRoutes = require('./routes/item.js')
mongoose.Promise = global.Promise
mongoose
	.connect('mongodb://localhost/mevn-stack')
	.then(db => { console.log('db Connected') })
	.catch(err => {console.log(error)})



//settings
app.set('port',process.env.PORT || 3000)


//middelwares

app.use(cors())
app.use(bodyParser.json())

//routes
app.use( '/item' , itemRoutes )

//statics files
app.use(express.static( path.join(__dirname , 'public') ) )

app.listen(3000, ()=>{
	console.log('Server on port',app.get('port'))
})