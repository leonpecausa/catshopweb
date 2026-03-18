const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Esto le dice a Express que sirva todos tus archivos (html, css, jpg) 
// que están en la carpeta actual
app.use(express.static(__dirname));

// Cuando alguien entre a la raíz, le enviamos inicio.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'inicio.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor de Catshop corriendo en http://localhost:${PORT}`);
});