var path = require("path");
var router = require("express").Router();

// responds with notes.html 
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../docs/notes.html"));
});
// other routes respond with the index.html file
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../docs/index.html"));
});

module.exports = router;