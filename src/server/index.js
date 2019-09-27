const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();



app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

app.get('/thumb', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    ytdl.getInfo(req.query.URL)
        .then((obj) => {
            res.end(JSON.stringify({ url: obj.player_response.videoDetails.thumbnail.thumbnails[0].url }))
        }).catch(() => {
            res.end(JSON.stringify({ status: 'Failed to fetch url' }))
    })
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    let name = 'default';
    ytdl.getInfo('https://www.youtube.com/watch?v=FrX3M3qJgJU')
        .then((obj) => {
            name = (JSON.stringify(obj.player_response.videoDetails.title))
            res.header('Content-Disposition', 'attachment; filename=' + name + '.mp4');
            ytdl(URL, {
                format: 'mp4'
            }).pipe(res)
        }).catch(() => {
            res.end(JSON.stringify({status: 'Failed to fetch video title'}));
        });
});