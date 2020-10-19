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
		if (result[0])console.log("exists");
	}); 
  });
});

app.get('/',(req,res) =>{
	res.send("Hello World")
})

app.get('app/user',(req,res) =>{
	req.body.username
	con.query("SELECT * FROM login where name = " +req.body.name, function (err, result, fields) {
		if (err) throw err;
		if (len(res)==1)console.log("exists");
	});
  	con.query("INSERT INTO login ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  	});
})

app.get('/app/user/auth',(req,res) =>{
	res.send(req.params)
})
app.listen(port,()=>{
	console.log('Example app')
})