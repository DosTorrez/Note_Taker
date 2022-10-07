const router = require("express").Router();
const store = require("../db/store");

//GET "/api/notes" responds with all notes from the database 
router.get("/notes", function(req, res) {
    store
    .getNotes()
    .then(notes => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// Delete "/api/notes"
router.delete("/notes/:id", function(req, res) {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ on: true}))
    .catch(err => res.status(500).json(err));
});

module.exports = router;