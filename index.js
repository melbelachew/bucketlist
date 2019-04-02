 var express =require ("express");
 var app = express();
 var port = process.env.PORT || 8080;
 var bucketRoutes =require('./routes/bucketLists');
 var bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res)
{res.sendFile("index.html");

});

app.use('/api/bucketLists', bucketRoutes);


app.listen(port, function(){
    console.log("App listening on PORT"+ ' ' + port)
})