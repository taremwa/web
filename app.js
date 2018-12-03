var express = require('express')
var path = require ("path")

var hbs = require ("express-handlebars");

var app = express()

app.set('port', process.env.PORT || 4000)

app.engine("handlebars", hbs({defaultLayout: "main"}));

//set public as folder for the files to be rendered.
app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/public/home.html"))
})

app.listen(app.get('port'), ()=>{
    console.log('server started!!')
})
