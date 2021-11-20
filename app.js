const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {sendEnvelopes, handleEnvelopeDelete} = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 8000;

// log http with morgan
app.use(morgan('dev'));

// parse body with body-parser
app.use(bodyParser.json());

// GET request to retrieve all envelopes
app.get('/api/envelopes', sendEnvelopes);

// DELETE an envelope
app.delete('/api/envelopes/:id', handleEnvelopeDelete);

app.listen(PORT, () => {
    console.log(`server started, listening on PORT ${PORT}`)
});