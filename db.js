const {addEnvelope} = require('./helpers');

// array of envelopes
envelopes = [
    {
        id: 1,
        name: 'gas',
        budget: 250
    },
    {
        id: 2,
        name: 'bills',
        budget: 300
    },
    {
        id: 3,
        name: 'groceries',
        budget: 150
    }
];

// envelope struct is an obj with name and budget

module.exports = {
    'envelopes': envelopes
}