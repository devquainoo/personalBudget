const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {
    sendEnvelopes,
    handleEnvelopeDelete,
    handleEnvelopeCreation,
    handleEnvelopeRetrieval
} = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 8000;

// log http with morgan
app.use(morgan('dev'));

// parse body with body-parser
app.use(bodyParser.json());

// GET request to retrieve all envelopes
app.get('/api/envelopes', sendEnvelopes);

// Create / POST individual envelopes
app.post('/api/envelopes', handleEnvelopeCreation)

// get specific envelope with id/name
app.get('/api/envelopes/:name', handleEnvelopeRetrieval)
// DELETE an envelope
app.delete('/api/envelopes/:name', handleEnvelopeDelete);

app.listen(PORT, () => {
    console.log(`server started, listening on PORT ${PORT}`)
});