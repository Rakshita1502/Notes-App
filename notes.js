const fs=require('fs');
const chalk=require('chalk');

var fetchNotes=()=>{
  try{
    return JSON.parse(fs.readFileSync('notes.txt'));
  }catch(err){
    return [];
  }
}

var addingNote=(title,body)=>{

  var notes=fetchNotes();
  
  var note={
    title,
    body
  };

  var double=notes.filter((note)=>note.title===title);

  if(double.length===0){
    notes.push(note);
  fs.writeFileSync("notes.txt",JSON.stringify(notes));
  }else{
    console.log(chalk.red("Title already taken!"));
  }

  notes.push(note);
  fs.writeFileSync("notes.txt",JSON.stringify(notes));
}

var removeNote=(title)=>{
  var notes=fetchNotes();
  
    var filteredNotes=notes.filter((note)=>note.title!==title);
    if(filteredNotes.length===0){
      fs.writeFileSync("notes.txt",JSON.stringify(filteredNotes));
    }
    else{
      console.log(chalk.red("Note not found!"));
    }
    
}

var readNote=(title)=>{
  var notes=fetchNotes();

  var filteredNotes=notes.filter((note)=>note.title===title);
  console.log(`${filteredNotes[0].title}`);
  console.log(`${filteredNotes[0].body}`);
}

var getAll=()=>{
  var notes=fetchNotes();

  console.log(notes);
}

module.exports={
  addingNote,
  removeNote,
  readNote,
  getAll
}