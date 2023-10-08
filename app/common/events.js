const { constants } = require('./constants');


function TestEvent(e, t) {
    console.log('event.js', t);
}

function TestEventToNg(e, f) {
    console.log('to Ng', e, f);
}


module.exports = { TestEvent, TestEventToNg }