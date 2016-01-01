function handleHTTP(req,res){
	if (req.method ==="GET")
{
	 if(req.url ==="/")
	 {
			res.writeHead(200,{"Content-type":"text/plain"});
		    setTimeout(function(){
		    	var num = Math.random();
		      setTimeout(function(){
		      	 res.end("Hello World! " + num)
		      },1000);
		    },1000);
	}
	 else
	 {
	 	res.writeHead(403);
		res.end("Get outa here!");
	 }
}
	else{
		res.writeHead(403);
		res.end("Get outa here!");
	}
}
var host="localhost";
var port =8006;
var http =require("http");
var http_serv = http.createServer(handleHTTP).listen(port,host);
