import * as api from '../api/index';

export const signin = async (formData) => {
    try {
        const { data } = await api.signin(formData);

        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = async (formData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.signup(formData);
            // console.log(data);
            resolve(data);

        } catch (error) {
            console.log(error.response.data.message);
            reject(error.response.data.message);
        }

    })
}