var express = require('express');
var app = express();
var path = require('path');

// app.set('views', __dirname + '/views'); 

app.set('view engine', 'users.ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + "/static"));

console.log(__dirname)

app.get('/', function(request, response){
    response.send("This is the root route for all you mofo's out there that doubt me.")
});

app.get('/cars', function(request, response){
    response.render('cars.html')
})
app.get('/cats', function(request, response){

    response.sendFile(path.join(__dirname+'/static/cats.html'));

})
app.get('/form', function(request, response){

    response.sendFile(path.join(__dirname+'/static/form.html'));

})
app.listen(8000, function() {
    console.log("listening on port 8000");
})