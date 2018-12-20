const userApiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '';

class UserApi {

    static getAll() {
        return fetch(userApiUrl)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                return json;
            })
            .catch(err => {
                throw err;
            });
    }

    static login(request) {
        const formData = new FormData();
        Object.keys(request).forEach(key => formData.append(key, request[key]));

        return fetch(userApiUrl + '/login', {
            method: 'POST',
            body: formData
        })
            .then(handleErrors)
            .then(resp => {
                return resp;
            })
            .then(response => response)
            .catch(err => {
                throw err;
            });
    }

    static logout() {
        return fetch(userApiUrl + '/logout', {
            method: 'POST'
        })
            .then(handleErrors)
            .then(resp => resp)
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

export default UserApi;