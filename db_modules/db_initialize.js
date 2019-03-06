const mysql=require('mysql');
global.db=null;
const creds=require('./config.json');
global.dbName=creds.database;
global.mysql=mysql;
async function connect()
{
    if(global.db)return global.db;
    return new Promise((res,rej)=>
    {
        let con=mysql.createConnection(creds);
        var conerror=(e)=>{global.db=null;console.info('DB disconnected');};
        con.connect((err)=>
        {
            if(err)conerror(err);
            else global.db=con;
            console.info('Db Connected')
            res(global.db);
        });
        con.on('error',conerror);
    })
}

async function createdb(dbname)
{
    if(!dbname)throw "illegale dbname";
    return ExecuteQuery("CREATE DATABASE "+dbname+"")  
}
async function ExecuteQuery(qr="")
{
    if(!global.db)global.db=await connect();
    return new Promise((res,rej)=>
    {
       global.db.query(qr,(err,result)=>
        {
            if(err)rej(err.code)
            else {console.log("Query Executed"); res(result)};
        });
    })
}
process.on('uncaughtException',console.log)
module.exports={connect,ExecuteQuery,createdb}
