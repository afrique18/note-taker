const path= require("path");
const fs = require("fs")

const { v4: uuidvd} = require('uuid');

// Routing and API Get request
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../db/db.json"));  
    });

    // Api post request
    app.post("/api/notes", (req, res) => {
        let db = fs.readFileSync("db/db.jsoon")
        db = JSON.parse(db);
        res.json(db);

        let userNote = {
            title: req.body.title,
            text: req.body.text,

            itemId: uuidv4(),
        };

        db.push(userNote);
        fs.writeFileSync("db/db.json", JSON.stringify(db));
        res.json(db);
    });

    // API delete request
    app.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSyn('db/db.json'))

        let deleteNotes = db.filter(item => item.id !== req.params.id);

        fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);
    })
};