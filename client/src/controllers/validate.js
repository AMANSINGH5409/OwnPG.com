import { toast } from "react-toastify";

export const isLoggedIn = async () => {
    try {
        const token = localStorage.getItem('token');

        if (!token){
            toast.error("Login First")

            return { error: "Login First" }
        } 

    } catch (error) {
        return { error: "Login First" }
    }
}