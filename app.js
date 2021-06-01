console.log("app.js starting");


const yargs=require("yargs");
const notes=require('./notes.js');
const argv=yargs.argv;


var title=yargs.argv.title;
var body=yargs.argv.body;
var command=yargs.argv._[0];

if(command==="add"){
  notes.addingNote(title,body);
  console.log("New note created");
}
else if(command==="remove"){
  notes.removeNote(title);
  console.log("Note removed!");
}
else if(command==="read"){
  console.log("reading notes");
  notes.readNote(title);
}
else if(command==="list"){
  console.log("Your Notes:");
  notes.getAll();
}
else{
  console.log("Unknown command was used");
}
