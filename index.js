 var express =require ("express");
 var app = express();
 var port = process.env.PORT || 8080;
 var bucketRoutes =require('./routes/bucketLists');
 var bodyParser = require('body-parser');

 const { User } = require('./models');
 const mongoose = require('mongoose');

 console.log('mongoose stuff initialized')

 app.use((req, res, next)=>{
     console.log('use for mongoose callback')
     if (mongoose.connection.readyState){
         console.log('if(mongoose.connection.readyState)')
         next();
     } else {
         console.log('else (mongoose.connection.readyState)')
         require('./mongo')().then(() => next());
         console.log('else (mongoose.connection.readyState)')
     }
        
 })
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res)
{res.sendFile("index.html");

})

app.use('/api/bucketLists', bucketRoutes);


app.listen(port, function(){
    console.log("App listening on PORT"+ ' ' + port)
})