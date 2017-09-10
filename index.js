import queryString from 'query-string'

let parameters = {}
try {
    parameters = queryString.parse(window.location.search)
} catch(e) {

}

export default parameters
