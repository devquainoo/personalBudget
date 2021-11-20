function createEnvelope(name, budget){
    return {
        name,
        budget
    }
}
function addEvelope(envelopes, data){
    const keys = Object.keys(data);

    if(keys.includes('name') || keys.includes('budget')){
        if(data.name || data.budget){
            const envelope = createEnvelope(data.name, data.budget);
            envelopes.push(envelope);
            return true;
        }
    }
    return false;
}

// get index of an envelope in envelopes array
function getEnvelopeIndex(envelopes, name){
   return envelopes.findIndex(envelope => {
        if (envelope.name === name){
            return envelope
        }
    });
}
// get envelope
function getEnvelope(envelopes, name){
    const index = getEnvelopeIndex(envelopes, name);
    if(index > -1){
        return envelopes[index]
    }else{
        return null;
    }
}

// update all envelopes amount if theres any envelop
function updateEnvelopesAmount(envelopes, amount){
    if(envelopes.length){
        envelopes.forEach(env => {
            env.budget += amount;
        })
        return envelopes;
    }
    else{
        return {};
    }
} 

// delete  envelope by name
function deleteEnvelope(envelopes, name){
    const index = getEnvelopeIndex(envelopes, name);
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
    getEnvelope,
    updateEnvelopesAmount,
    deleteEnvelope
}