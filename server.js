const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, () => `Server running on port ${port}`);

app.get('/', (req, res) => {
    res.send(`This is the first HNG task. Append "/user" to the url to view the JSON`);
})

app.get('/user', (req, res) => {
    res.status(200).send({
        slackUsername: 'skrewde',
        backend:true,
        age:22,
        bio:'Neurodivergent programmer, INTP-t, League of Legends enjoyer.'
    })
});
