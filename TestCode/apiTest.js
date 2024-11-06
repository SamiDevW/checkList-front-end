const fs = require('fs')
const topUrl = 'https://api.jikan.moe/v4/top/anime';
fetch(`${topUrl}`)
    .then(res => {
        if (res.ok) {
            console.log('SUCCES');


        } else {
            console.log('Not successful');

        }
        return res.json()
    })
    .then(data => {


        fs.writeFile("jikanAppFullData.json", JSON.stringify(data), function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });

    })

