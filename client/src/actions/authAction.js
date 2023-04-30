import * as api from '../api/index';

export const signin = async (formData) => {
    try {
        const { data } = await api.signin(formData);
        
        return data ;
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = async (formData) => {
    try {
        const { data } = await api.signup(formData);

        return data;
    } catch (error) {
        console.log(error.message);
    }
}