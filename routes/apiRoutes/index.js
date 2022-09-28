// include packages
const router = require("express").Router();
const fs = require("fs");

// require the json data file
const noteData = require("../../db/db.json");

// import the functions that handle the notes
const { createNote, validateNote, deleteNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
    let results = noteData;
    res.json(results);
});

router.post("/notes", (req, res) => {
    let notes = createNote(req.body, noteData);
    validateNote(notes);
    res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(noteData, req.params.id);
    res.json(noteData);
});

module.exports = router;