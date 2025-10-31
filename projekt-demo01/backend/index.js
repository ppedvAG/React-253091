const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());

const DB = './data.json';

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const data = JSON.parse(fs.readFileSync(DB));
    const user = data.users.find(u => u.username === username && u.password === password);
    if (user) res.json({ success: true });
    else res.status(401).json({ success: false });
});

app.get('/participants', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB));
    res.json(data.participants);
});

app.post('/participants', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB));
    const newP = { ...req.body, id: Date.now() };
    data.participants.push(newP);
    fs.writeFileSync(DB, JSON.stringify(data, null, 2));
    res.json(newP);
});

app.listen(4000, () => console.log('Backend läuft auf 4000'));
