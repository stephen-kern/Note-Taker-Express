// include packages
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

// include JSON data for notes
const noteData = require('../db/db.json');

// function to create a new note
function createNote(body, notesArr) {
    const note = body;
    note.id = uniqid();
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArr)
    );
    return notesArr;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    }
    if (!note.text || typeof note.text !== "string") {
      return false;
    }
    return true;
}

function deleteNote(notesArr, id) {
    for (let i = 0; i < notesArr.length; i++) {
        if (notesArr[i].id === id) {
            notesArr.splice(i, 1);
            break;
        }
    }
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArr)
    );
}

module.exports = { createNote, validateNote, deleteNote };