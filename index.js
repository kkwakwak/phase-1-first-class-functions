function receivesAFunction(callBack) {
    return callBack()
}

receivesAFunction(function () {
    return "something"
})

function returnsANamedFunction () {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function() {} 
}