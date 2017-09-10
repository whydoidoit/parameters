var queryString = require('query-string')

var parameters = {}
try {
    parameters = queryString.parse(window.location.search)
} catch(e) {

}

module.exports = parameters
