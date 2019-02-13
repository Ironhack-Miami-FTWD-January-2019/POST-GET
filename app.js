// app.js
const express = require('express')
const app     = express()
const hbs     = require('hbs') 
const path = require('path')
const bodyParser = require('body-parser'); //needed for req.body
 
app.use(bodyParser.urlencoded({ extended: true })); //needed for req.body

app.use(myFakeMiddleware)
// ...
function myFakeMiddleware(req,res, next){

    //let _ = 'cool'
    //console.log(_)
    console.log("myFakeMiddleware was called!");
    next();
   //res.send('ending in the middleware')
  }



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/search', function (req, res) {
  //console.log(req)
  console.log(req.query, req.params)
  //console.log('with post its req.body', req.body)
  res.render('index')
})

app.post('/anythingatall', function (req, res) {
    //console.log(req)
    //console.log(req.query, req.params)
    console.log('with post its req.body', req.body)
    res.redirect('/successpage')
    //res.end() other options then res.redirect
    //res.json({success:true})
    //res.status 
  })


app.get('/users/:username/:occupation/:weakness', (req, res, next) => {
    console.log('params with colon',req.params)
    console.log('query with question mark?', req.query)
    res.send(JSON.stringify(req.params))
    //res.render('index')

})


app.get('/test', otherMiddleWareStuff, (req, res) => {
    let stuff = 2 + 5
    res.send("We made it to test!" +String(stuff));
});

  
function otherMiddleWareStuff(req,res,next){
    console.log('otherMiddleWareStuff')
    next()
}

app.listen(3000, () => console.log('App listening on port 3000!'))