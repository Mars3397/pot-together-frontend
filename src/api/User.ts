import API from "api";
import axios from "axios";

interface SignupData {
    avatar: number;
    name: string;
    email: string;
    password: string;
}

export const Signup = async (data: SignupData) => {
    const response = await axios({
        method: "POST",
        url: API.signup,
        data,
    });
    return response.data;
}

interface LoginData {
    email: string;
    password: string;
}

export const Login = async (data: LoginData) => {
    const response = await axios({
        method: "POST",
        url: API.login,
        data,
    });
    return response.data;
}
