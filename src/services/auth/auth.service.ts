import axiosClient from "../../helpers/apiClient";

interface IAuthLogin {
    email: string;
    password: string;
}
interface IAuthRegister {
    email: string;
    password: string;
    re_password: string;
    name: string;
}
interface IAuthVerify {
    email: string;
    token: string;
}

class Auth {
    async login({ email, password }: IAuthLogin) {
        return await axiosClient.post('/auth/jwt/create/', {
            email,
            password
        })
    }

    async register({ email, re_password, password, name }: IAuthRegister) {
        return await axiosClient.post('/auth/users/', { email, re_password, password, name })
    }

    async verifyUser({ email, token }: IAuthVerify) {
        return await axiosClient.post('/auth/users/activation/', { email, token })
    }

    async reSendOtp({ email }: { email: string }) {
        return await axiosClient.post(`/auth/users/resend_activation/`, { email })
    }

    async getAllCountryCodes() {
        return await axiosClient.get('/users/dialing_code/')
    }



}

const authService = new Auth()

export default authService