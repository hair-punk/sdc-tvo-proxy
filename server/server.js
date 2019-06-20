const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use( function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "origin, xRequested-With, Content-Type, Accept")
	next();
})

app.get("/", (req, res)=> {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})




app.listen(PORT, ()=> {
	console.log('sdc-proxy server listening on port ', PORT)
})