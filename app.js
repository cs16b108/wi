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

  con.query("SELECT * FROM login", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
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
			Q = "INSERT INTO login values ('"+req.headers.user+"','"+req.headers.pwd+"');";
			console.log(Q);
  			con.query(Q, function (err, result, fields) {
    			if (err) throw err;
    			console.log(result);
  			res.send('Added New User')

  			});			
		}
	});


})

app.get('/app/user/auth',(req,res) =>{
	Q = "SELECT * FROM login where name in ('" +req.headers.user+"')  and pwd in ('" + req.headers.pwd+"');" ;
	console.log(Q)
	con.query(Q, function (err, result, fields) {
		if (err) throw err;
		if (result.length==1){
			console.log("exists");
			res.send('Logged In')
		}
		else {
			res.send('Invalid UserName or Password')
		}
	});
})
app.listen(port,()=>{
	console.log('Example app')
})