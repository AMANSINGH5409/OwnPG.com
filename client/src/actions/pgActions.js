import * as api from '../api/index';

export const createPg = (pgDetails) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("hi");
            const data = await api.addPg(pgDetails);

            resolve(data) ;
        } catch (error) {
            console.log(error.response.data.message);
            reject(error);
        }
    })
}