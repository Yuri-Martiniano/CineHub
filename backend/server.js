const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const videosDirectory = path.join(__dirname, 'D:docker/jellyfin/media');


app.get('/videos', (req, res) => {
    fs.readdir(videosDirectory, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao listar os arquivos.');
        }
        res.json(files);
    });
});


app.use('/videos', express.static(videosDirectory));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
