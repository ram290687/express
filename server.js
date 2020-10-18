const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/v1/parse', (req, res) => {
    var data=req.body.data;
    var firstName = data.substring(0,8)
    var lastName = data.substring(8,18)
    var clientId = data.substring(18,25)
    res.json({
        statusCode: 200,
        data:  {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    })
});

app.post('/api/v2/parse', (req, res) => {
    var data = req.body.data;
    var firstName = data.substring(0,4)
    var lastName = data.substring(8,15)
    var clientId = data.substring(18,21)+"-"+data.substring(21,25)
    console.log(clientId)
    res.json({
        statusCode: 200,
        data:  {
            firstName: firstName,
            lastName: lastName,
            clientId: clientId
        }
    })
});

app.listen(8080, () => console.log("Started server at http://localhost:8080!"));
