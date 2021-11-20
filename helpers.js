function createEnvelope(name, budget){
    return {
        'name': name,
        budget
    }
}
function addEvelope(envelopes, name, budget){
    const envelope = createEnvelope(name, budget);
    envelopes.push(envelope);
}

// get index of an envelope in envelopes array
function getEnvelopeIndex(envelopes, id){
    id = Number(id);
   return envelopes.findIndex(envelope => {
        if (envelope.id === id){
            return envelope
        }
    });
}

// delete  envelope by id
function deleteEnvelope(envelopes, id){
    const index = getEnvelopeIndex(envelopes, id);
    if(index > -1){
        envelopes.splice(index,1);
        console.log(envelopes)
        return true;
    }
    return false;
}

module.exports = {
    createEnvelope,
    addEvelope,
    getEnvelopeIndex,
    deleteEnvelope
}