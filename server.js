
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Hello world!");
})
const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);

app.get('/user', (req, res) => {
    res.status(200).send({
        slackUsername: 'skrewde',
        backend:true,
        age:22,
        bio:'Neurodivergent programmer, INTP-t, League of Legends enjoyer.'
    })
});
