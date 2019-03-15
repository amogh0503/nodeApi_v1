const mysql=require('./db_initialize.js');
//console.log(mysql);
async function createTables()
{
    var table=await mysql.ExecuteQuery("CREATE TABLE customers (sno INT AUTO_INCREMENT PRIMARY KEY,firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, companyname VARCHAR(255), contactnumber VARCHAR(255) NOT NULL, website VARCHAR(255), comments VARCHAR(255))");
}
exports.enterDetails=async function (customer={})
{
    var customers=await mysql.ExecuteQuery(`INSERT INTO customers (firstname, lastname,email,companyname,contactnumber,website,comments) VALUES ('${customer.fname}', '${customer.lname}','${customer.email}','${customer.org}','${customer.cno}','${customer.website}','${customer.comments}')`);

}
exports.countRows=async function ()
{
    return new Promise( async function(res,rej)
    {
        count=await mysql.ExecuteQuery('SELECT COUNT(email) as emails FROM customers');
            res(count);

    })
    
   //console.log(count[0].emails);
}
exports.fetchQuery=async function()
{
    allquery=await mysql.ExecuteQuery('SELECT * FROM customers ORDER BY sno DESC');
}
process.on('uncaughtException',console.log);
//x={fname:'Swap',lname:'Tiwari',email:'swap@gmail.com',org:'CodeNova',cno:'123',website:'swap.com',comments:'Test'};
//enterDetails(x);
