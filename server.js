const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var distDir = __dirname + "/build/";
console.log("distDir", distDir)
app.use(express.static(distDir));
app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
});
app.listen(port, () => {
    console.log('Server is up!');
});