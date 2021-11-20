const {addEnvelope} = require('./helpers');

let TOTALBUDGET = 5000;

// array of envelopes
envelopes = [
    {
        name: 'gas',
        budget: 250
    },
    {
        name: 'bills',
        budget: 300
    },
    {
        name: 'groceries',
        budget: 150
    }
];

// envelope struct is an obj with name and budget

module.exports = {
    'envelopes': envelopes
}