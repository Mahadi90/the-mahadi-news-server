const express =  require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/categories.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Mahadi news is runningggg...')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Mahadi news is running on port ${port}`)
})