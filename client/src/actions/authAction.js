import * as api from '../api/index';
import { setMessage } from '../state/userSlice'

export const signin = async (formData, dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.signin(formData);

            resolve(data);
        } catch (error) {
            console.log(error.response.data.message);
            console.log("1");
            dispatch(setMessage({ msg: error.response.data.message }))
            console.log("2");
            reject(error.response.data.message);
        }
    })
}

export const signup = async (formData, dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.signup(formData);
            // console.log(data);
            resolve(data);

        } catch (error) {
            dispatch(setMessage({ msg: error.response.data.message }))
            reject(error.response.data.message);
        }

    })
}