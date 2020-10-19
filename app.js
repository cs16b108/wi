const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "workindia",
  password: "1@aB2#cD3$eF",
  database : 'acc',
  insecureAuth : true
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 //    con.query("INSERT into login values ('hgh','jj') ," +"('kaar2','r');", function (err, result, fields) {
	// 	if (err) throw err;
	// 	console.log((result))
	// 	if (result[0])console.log("exists");
	// }); 
  con.query("SELECT * FROM login", function (err, result, fields) {
    if (err) throw err;
    console.log(result);

   	con.query("SELECT * FROM login where name in " +"('kaar','r')", function (err, result, fields) {
		if (err) throw err;
		console.log((result))
		if (result[0])console.log("exists",result.length, result,result[0]);
		if (result[3])console.log("exists3",result.length, result,result[0]);

	}); 
  });
});

app.get('/',(req,res) =>{
	res.send('Hello World')

})

app.get('/app/user',(req,res) =>{
	Q = "SELECT * FROM login where name in ('" +req.headers.user+"');" ;
	console.log(Q)
	con.query(Q, function (err, result, fields) {
		if (err) throw err;
		if (result.length==1){
			console.log("exists");
			res.send('Already Exists')
		}
		else {
			Q = "INSERT INTO login values ("+
  			con.query("INSERT INTO login values ", function (err, result, fields) {
    			if (err) throw err;
    			console.log(result);
  			res.send('Done')

  			});			
		}
	});


})

app.get('/app/user/auth',(req,res) =>{
	res.send(req.params)
})
app.listen(port,()=>{
	console.log('Example app')
})