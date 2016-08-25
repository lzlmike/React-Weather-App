/**
 * Created by Mike on 8/24/16.
 */
const Fetch = require('whatwg-fetch');
    //import 'whatwg-fetch';


const service = {
    get : (url) => {
        return fetch(url)
            .then((data) => {
                return data.json();
            });
    }
};

module.exports = service;
