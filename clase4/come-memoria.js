const uuid = require('uuid').v4;
const _ = require('underscore');

const arr = [];

function generauuid() {
    for (let x of _.range(10000)) {
        arr.push(uuid())
    }
    console.log(arr.length)
    _.delay(generauuid, 1)
}

_.defer(generauuid)