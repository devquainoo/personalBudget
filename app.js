const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {
    helloWorld,
    sendEnvelopes,
    handleEnvelopeDelete,
    handleEnvelopeCreation,
    handleEnvelopeRetrieval,
    getFromEnvelope,
    getToEnvelope,
    getEnvelope,
    handleUpdateBalance,
    handleUpdateAllEnvelopes,
    transferBalance
} = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 8000;

// log http with morgan
app.use(morgan('dev'));

// parse body with body-parser
app.use(bodyParser.json());

app.param('from', getFromEnvelope)
app.param('to', getToEnvelope);

// home
app.get('/', helloWorld)
// GET request to retrieve all envelopes
app.get('/api/envelopes', sendEnvelopes);

// Create/POST individual envelopes
app.post('/api/envelopes', handleEnvelopeCreation)

// update/transfer budget from one envelop to another
app.post("/api/envelopes/transfer/:from/:to", transferBalance);

// update balance of all nvelopes with a single amount
app.post('/api/envelopes/update-budgets-all', handleUpdateAllEnvelopes);

// get specific envelope with id/name
app.get('/api/envelopes/:name', handleEnvelopeRetrieval);

// update envelop balance
app.put('/api/envelopes/:name/update', getEnvelope, )

// DELETE an envelope
app.delete('/api/envelopes/:name', handleEnvelopeDelete);

app.listen(PORT, () => {
    console.log(`server started, listening on PORT ${PORT}`)
});