const {envelopes} = require('./db.js');
const {deleteEnvelope} = require('./helpers')

function sendEnvelopes(req, res, next){
    res.status(200).json(envelopes);
}

function handleEnvelopeDelete(req, res, next){
    const id = req.params.id;
    if (deleteEnvelope(envelopes, id)){
        res.status(204).send({response: 'Delete successful'});
    }else {
        res.status(404).json({response: 'Delete failed, Content Not Found'});
    }
    
}

module.exports = {
    sendEnvelopes,
    handleEnvelopeDelete
}