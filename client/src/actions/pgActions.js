import * as api from '../api/index';
import { isLoggedIn } from '../controllers/validate';

export const createPg = (pgDetails) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await api.addPg(pgDetails);

            resolve(data) ;
        } catch (error) {
            console.log(error.response.data.message);
            reject(error);
        }
    })
}