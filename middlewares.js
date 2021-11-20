const {envelopes} = require('./db.js');
const {deleteEnvelope, addEvelope, getEnvelope, updateEnvelopesAmount} = require('./helpers')

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

//handles transfer of balances between envelopes
function getFromEnvelope(req, res, next, name){
    const envelope = getEnvelope(envelopes, name);
    req.fromEnvelope = envelope;
    next();
}
function getToEnvelope(req, res, next, name){
    const envelope = getEnvelope(envelopes, name);
    req.toEnvelope = envelope;
    next();
}
function transferBalance(req, res, next){
    const amount = Number(req.headers.amount)
    if(amount){
        if(req.fromEnvelope.budget >= amount){
            req.toEnvelope.budget += amount;
            req.fromEnvelope.budget -= amount;

            responseObj = {
                response: 'budget transfer succesful',
                from: req.fromEnvelope,
                to: req.toEnvelope
            }
            res.status(201).json(responseObj);
        }else{
            const err = new Error('Amount is less to be transferred')
            err.status = 400;
            return next(err);
        }

    } else {
        const err = new Error('Amount not specified')
        err.status = 400;
        return next(err);
    } 
}

// update all balnces with a single amount
function handleUpdateAllEnvelopes(req, res, next){
    const amount = Number(req.headers.amount)
    if(amount){
        const updatedEnvelopes = updateEnvelopesAmount(envelopes, amount);
        if(updatedEnvelopes){
            return res.status(201).json({response: 'update successful', updatedEnvelopes});
        }
    }
    res.status(400).json({respopnse: 'update failed'});
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
    transferBalance,
    getFromEnvelope,
    getToEnvelope,
    handleUpdateAllEnvelopes,
    errorHandler
}