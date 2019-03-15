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
app.get('/', async function (req,res)
{
     await db_functions.countRows();
    
    res.json({api:'CTG_V1',siteMap:'/submit,/fetch',databsase:'ctg_v1',tables:'customers',author:'Swapnil Tiwari (CodeNova). All rights reserved',cors:'Enabled', querycount:count[0].emails})
})
app.get('/fetch', async function(req,res)
{
    await db_functions.fetchQuery();
    var result=`<head><title>Query Record</title>
    <style>  
        .result_table
        {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        .result_table td, .result_table th
        {
            border: 1px solid #ddd;
            padding: 8px;
        }
        td:nth-child(1)
        {
            text-align:center;
        }
        .result_table tr:nth-child(even){background-color: #f2f2f2;}

        .result_table tr:hover {background-color: #ddd;}

        .result_table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #05668D;
            color: white;
        }
    </style>
    <link href='/css/style.css' rel='stylesheet' ></head><body> <table class='result_table' style=''><tr><th>Customer Name</th><th>Email</th><th>Company Name</th><th>Contact Number</th></tr>`
   
    for(let each of allquery)
    {
        result+=`<tr><td>${each['firstname']} ${each['lastname']}</td><td>${each['email']}</td><td>${each['companyname']}</td><td>${each['contactnumber']}</td></tr>`
    }
    result+='</table></body>';
    res.setHeader('content-type','text/html');
    res.end(result);

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
app.listen(process.env.PORT||8888,()=>(console.log('Server Started')));
process.on('uncaughtException',console.log)