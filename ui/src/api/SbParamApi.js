class SbParamApi {
    static sbParamUrl = "http://localhost:8080/sbParameters";

    static getAll() {
        return fetch(this.sbParamUrl)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                return json;
            })
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