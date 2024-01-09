const express = require('express');
const photos = require('./photos.json');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

app.get('/',(req,res) =>{
    res.send('my photos is comming soon')
})

app.get('/photos',(req,res) =>{
    res.send(photos)
} )
app.get('/photos/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    console.log('photo id',id);
    const photo = photos.find( photo => photo.id === id) || {};
    res.send(photo);

} )

app.listen(port, () =>{
    console.log(`my photos server is running on:${port}`)
})

