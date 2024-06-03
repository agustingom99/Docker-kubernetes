const express = require('express');
const app = express();
const request = require('request');
const wikip = require('wiki-infobox-parser');

//ejs
app.set("view engine", 'ejs');

//routes
app.get('/', (req,res) =>{
    res.render('index');
});

app.get('/index', (req,response) =>{
    let url = "https://en.wikipedia.org/w/api.php"
    let params = {
        action: "opensearch",
        search: req.query.person,
        limit: "1",
        namespace: "0",
        format: "json"
    }

    url = url + "?"
    Object.keys(params).forEach( (key) => {
        url += '&' + key + '=' + params[key]; 
    });

    //get wikip search string
    request(url,(err,res, body) =>{
        if(err) {
            response.status(404).send("Not Found");

        }
        result = JSON.parse(body);
        if (result[3] && result[3][0]) {
            let x = result[3][0];
            x = x.substring(30, x.length); 
            //get wikip json
            wikip(x , (err, final) => {
                if (err){
                    response.status(404).send("Not Found");
                }
                else{
                    const answers = final;
                    response.send(answers);
                }
            });
        } else {
            response.status(404).send("Not Found");           

        }
    });

    
});

//port
app.listen(3000, console.log("Listening at port 3000..."))
module.exports = app;