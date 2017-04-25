const app = require('express')();
const bodyParser = require('body-parser');
const {person, beer} = require('./app');

app.use(bodyParser.json());

app.use('/person', person.resource);
app.use('/beer', beer.resource);

app.listen(3000, '0.0.0.0', () => {
    console.log('> Server listening on 3000')
})