const _ = require('lodash')

const IfEmptyThrowError = (params, msg) =>{
    if(IsEmpty(params)){
        throw Error(msg)
    }
}

const IfNotEmptyThrowError = (params, msg) =>{
    if(!IsEmpty(params)){
        throw Error(msg)
    }
}

const IsEmpty = (params) =>{
    if(typeof params === 'object'){
        if(_.isEmpty(params)){
            return true
        } else {
            return false
        }
    } else {
        if(params === 0 || params.length === 0){
            return true
        } else {
            return false
        }
    }
}

module.exports = {
    IfEmptyThrowError,
    IfNotEmptyThrowError,
    IsEmpty
}