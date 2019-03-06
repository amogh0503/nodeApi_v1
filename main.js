var express=require('express');
var app=express();
var smail=require('./email_asset/email_module.js');
var cmail=require('./email_asset/email_client.js');
var bodyParser = require('body-parser')
var db_functions=require('./db_modules/db_functions.js');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json({extended : true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/',function (req,res)
{
    db_functions.countRows();
    
    res.json({api:'CTG_V1',siteMap:'/submit',databsase:'ctg_v1',tables:'customers',author:'Swapnil Tiwari (CodeNova). All rights reserved',cors:'Enabled', querycount:count[0].emails})
})
app.post('/submit',function(req,res){
    let customer={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        org:req.body.org,
        cno:req.body.cno,
        website:req.body.website,
        comments:req.body.comments};

    db_functions.enterDetails(customer);
    res.json({status:"200",message:"Succesfully Submitted"});
    smail(customer); cmail(customer);

})
app.listen(process.env.PORT||80,()=>(console.log('Server Started')));
process.on('uncaughtException',console.log)