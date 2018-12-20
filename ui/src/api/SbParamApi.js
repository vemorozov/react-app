const sbParamUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/sbParameters' : '/sbParameters';

class SbParamApi {

    static getAll() {
        return fetch(sbParamUrl)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                return json;
            })
            .catch(err => {
                throw err;
            });
    }

    static commit(commitRequest) {
        return fetch(sbParamUrl + '/commit', {
            method: 'POST',
            body: JSON.stringify(commitRequest),
            headers: {'Content-Type': 'application/json'},
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => json)
            .catch(err => {
                throw err;
            });
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export default SbParamApi;