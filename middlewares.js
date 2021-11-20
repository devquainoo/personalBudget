const {envelopes} = require('./db.js');
const {deleteEnvelope, addEvelope, getEnvelope} = require('./helpers')

function sendEnvelopes(req, res, next){
    res.status(200).json(envelopes);
}

function handleEnvelopeDelete(req, res, next){
    const name = req.params.name;
    if (deleteEnvelope(envelopes, name)){
        res.status(204).json('Delete successful');
    }else {
        res.status(404).json({response: 'Delete failed, Content Not Found'});
    }
    
}

function handleEnvelopeCreation(req, res, next){
    const data = req.body;
    if(addEvelope(envelopes, data)){
        return res.status(201).json(data);
    }
    const err = new Error('incomplete info');
    err.status = 400;
    next(err);    
}

function handleEnvelopeRetrieval(req, res, next){
    const name = req.params.name;
    const envelope = getEnvelope(envelopes, name);
    if (envelope){
        return res.status(200).json(envelope);
    }
    res.status(404).json({response: 'Not Found'});
}

function errorHandler(err,req,res,next){
    if(err){
        res.status(err.status).json(err.message);
    }
}

module.exports = {
    sendEnvelopes,
    handleEnvelopeDelete,
    handleEnvelopeCreation,
    handleEnvelopeRetrieval,
    errorHandler
}