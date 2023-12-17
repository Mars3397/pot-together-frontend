import axios from "axios";
import API from "api";

/**
 * structure for Signup request data
 * @field avatar: avatar number
 * @field name: user name
 * @field email: user email
 * @field password: user password
 */
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

/**
 * structure for Login request data
 * @field email: user email
 * @field password: user password
 */
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

export const GetOverview = async () => {
    const response = await axios({
        method: "GET",
        url: API.overview,
    });
    return response.data;
}
