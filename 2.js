 function printHelp(){
 	console.log("2.js (c) Mandeep Singh");
 	console.log("");
 	console.log("usage:");
 	console.log("--help             print this help");
 	console.log("--file={NAME}      read the file of {NAME} and output it");
 	console.log("");
 }
var args =require("minimist")(process.argv.slice(2),{ string:"file"});
  if(args.help || !args.file){
  	printHelp();
  	process.exit(1);
  }

  require("./helloworld.js")
