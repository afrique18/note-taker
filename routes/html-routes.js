const path = require('path');


module.exports = (app) => {

// GET requst for HTML, and handles when users visits page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

// Defaults to home page if no matching route is found

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};